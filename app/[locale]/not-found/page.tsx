import type { Metadata } from "next";
import NotFound from "../not-found";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const isDe = locale === "de";
  return {
    title: isDe ? "Seite nicht gefunden | Ravian Matrix Systems" : "Page Not Found | Ravian Matrix Systems",
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function NotFoundPage() {
  return <NotFound />;
}
