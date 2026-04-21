"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@carbon/icons-react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Homepage() {
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    document.body.style.height = "100svh";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div style={{
      height: "calc(100svh - 73px)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "'Instrument Sans', sans-serif",
    }}>
      {/* Title — takes remaining space and centers within it */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}>
        <h1 style={{
          fontSize: isMobile ? 36 : 64,
          fontWeight: 500,
          lineHeight: 1.04,
          letterSpacing: isMobile ? "-0.5px" : "-1.408px",
          color: "#242424",
          margin: 0,
        }}>
          I&apos;m Dagmara,<br />a product designer
        </h1>
        <p style={{
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.55,
          color: "#242424",
          margin: 0,
        }}>
          crafting digital products for humans
        </p>
      </div>

      {/* See my work — pinned 80px from bottom */}
      <div style={{ paddingBottom: isMobile ? 48 : 80 }}>
        <Link
          href="/projects"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0,
            fontSize: 15,
            fontWeight: 400,
            color: "#242424",
            textDecoration: "none",
            fontFamily: "inherit",
            padding: "4px",
          }}
        >
          <span style={{ position: "relative", display: "inline-block", paddingBottom: 2 }}>
            See my work
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
          <span style={{
            display: "inline-flex",
            overflow: "hidden",
            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.35s ease, max-width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), margin-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: (hovered || isMobile) ? "translateX(4px)" : "translateX(-8px)",
            opacity: (hovered || isMobile) ? 1 : 0,
            maxWidth: (hovered || isMobile) ? 24 : 0,
            marginLeft: (hovered || isMobile) ? 8 : 0,
          }}>
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>
    </div>
  );
}
