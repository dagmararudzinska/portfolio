import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

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
    title: "Transforming insurance CRM — redesigning the agent experience with clearer workflows and commission tracking",
    client: "Nationale Nederlanden",
    industry: "Insurance",
    platform: "Desktop",
    slug: "nn",
  },
  {
    number: "03",
    title: "Helping users find and optimize meal plans based on ingredient discounts and price tiers",
    client: "Goulash",
    industry: "Foodtech",
    platform: "Mobile",
    slug: "goulash",
  },
];

export default function Projects() {
  return (
    <div style={{ background: "#fcfcfc", fontFamily: "'Instrument Sans', sans-serif", color: "#242424" }}>
      <div style={{ minHeight: "calc(100svh - 73px)", display: "flex", flexDirection: "column" }}>
        <main style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 80px 160px", width: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 40 }}>
            <h2 style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.54px", margin: 0 }}>
              Selected projects
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
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
