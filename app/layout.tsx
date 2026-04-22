import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";

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
    <html lang="en" style={{ cursor: "none" }}>
      <body suppressHydrationWarning style={{ cursor: "none" }}>
        <CustomCursor />
        <ScrollReveal />
        <Nav />
        <Loader><PageTransition>{children}</PageTransition></Loader>
      </body>
    </html>
  );
}
