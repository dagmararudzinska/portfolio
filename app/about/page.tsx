"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@carbon/icons-react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function About() {
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div style={{ background: "#fcfcfc", fontFamily: "'Instrument Sans', sans-serif", color: "#242424" }}>
      {/* Full-viewport section — footer below fold */}
      <div style={{ minHeight: "calc(100svh - 73px)", display: "flex", flexDirection: "column" }}>

        <main style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: isMobile ? "40px 20px 80px" : "80px 80px 160px", width: "100%", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 40 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <h2 style={{ fontSize: isMobile ? 24 : 36, fontWeight: 500, lineHeight: 1.2, letterSpacing: isMobile ? "-0.3px" : "-0.54px", margin: 0 }}>
                  Hi, I&apos;m Dagmara, a product designer from Warsaw, currently based in Paris.
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
                    Over the last few years, I&apos;ve worked in a bunch of different industries, like fintech, insurance, lifestyle and edtech. What I like most about my job is finding out how people use websites and apps, what annoys them and how to fix it.
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
                    I approach problems by doing research, analysing workflows and figuring out where design can have the biggest impact.
                  </p>
                  <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
                    When I&apos;m not working, I&apos;m probably eating something good or learning the steps on a dance floor (currently deep in ballroom &ndash; quickstep is my favourite).
                  </p>
                </div>
              </div>
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
                  transform: hovered ? "translateX(4px)" : "translateX(-8px)",
                  opacity: hovered ? 1 : 0,
                  maxWidth: hovered ? 24 : 0,
                  marginLeft: hovered ? 8 : 0,
                }}>
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
