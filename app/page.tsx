const projects = [
  {
    number: "01",
    tags: ["Concept", "EdTech"],
    title: "Enabling conceptual grouping in live learning sessions",
    client: "Wooclap",
    role: "Product designer",
    year: "2026",
  },
  {
    number: "02",
    tags: ["Commercial", "Insurance", "CRM"],
    title: "Connecting CRM to sales engines for insurance agents",
    client: "Nationale Nederlanden",
    role: "UX UI designer",
    year: "2025",
  },
  {
    number: "03",
    tags: ["Commercial", "Lifestyle"],
    title: "Introducing indirect savings communication under legal constraints",
    client: "Goulash",
    role: "UX UI designer",
    year: "2025",
  },
];

const skills = [
  {
    title: "Product discovery",
    description:
      "Framing problems through research, mapping workflows, and identifying where design can make the biggest impact.",
  },
  {
    title: "Interaction design",
    description:
      "Creating high-fidelity prototypes and scalable UI components that work within technical and business constraints.",
  },
  {
    title: "Iteration mindset",
    description:
      "Using metrics and user feedback to refine designs over time, not just ship and move on.",
  },
];

export default function Home() {
  return (
    <div style={{ fontFamily: "'Instrument Sans', sans-serif", color: "#1a1a1a", background: "#fff" }}>
      {/* Nav */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "32px 80px",
        borderBottom: "1px solid #303030",
      }}>
        <span style={{ fontSize: 16, fontWeight: 500, letterSpacing: "0.01em", textTransform: "uppercase" }}>
          DAGMARA RUDZINSKA
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {["PROJECTS", "ABOUT", "CONTACT"].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.01em",
              textTransform: "uppercase",
              color: "#303030",
              textDecoration: "none",
            }}>
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        padding: "0 80px",
        borderBottom: "1px solid #1a1a1a",
        display: "flex",
        flexDirection: "column",
        gap: 40,
        justifyContent: "center",
        minHeight: 785,
      }}>
        <h1 style={{ fontSize: 72, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.015em", maxWidth: 895 }}>
          Designing products that solve real problems
        </h1>
        <p style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.4, maxWidth: 863, textTransform: "uppercase" }}>
          I&apos;m Dagmara, a product designer from Warsaw, currently based in Paris. I work across fintech, insurance, lifestyle and edtech.
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="#projects" style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#1a1a1a",
            color: "#fcfcfa",
            border: "2px solid #1a1a1a",
            padding: "20px 36px",
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontFamily: "inherit",
          }}>
            VIEW WORK →
          </a>
          <a href="#about" style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            color: "#1a1a1a",
            border: "2px solid #1a1a1a",
            padding: "20px 35px",
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontFamily: "inherit",
          }}>
            ABOUT ME
          </a>
        </div>
      </section>

      {/* Selected Work */}
      <section id="projects" style={{
        padding: 80,
        borderBottom: "1px solid #1a1a1a",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}>
        <h2 style={{ fontSize: 43, fontWeight: 500, lineHeight: 1.2 }}>Selected work</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {projects.map((project) => (
            <a key={project.number} href="#" style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              padding: 40,
              border: "2px solid #303030",
              marginBottom: -2,
              textDecoration: "none",
              color: "inherit",
            }}>
              <div style={{ display: "flex", gap: 80, alignItems: "flex-start" }}>
                <span style={{
                  fontSize: 96,
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "rgba(48,48,48,0.3)",
                  letterSpacing: "-0.02em",
                  minWidth: 80,
                }}>
                  {project.number}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        border: "1px solid #1a1a1a",
                        padding: "8px",
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: "0.01em",
                        textTransform: "uppercase",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.2 }}>{project.title}</h3>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 12, fontWeight: 500, color: "#828281", textTransform: "uppercase", letterSpacing: "0.01em" }}>CLIENT</p>
                  <p style={{ fontSize: 16 }}>{project.client}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 12, fontWeight: 500, color: "#828281", textTransform: "uppercase", letterSpacing: "0.01em" }}>ROLE</p>
                  <p style={{ fontSize: 16 }}>{project.role}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 12, fontWeight: 500, color: "#828281", textTransform: "uppercase", letterSpacing: "0.01em" }}>YEAR</p>
                  <p style={{ fontSize: 16 }}>{project.year}</p>
                </div>
                <span style={{ fontSize: 24 }}>→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* What I bring */}
      <section id="about" style={{
        padding: 80,
        borderBottom: "1px solid #1a1a1a",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}>
        <h2 style={{ fontSize: 43, fontWeight: 500, lineHeight: 1.2 }}>What I bring</h2>
        <div style={{ display: "flex" }}>
          {skills.map((skill) => (
            <div key={skill.title} style={{
              flex: 1,
              border: "2px solid #303030",
              padding: 20,
              marginRight: -2,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}>
              <h3 style={{ fontSize: 21, fontWeight: 500, lineHeight: 1.2 }}>{skill.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.4 }}>{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{
        padding: "120px 80px",
        borderTop: "1px solid #1a1a1a",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h3 style={{ fontSize: 21, fontWeight: 500, lineHeight: 1.2 }}>Let&apos;s work together :)</h3>
              <p style={{ fontSize: 16, lineHeight: 1.4, maxWidth: 400 }}>
                I&apos;m currently looking for new opportunities. If you think I&apos;d be a good fit for your team, let&apos;s talk :)
              </p>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <a href="mailto:" style={{
                background: "#1a1a1a",
                color: "#fcfcfa",
                border: "2px solid #1a1a1a",
                padding: 20,
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "inherit",
              }}>
                GET IN TOUCH
              </a>
              <a href="#" style={{
                background: "#fff",
                color: "#1a1a1a",
                border: "2px solid #1a1a1a",
                padding: 20,
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "inherit",
              }}>
                CV
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                background: "#fff",
                color: "#1a1a1a",
                border: "2px solid #1a1a1a",
                padding: 20,
                width: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 700,
                fontFamily: "serif",
              }}>
                in
              </a>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
            <p style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.01em" }}>
              © 2026 DAGMARA RUDZINSKA. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
