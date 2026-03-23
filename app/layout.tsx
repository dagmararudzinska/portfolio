import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dagmara Rudzinska — Product Designer",
  description: "Portfolio of Dagmara Rudzinska, a product designer from Warsaw based in Paris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
