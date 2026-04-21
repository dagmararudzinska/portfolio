"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const TEXT_TARGETS = ["INPUT", "TEXTAREA", "SELECT"];
    let tabHidden = false;

    function move(e: MouseEvent) {
      tabHidden = false;
      cursor!.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const isText = TEXT_TARGETS.includes((e.target as HTMLElement).tagName);
      cursor!.style.opacity = isText ? "0" : "1";
    }

    function handleVisibility() {
      if (document.hidden) {
        tabHidden = true;
        cursor!.style.opacity = "0";
      }
    }

    function handleMouseLeave() {
      cursor!.style.opacity = "0";
    }

    document.addEventListener("mousemove", move);
    document.addEventListener("visibilitychange", handleVisibility);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("visibilitychange", handleVisibility);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 24,
        background: "#ffffff",
        mixBlendMode: "difference",
        pointerEvents: "none",
        zIndex: 99999,
        willChange: "transform",
        clipPath: "polygon(0% 0%, 0% 75%, 25% 54%, 42% 87%, 57% 81%, 40% 50%, 70% 50%)",
      }}
    />
  );
}
