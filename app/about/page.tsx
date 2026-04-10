"use client";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div style={{ background: "#fcfcfc", fontFamily: "'Instrument Sans', sans-serif", color: "#242424" }}>
      {/* Full-viewport section — footer below fold */}
      <div style={{ minHeight: "calc(100svh - 73px)", display: "flex", flexDirection: "column" }}>
        
        <main style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px 80px 160px", width: "100%", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 40 }}>
              <h1 style={{ fontSize: 64, fontWeight: 500, lineHeight: 1.04, letterSpacing: "-1.408px", margin: 0 }}>
                Hello!
              </h1>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
                  I&apos;m Dagmara, a product designer from Warsaw, currently based in Paris.
                </p>
                <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
                  For the last years I&apos;ve been working across various industries, such as fintech, insurance, lifestyle or edtech. What interests me the most in my job is discovering how people interact with websites and apps, what annoys them and how it can be fixed.
                </p>
                <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
                  I frame problems through research, map workflows, and find where design can make the biggest impact.
                </p>
                <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.55, margin: 0 }}>
                  When I&apos;m not working, I&apos;m probably eating something good, working out the steps on a dance floor (currently deep in ballroom and Argentinian tango) or finding the nicest coffee shop in the area.
                </p>
              </div>
              <Link
                href="/projects"
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                  marginTop: 40,
                  display: "inline-block",
                  background: btnHovered ? "#ececec" : "#242424",
                  color: btnHovered ? "#242424" : "#fcfcfc",
                  padding: "12px 16px",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  textDecoration: "none",
                  fontFamily: "inherit",
                  border: "0.5px solid #242424",
                  alignSelf: "flex-start",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
              >
                View case studies
              </Link>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
