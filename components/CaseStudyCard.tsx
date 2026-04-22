"use client";
import Link from "next/link";
import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
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
  const isMobile = useIsMobile();

  const cols = [
    { label: "Client", value: client, cls: "cs-col-client" },
    { label: "Industry", value: industry, cls: "cs-col-industry" },
    ...(platform ? [{ label: "Platform", value: platform, cls: "cs-col-platform" }] : []),
  ];

  return (
    <>
      <style>{`
        .cs-card { container-type: inline-size; container-name: cs-card; }
        .cs-col-client, .cs-col-industry, .cs-col-platform { flex: 1; min-width: 0; }
        .cs-meta-value { font-size: 15px; font-weight: 400; line-height: 1.55; color: #242424; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        @container cs-card (max-width: 340px) { .cs-col-client { display: none; } }
        @container cs-card (max-width: 200px) { .cs-col-industry { display: none; } }
      `}</style>
      <div className="cs-card" style={{ minWidth: 0 }}>
        <Link
          href={href}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            gap: isMobile ? 12 : 32,
            textDecoration: "none",
            color: "#242424",
            padding: isMobile ? 20 : 32,
            background: hovered ? "#ececec" : "transparent",
            border: "0.5px solid #595959",
            transition: "background 0.2s ease",
            minWidth: 0,
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            <p ref={titleRef} style={{ fontSize: isMobile ? 15 : 20, fontWeight: 600, lineHeight: 1.3, margin: 0, minHeight: titleMinHeight }}>{title}</p>
            <div style={{ display: "flex", gap: 8 }}>
              {cols.map(({ label, value, cls }) => (
                <div key={label} className={cls}>
                  <p style={LABEL}>{label}</p>
                  <p className="cs-meta-value">{value}</p>
                </div>
              ))}
            </div>
          </div>
          {!isMobile && (
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
          )}
        </Link>
      </div>
    </>
  );
}
