#!/usr/bin/env node
/**
 * verify-i18n-output.js
 *
 * Post-build guardrail for the bilingual (EN/DE) static export.
 * Inspects the generated `out/` folder and FAILS the build (exit 1) if any of the
 * i18n / SEO invariants are broken. Run via `npm run verify:i18n` (also wired into
 * `npm run build`).
 *
 * Checks:
 *   - all required EN/DE localized pages exist
 *   - all old-URL bridge pages exist (flat `.html` + directory `index.html`)
 *   - each localized page has correct <html lang>, self-canonical, and
 *     hreflang alternates (en / de / x-default)
 *   - work pages carry metadata (title + canonical)
 *   - bridge pages carry `noindex, follow`, canonical, meta-refresh, JS redirect, fallback link
 *   - the old email `info@ravian-matrix.de` appears nowhere in the output
 *   - sitemap.xml lists every localized URL plus hreflang alternates (incl. x-default)
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "out");
const DOMAIN = "https://ravian-matrix.de";
const OLD_EMAIL = "info@ravian-matrix.de";

const LOCALES = ["en", "de"];

// Localized content routes (relative to a locale prefix). "" == the locale home.
const SUBPATHS = [
  "",
  "/about",
  "/services",
  "/services/web-development",
  "/services/software-development",
  "/services/geospatial-intelligence",
  "/services/digital-growth",
  "/work",
  "/contact",
  "/request-quote",
  "/impressum",
  "/privacy-policy",
];

// Old (pre-i18n) URLs that must keep working via bridge redirect pages.
const BRIDGE_SOURCES = [
  "/about",
  "/contact",
  "/services",
  "/services/web-development",
  "/services/software-development",
  "/services/geospatial-intelligence",
  "/services/digital-growth",
  "/work",
  "/request-quote",
  "/impressum",
  "/privacy-policy",
];

const errors = [];
const passes = [];

function fail(msg) {
  errors.push(msg);
}
function ok(msg) {
  passes.push(msg);
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}
function exists(file) {
  return fs.existsSync(file);
}

// route "/en" -> out/en.html ; "/en/about" -> out/en/about.html
function htmlFileForRoute(route) {
  const rel = route.replace(/^\//, "");
  return path.join(OUT, `${rel}.html`);
}

function indexFileForRoute(route) {
  const rel = route.replace(/^\//, "");
  return path.join(OUT, rel, "index.html");
}

// Case-insensitive presence check (React renders `hrefLang`, the sitemap uses `hreflang`).
function hasHreflang(html, lang) {
  return new RegExp(`hreflang=["']${lang}["']`, "i").test(html);
}

// ---------------------------------------------------------------------------
// 0. out/ must exist
// ---------------------------------------------------------------------------
if (!exists(OUT)) {
  console.error("\n✗ verify:i18n — `out/` folder not found. Run `next build` first.\n");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 1. Localized pages exist + carry lang / canonical / hreflang
// ---------------------------------------------------------------------------
for (const locale of LOCALES) {
  for (const subpath of SUBPATHS) {
    const route = `/${locale}${subpath}`;
    const file = htmlFileForRoute(route);

    if (!exists(file)) {
      fail(`Missing localized page: ${route} (expected ${path.relative(ROOT, file)})`);
      continue;
    }
    const indexFile = indexFileForRoute(route);
    if (!exists(indexFile)) {
      fail(`Missing localized directory index: ${route}/ (expected ${path.relative(ROOT, indexFile)})`);
    }
    const html = read(file);

    // <html lang="..">
    if (!new RegExp(`<html[^>]*\\blang=["']${locale}["']`, "i").test(html)) {
      fail(`${route}: missing or wrong <html lang="${locale}">`);
    }

    // Self-canonical
    const canonical = `${DOMAIN}${route}`;
    if (!new RegExp(`rel=["']canonical["'][^>]*href=["']${canonical}["']`, "i").test(html)) {
      fail(`${route}: missing self-canonical (${canonical})`);
    }

    // hreflang alternates
    if (!hasHreflang(html, "en")) fail(`${route}: missing hreflang="en"`);
    if (!hasHreflang(html, "de")) fail(`${route}: missing hreflang="de"`);
    if (!hasHreflang(html, "x-default")) fail(`${route}: missing hreflang="x-default"`);

    // <title>
    if (!/<title>[^<]+<\/title>/i.test(html)) {
      fail(`${route}: missing <title> metadata`);
    }

    // Old email must not appear
    if (html.includes(OLD_EMAIL)) {
      fail(`${route}: contains old email ${OLD_EMAIL}`);
    }
  }
}
ok(`Localized pages: ${LOCALES.length} locales × ${SUBPATHS.length} routes checked`);

// Explicit work-page metadata assertion (per spec).
for (const locale of LOCALES) {
  const file = htmlFileForRoute(`/${locale}/work`);
  if (exists(file)) {
    const html = read(file);
    if (!/<title>[^<]+<\/title>/i.test(html) || !html.includes(`${DOMAIN}/${locale}/work`)) {
      fail(`/${locale}/work: work page metadata (title/canonical) missing`);
    }
  }
}

// ---------------------------------------------------------------------------
// 2. Bridge redirect pages (flat + directory index) for old URLs
// ---------------------------------------------------------------------------
for (const source of BRIDGE_SOURCES) {
  const rel = source.replace(/^\//, "");
  const target = `/en${source}`;
  const variants = [
    path.join(OUT, `${rel}.html`),
    path.join(OUT, rel, "index.html"),
  ];

  for (const file of variants) {
    if (!exists(file)) {
      fail(`Missing bridge page: ${path.relative(ROOT, file)} (for old URL ${source})`);
      continue;
    }
    const html = read(file);

    if (!/noindex,\s*follow/i.test(html)) {
      fail(`Bridge ${source}: missing "noindex, follow"`);
    }
    if (!new RegExp(`rel=["']canonical["'][^>]*href=["']${DOMAIN}${target}["']`, "i").test(html)) {
      fail(`Bridge ${source}: canonical does not point to ${DOMAIN}${target}`);
    }
    if (!/http-equiv=["']refresh["']/i.test(html)) {
      fail(`Bridge ${source}: missing meta refresh`);
    }
    if (!/window\.location\.replace/i.test(html)) {
      fail(`Bridge ${source}: missing JS redirect`);
    }
    if (!new RegExp(`href=["']${target}["']`).test(html)) {
      fail(`Bridge ${source}: missing accessible fallback link to ${target}`);
    }
    if (html.includes(OLD_EMAIL)) {
      fail(`Bridge ${source}: contains old email ${OLD_EMAIL}`);
    }
  }
}
ok(`Bridge pages: ${BRIDGE_SOURCES.length} old URLs × (flat + index) checked`);

// ---------------------------------------------------------------------------
// 3. Old email must not appear anywhere in out/
// ---------------------------------------------------------------------------
let oldEmailHits = 0;
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (/\.(html|txt|xml|json|js|css)$/i.test(entry.name)) {
      if (read(full).includes(OLD_EMAIL)) {
        oldEmailHits++;
        fail(`Old email ${OLD_EMAIL} found in ${path.relative(ROOT, full)}`);
      }
    }
  }
})(OUT);
if (oldEmailHits === 0) ok(`Old email ${OLD_EMAIL} absent from entire out/ tree`);

// ---------------------------------------------------------------------------
// 4. Sitemap: localized URLs + alternates (incl. x-default)
// ---------------------------------------------------------------------------
const sitemapFile = path.join(OUT, "sitemap.xml");
if (!exists(sitemapFile)) {
  fail("sitemap.xml is missing from out/");
} else {
  const sitemap = read(sitemapFile);

  for (const locale of LOCALES) {
    for (const subpath of SUBPATHS) {
      const url = `${DOMAIN}/${locale}${subpath}`;
      if (!sitemap.includes(`<loc>${url}</loc>`)) {
        fail(`sitemap: missing <loc> for ${url}`);
      }
    }
  }

  if (!hasHreflang(sitemap, "en")) fail('sitemap: missing hreflang="en" alternates');
  if (!hasHreflang(sitemap, "de")) fail('sitemap: missing hreflang="de" alternates');
  if (!hasHreflang(sitemap, "x-default")) fail('sitemap: missing hreflang="x-default" alternates');

  // Bridge / utility routes must NOT be in the sitemap.
  const mustNotBeListed = [
    `${DOMAIN}/en/not-found`,
    `${DOMAIN}/de/not-found`,
  ];
  for (const url of mustNotBeListed) {
    if (sitemap.includes(`<loc>${url}</loc>`)) {
      fail(`sitemap: must not list ${url}`);
    }
  }
  // Root "/" must not be listed (it is noindex).
  if (sitemap.includes(`<loc>${DOMAIN}</loc>`) || sitemap.includes(`<loc>${DOMAIN}/</loc>`)) {
    fail(`sitemap: must not list bare root ${DOMAIN} (root is noindex)`);
  }

  if (errors.length === 0) ok("sitemap: all localized URLs + alternates present, exclusions respected");
}

// ---------------------------------------------------------------------------
// 5. robots.txt points at the sitemap
// ---------------------------------------------------------------------------
const robotsFile = path.join(OUT, "robots.txt");
if (!exists(robotsFile)) {
  fail("robots.txt is missing from out/");
} else if (!read(robotsFile).includes(`${DOMAIN}/sitemap.xml`)) {
  fail(`robots.txt does not reference ${DOMAIN}/sitemap.xml`);
} else {
  ok("robots.txt references the correct sitemap");
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
console.log("\nRMS // i18n + SEO output verification\n");
for (const p of passes) console.log(`  ✓ ${p}`);
if (errors.length > 0) {
  console.error(`\n  ✗ ${errors.length} problem(s) found:\n`);
  for (const e of errors) console.error(`    - ${e}`);
  console.error("\nverify:i18n FAILED\n");
  process.exit(1);
}
console.log("\nverify:i18n PASSED — bilingual static output is production-ready.\n");
