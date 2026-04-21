"use client";
import Link from "next/link";
import { ArrowRight } from "@carbon/icons-react";
import { useState } from "react";

const LABEL: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  color: "#595959",
  margin: 0,
};

const VALUE: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 400,
  lineHeight: 1.55,
  color: "#242424",
  margin: 0,
};

type Props = {
  number: string;
  title: string;
  client: string;
  industry: string;
  platform: string;
  slug: string;
};

export default function ProjectCard({ number, title, client, industry, platform, slug }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 64,
        padding: "32px 40px",
        borderLeft: "0.5px solid #242424",
        borderRight: "0.5px solid #242424",
        borderBottom: "0.5px solid #242424",
        background: hovered ? "#ececec" : "#fcfcfc",
        textDecoration: "none",
        color: "#242424",
        transition: "background 0.2s ease",
        cursor: "pointer",
        height: "100%",
      }}
    >
      <span style={{
        fontSize: 64,
        fontWeight: 400,
        lineHeight: 1,
        color: "rgba(5,5,5,0.3)",
        whiteSpace: "nowrap",
        minWidth: 60,
        fontFamily: "'Instrument Sans', sans-serif",
      }}>
        {number}
      </span>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.2px", margin: 0 }}>
          {title}
        </h3>
        <div style={{ display: "flex" }}>
          {[
            { label: "Client", value: client },
            { label: "Industry", value: industry },
            { label: "Platform", value: platform },
          ].map(({ label, value }) => (
            <div key={label} style={{ flex: 1 }}>
              <p style={LABEL}>{label}</p>
              <p style={VALUE}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.35s ease",
        transform: hovered ? "translateX(8px)" : "translateX(-8px)",
        opacity: hovered ? 1 : 0,
        flexShrink: 0,
      }}>
        <ArrowRight size={80} />
      </div>
    </Link>
  );
}
