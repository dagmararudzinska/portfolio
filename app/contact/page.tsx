"use client";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "@carbon/icons-react";
import { useState } from "react";

function ContactLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 36,
        fontWeight: 500,
        letterSpacing: "-0.54px",
        lineHeight: 1.2,
        color: "#242424",
        textDecoration: "none",
        padding: "4px 4px 8px",
        fontFamily: "'Instrument Sans', sans-serif",
      }}
    >
      {label}
      {external && (
        <ArrowUpRight
          size={28}
          style={{ transition: "transform 0.2s ease", transform: hovered ? "translate(3px, -3px)" : "translate(0, 0)" }}
        />
      )}
      <span style={{
        position: "absolute",
        bottom: 0,
        left: 4,
        right: 4,
        height: 2,
        background: "#242424",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.25s ease",
      }} />
    </a>
  );
}

export default function Contact() {
  return (
    <div style={{ background: "#fcfcfc", minHeight: "100vh", fontFamily: "'Instrument Sans', sans-serif", color: "#242424", display: "flex", flexDirection: "column" }}>
      
      <main style={{ flex: 1 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>

          <section style={{ paddingTop: 120, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 64 }}>

            <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
              <h1 style={{ fontSize: 64, fontWeight: 500, lineHeight: 1.04, letterSpacing: "-1.408px", margin: 0 }}>
                Let&apos;s work together
              </h1>
              <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, color: "#595959", margin: 0 }}>
                I&apos;m available for freelance projects, full-time roles, and collaborative work. If you have something in mind, reach out — I&apos;d love to hear about it.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <ContactLink href="mailto:rudzinskadagmara@gmail.com" label="rudzinskadagmara@gmail.com" external />
              <ContactLink href="https://linkedin.com/in/dagmara-rudzinska" label="linkedin.com/in/dagmara-rudzinska" external />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, borderTop: "0.5px solid #595959", paddingTop: 40 }}>
              <div style={{ display: "flex", gap: 80 }}>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", color: "#595959", lineHeight: 1.4, margin: "0 0 4px" }}>
                    Based in
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
                    Paris, France
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", color: "#595959", lineHeight: 1.4, margin: "0 0 4px" }}>
                    Open to
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
                    Freelance &amp; full-time
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", color: "#595959", lineHeight: 1.4, margin: "0 0 4px" }}>
                    Response time
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
                    Within 48 hours
                  </p>
                </div>
              </div>
            </div>

          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
