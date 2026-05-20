import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServiceDetailPage from "@/components/ui-custom/ServiceDetailPage";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Software Development | Ravian Matrix Systems",
  description: "Custom software solutions, backend systems, database-driven panels, and workflow automation tailored to your business operations.",
};

export default function SoftwareDevelopmentPage() {
  const service = servicesData["software-development"];
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
