"use client";
import { useEffect } from "react";

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
      </div>
    </div>
  );
}
