import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ravianmatrixsystems.de"; // Ravian Matrix Systems production domain

  const routes = [
    "",
    "/about",
    "/contact",
    "/request-quote",
    "/services",
    "/services/web-development",
    "/services/software-development",
    "/services/geospatial-intelligence",
    "/services/digital-growth",
    "/privacy-policy",
    "/impressum",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("/services/") ? "monthly" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.5,
  }));
}
