"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const TEXT_TARGETS = ["INPUT", "TEXTAREA", "SELECT"];

    function move(e: MouseEvent) {
      cursor!.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      const isText = TEXT_TARGETS.includes((e.target as HTMLElement).tagName);
      cursor!.style.opacity = isText ? "0" : "1";
    }

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 16,
        height: 16,
        background: "#ffffff",
        mixBlendMode: "difference",
        pointerEvents: "none",
        zIndex: 99999,
        willChange: "transform",
      }}
    />
  );
}
