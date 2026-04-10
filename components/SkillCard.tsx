"use client";
import { useState } from "react";

export default function SkillCard({ number, text }: { number: string; text: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        padding: 24,
        border: "1px solid #242424",
        marginBottom: -1,
        background: hovered ? "#ececec" : "#fcfcfc",
        transition: "background 0.2s ease",
      }}
    >
      <span style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.55, color: "#242424", whiteSpace: "nowrap" }}>
        {number}
      </span>
      <p style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.4, color: "#242424", margin: 0 }}>
        {text}
      </p>
    </div>
  );
}
