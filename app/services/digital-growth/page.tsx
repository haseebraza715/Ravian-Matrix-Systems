import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPage from "@/components/ui-custom/ServiceDetailPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Digital Growth | Ravian Matrix Systems",
  description: "Improving online presence through digital marketing support, SEO, content structure, and brand creative visuals.",
};

export default function DigitalGrowthPage() {
  const service = servicesData["digital-growth"];
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
