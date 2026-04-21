"use client";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "@carbon/icons-react";

export default function Homepage() {
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
      fontFamily: "'Instrument Sans', sans-serif",
      position: "relative",
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "center",
        textAlign: "center",
      }}>
        <h1 style={{
          fontSize: 64,
          fontWeight: 500,
          lineHeight: 1.04,
          letterSpacing: "-1.408px",
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
          whiteSpace: "nowrap",
          margin: 0,
        }}>
          crafting digital products for humans
        </p>
      </div>

      <Link
        href="/projects"
        style={{
          position: "absolute",
          bottom: 80,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 15,
          fontWeight: 400,
          color: "#242424",
          textDecoration: "none",
          fontFamily: "inherit",
        }}
      >
        See my work <ArrowRight size={16} />
      </Link>
    </div>
  );
}
