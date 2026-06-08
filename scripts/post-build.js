const fs = require("fs");
const path = require("path");

console.log("RMS // Running post-build steps...");

const outDir = path.join(__dirname, "..", "out");

// 1. Generate custom redirection out/404.html
const filePath = path.join(outDir, "404.html");
const htmlContent404 = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    (function() {
      var lang = 'en';
      try {
        var pref = localStorage.getItem('preferred-language');
        if (pref === 'de' || pref === 'en') {
          lang = pref;
        } else {
          var browserLang = navigator.language || navigator.userLanguage || '';
          if (browserLang.toLowerCase().startsWith('de')) {
            lang = 'de';
          }
        }
      } catch (e) {}
      window.location.replace('/' + lang + '/not-found');
    })();
  </script>
</head>
<body style="background:#05080F;color:#F2F4F8;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <div style="text-align:center;">
    <div style="width:40px;height:40px;border:2px solid #1E2A40;border-top-color:#F5C56B;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 16px;"></div>
    <div style="font-size:10px;font-family:monospace;text-transform:uppercase;letter-spacing:0.2em;color:#9AA6B8;">Redirecting...</div>
  </div>
  <style>
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</body>
</html>`;

try {
  fs.writeFileSync(filePath, htmlContent404, "utf8");
  console.log("RMS // Successfully generated custom redirection out/404.html!");
} catch (err) {
  console.error("RMS // Error writing out/404.html:", err);
  process.exit(1);
}

// 2. Generate bridge files for old URLs
const redirects = [
  { source: "/about", target: "/en/about" },
  { source: "/contact", target: "/en/contact" },
  { source: "/services", target: "/en/services" },
  { source: "/services/web-development", target: "/en/services/web-development" },
  { source: "/services/software-development", target: "/en/services/software-development" },
  { source: "/services/geospatial-intelligence", target: "/en/services/geospatial-intelligence" },
  { source: "/services/digital-growth", target: "/en/services/digital-growth" },
  { source: "/work", target: "/en/work" },
  { source: "/request-quote", target: "/en/request-quote" },
  { source: "/impressum", target: "/en/impressum" },
  { source: "/privacy-policy", target: "/en/privacy-policy" }
];

function getRedirectHtml(targetUrl) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="https://ravian-matrix.de${targetUrl}">
  <script>
    window.location.replace("${targetUrl}");
  </script>
</head>
<body style="background:#05080F;color:#F2F4F8;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
  <div style="text-align:center;">
    <div style="width:40px;height:40px;border:2px solid #1E2A40;border-top-color:#F5C56B;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 16px;"></div>
    <p style="font-size:16px;margin-bottom:8px;">If you are not redirected, <a href="${targetUrl}" style="color:#F5C56B;text-decoration:underline;">click here</a>.</p>
    <div style="font-size:10px;font-family:monospace;text-transform:uppercase;letter-spacing:0.2em;color:#9AA6B8;">Redirecting to ${targetUrl}</div>
  </div>
  <style>
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</body>
</html>`;
}

redirects.forEach(({ source, target }) => {
  // Flat HTML file, e.g. out/about.html
  // Normalize source name: strip leading slash for file names
  const relativePath = source.substring(1);
  const flatFilePath = path.join(outDir, `${relativePath}.html`);
  const flatFileDir = path.dirname(flatFilePath);
  
  // Directory index file, e.g. out/about/index.html
  const dirPath = path.join(outDir, relativePath);
  const dirIndexFilePath = path.join(dirPath, "index.html");

  try {
    // Ensure parent directory for flat file exists (e.g. out/services/ for web-development.html)
    if (!fs.existsSync(flatFileDir)) {
      fs.mkdirSync(flatFileDir, { recursive: true });
    }
    // Write flat HTML file
    fs.writeFileSync(flatFilePath, getRedirectHtml(target), "utf8");
    console.log(`RMS // Generated bridge file: ${flatFilePath} -> ${target}`);

    // Ensure directory for index file exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    // Write index.html file
    fs.writeFileSync(dirIndexFilePath, getRedirectHtml(target), "utf8");
    console.log(`RMS // Generated bridge index: ${dirIndexFilePath} -> ${target}`);
  } catch (err) {
    console.error(`RMS // Error generating redirect bridge for ${source}:`, err);
    process.exit(1);
  }
});

console.log("RMS // Post-build steps completed successfully!");
