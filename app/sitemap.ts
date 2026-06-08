import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ravian-matrix.de"; // Ravian Matrix Systems production domain

  const subpaths = [
    "",
    "/about",
    "/contact",
    "/request-quote",
    "/services",
    "/services/web-development",
    "/services/software-development",
    "/services/geospatial-intelligence",
    "/services/digital-growth",
    "/work",
    "/privacy-policy",
    "/impressum",
  ];

  const locales = ["en", "de"];
  const entries: MetadataRoute.Sitemap = [];

  for (const subpath of subpaths) {
    for (const locale of locales) {
      const priority = subpath === "" ? 1.0 : subpath.startsWith("/services") ? 0.8 : 0.5;
      const changeFrequency = subpath.includes("/services/") ? "monthly" : "weekly";

      entries.push({
        url: `${baseUrl}/${locale}${subpath}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${subpath}`,
            de: `${baseUrl}/de${subpath}`,
            "x-default": `${baseUrl}/en${subpath}`,
          },
        },
      });
    }
  }

  return entries;
}
