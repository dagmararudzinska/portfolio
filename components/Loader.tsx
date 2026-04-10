"use client";
import { useState, useEffect, useLayoutEffect } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true); // start visible — covers content from first render
  const [count, setCount] = useState(0);
  const [fading, setFading] = useState(false);

  // useLayoutEffect runs before browser paint — instantly removes overlay on return visits
  useLayoutEffect(() => {
    if (sessionStorage.getItem("loader_shown")) {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("loader_shown")) return;

    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 100) {
        clearInterval(timer);
        sessionStorage.setItem("loader_shown", "1");
        setFading(true);
        setTimeout(() => setVisible(false), 400);
      }
    }, 8); // 100 steps × 8ms ≈ 800ms

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {children}
      {visible && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "#fcfcfc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          opacity: fading ? 0 : 1,
          transition: fading ? "opacity 0.4s ease" : "none",
          pointerEvents: fading ? "none" : "auto",
        }}>
          <span style={{
            fontFamily: "'Instrument Sans', sans-serif",
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: "-0.54px",
            color: "#242424",
          }}>
            ({count})
          </span>
        </div>
      )}
    </>
  );
}
