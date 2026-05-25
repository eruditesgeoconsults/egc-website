import "./globals.css";

export const metadata = {
  title: "Erudites GeoConsults",
  description: "Professional GIS and Surveying Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
