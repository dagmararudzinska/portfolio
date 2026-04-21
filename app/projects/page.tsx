"use client";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useIsMobile } from "@/hooks/useIsMobile";

const projects = [
  {
    number: "01",
    title: "Designing an intuitive drag-and-drop grouping experience for live presentations",
    client: "Wooclap",
    industry: "Edtech",
    platform: "Desktop",
    slug: "wooclap",
  },
  {
    number: "02",
    title: "Redesigning the agent experience in an insurance CRM — unified workflows and commission tracking",
    client: "Nationale Nederlanden",
    industry: "Insurance",
    platform: "Desktop",
    slug: "nn",
  },
  {
    number: "03",
    title: "Introducing a way to communicate savings indirectly in a meal planning app",
    client: "Goulash",
    industry: "Foodtech",
    platform: "Mobile",
    slug: "goulash",
  },
];

export default function Projects() {
  const isMobile = useIsMobile();
  return (
    <div style={{ background: "#fcfcfc", fontFamily: "'Instrument Sans', sans-serif", color: "#242424" }}>
      <div style={{ minHeight: "calc(100svh - 73px)", display: "flex", flexDirection: "column" }}>
        <main style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: isMobile ? "40px 20px 80px" : "80px 80px 160px", width: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 40 }}>
            <h2 style={{ fontSize: isMobile ? 24 : 36, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.54px", margin: 0 }}>
              Selected projects
            </h2>
            <div style={{ display: "grid", gridAutoRows: "1fr", borderTop: "0.5px solid #242424" }}>
              {projects.map((p) => (
                <ProjectCard key={p.number} {...p} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
