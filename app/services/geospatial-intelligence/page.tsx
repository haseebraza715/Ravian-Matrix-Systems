import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPage from "@/components/ui-custom/ServiceDetailPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Geospatial Intelligence | Ravian Matrix Systems",
  description: "Spatial data analysis, remote sensing, mapping and visualization, WebGIS solutions, and location-based decision support.",
};

export default function GeospatialIntelligencePage() {
  const service = servicesData["geospatial-intelligence"];
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
