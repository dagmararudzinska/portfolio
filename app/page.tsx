"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Homepage() {
  const [btnHovered, setBtnHovered] = useState(false);

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
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: 73,
      fontFamily: "'Instrument Sans', sans-serif",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "center",
        textAlign: "center",
      }}>
        <p style={{
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.55,
          color: "#242424",
          margin: 0,
        }}>
          Hi, I&apos;m Dagmara, a
        </p>
        <h1 style={{
          fontSize: 64,
          fontWeight: 500,
          lineHeight: 1.04,
          letterSpacing: "-1.408px",
          color: "#242424",
          whiteSpace: "nowrap",
          margin: 0,
        }}>
          Product designer
        </h1>
        <p style={{
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.55,
          color: "#242424",
          whiteSpace: "nowrap",
          margin: 0,
        }}>
          crafting digital products for humans
        </p>
        <Link
          href="/projects"
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            marginTop: 16,
            display: "inline-block",
            background: btnHovered ? "#ececec" : "#242424",
            color: btnHovered ? "#242424" : "#fcfcfc",
            padding: "12px 24px",
            fontSize: 15,
            fontWeight: 400,
            lineHeight: 1.4,
            textDecoration: "none",
            fontFamily: "inherit",
            border: "0.5px solid #242424",
            transition: "background 0.2s ease, color 0.2s ease",
          }}
        >
          See projects
        </Link>
      </div>
    </div>
  );
}
