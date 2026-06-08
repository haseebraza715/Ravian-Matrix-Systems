import "../globals.css";

export const metadata = {
  title: "Ravian Matrix Systems",
  description: "Bilingual IT, Web & Geospatial Solutions",
  robots: {
    index: false, // Do not index the empty redirect root page
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#05080F] text-[#F2F4F8] min-h-screen flex items-center justify-center font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
