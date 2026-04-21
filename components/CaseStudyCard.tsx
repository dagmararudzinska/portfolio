"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@carbon/icons-react";

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

export default function CaseStudyCard({
  href,
  client,
  industry,
  platform,
  title,
  titleMinHeight,
  titleRef,
}: {
  href: string;
  client: string;
  industry: string;
  platform?: string;
  title: string;
  titleMinHeight?: number;
  titleRef?: React.RefObject<HTMLParagraphElement | null>;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: 32,
        textDecoration: "none",
        color: "#242424",
        padding: 32,
        background: hovered ? "#ececec" : "transparent",
        border: "0.5px solid #595959",
        transition: "background 0.2s ease",
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        <p ref={titleRef} style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, margin: 0, minHeight: titleMinHeight }}>{title}</p>
        <div style={{ display: "flex" }}>
          {[
            { label: "Client", value: client },
            { label: "Industry", value: industry },
            ...(platform ? [{ label: "Platform", value: platform }] : []),
          ].map(({ label, value }) => (
            <div key={label} style={{ flex: 1 }}>
              <p style={LABEL}>{label}</p>
              <p style={VALUE}>{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
        <div
          style={{
            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.35s ease",
            transform: hovered ? "translateX(8px)" : "translateX(-8px)",
            opacity: hovered ? 1 : 0,
          }}
        >
          <ArrowRight size={48} />
        </div>
      </div>
    </Link>
  );
}
