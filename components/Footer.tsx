"use client";
import { ArrowUpRight } from "@carbon/icons-react";
import { useState } from "react";
import Link from "next/link";

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  const [hovered, setHovered] = useState(false);

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontSize: 15,
    fontWeight: 400,
    color: "#242424",
    textDecoration: "none",
    padding: "4px",
    lineHeight: 1.55,
    fontFamily: "'Instrument Sans', sans-serif",
  };

  const labelWithUnderline = (
    <span style={{ position: "relative", display: "inline-block", paddingBottom: 2 }}>
      {label}
      <span style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "#ececec",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.25s ease",
      }} />
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={baseStyle}
      >
        {labelWithUnderline}
        <ArrowUpRight size={14} style={{ transition: "transform 0.2s ease", transform: hovered ? "translate(2px, -2px)" : "translate(0,0)", flexShrink: 0 }} />
      </a>
    );
  }

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={baseStyle}
    >
      {labelWithUnderline}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer id="contact" style={{ borderTop: "0.5px solid #595959", background: "#fcfcfc", fontFamily: "'Instrument Sans', sans-serif", padding: "64px 80px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.2px", color: "#242424", lineHeight: 1.2, margin: 0 }}>
            Let&apos;s work together
          </p>
          <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, color: "#595959", margin: 0, maxWidth: 360 }}>
            I&apos;m available for freelance projects, full-time roles, and other collaborative work. If you&apos;ve got an idea, just send me a message &ndash; I&apos;d be happy to talk about it :)
          </p>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "#242424", lineHeight: 1.55, padding: "0 4px", margin: 0 }}>
              Let&apos;s talk
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FooterLink href="mailto:rudzinskadagmara@gmail.com" label="Email" external />
              <FooterLink href="https://linkedin.com/in/dagmara-rudzinska" label="Linkedin" external />
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "#242424", lineHeight: 1.55, padding: "0 4px", margin: 0 }}>
              Pages
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FooterLink href="/" label="Home" />
              <FooterLink href="/projects" label="Projects" />
              <FooterLink href="/about" label="About" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
