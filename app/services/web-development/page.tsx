import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPage from "@/components/ui-custom/ServiceDetailPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Web Solutions | Ravian Matrix Systems",
  description: "Professional business websites, responsive interfaces, and digital platforms designed around your business requirements.",
};

export default function WebDevelopmentPage() {
  const service = servicesData["web-development"];
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
