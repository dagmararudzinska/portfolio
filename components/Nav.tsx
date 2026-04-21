"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ContactModal from "./ContactModal";
import { useIsMobile } from "@/hooks/useIsMobile";

function NavLink({ href, label, active }: { href: string; label: string; active?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const showUnderline = hovered || active;

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        fontFamily: "'Instrument Sans', sans-serif",
        fontSize: 16,
        fontWeight: 400,
        color: "#242424",
        textDecoration: "none",
        padding: "4px",
      }}
    >
      <span style={{ position: "relative", display: "inline-block", paddingBottom: 2 }}>
        {label}
        <span style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "#ececec",
          transform: showUnderline ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.25s ease",
        }} />
      </span>
    </Link>
  );
}

export default function Nav({ active }: { active?: "projects" | "about" | "contact" }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const isMobile = useIsMobile();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [borderScale, setBorderScale] = useState(0);
  const [borderOrigin, setBorderOrigin] = useState<"left" | "right">("left");
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Animate the bottom border in/out
  useEffect(() => {
    if (!isHome) {
      setBorderOrigin("left");
      // Short delay so the CSS transition fires (not instant on mount)
      const t = setTimeout(() => setBorderScale(1), 50);
      return () => clearTimeout(t);
    } else {
      setBorderOrigin("right");
      setBorderScale(0);
    }
  }, [isHome]);

  // Progress bar: update on scroll AND on page height change (read more expand)
  useEffect(() => {
    const recalculate = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener("scroll", recalculate, { passive: true });
    const ro = new ResizeObserver(recalculate);
    ro.observe(document.documentElement);

    return () => {
      window.removeEventListener("scroll", recalculate);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      <nav style={{
        background: "#fcfcfc",
        position: "sticky",
        top: 0,
        zIndex: 10,
        padding: isMobile ? "16px 20px" : "24px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
      }}>
        {/* Bottom border — slides in from left on non-home, slides out to right on home */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "#595959",
          opacity: 0.4,
          transform: `scaleX(${borderScale})`,
          transformOrigin: borderOrigin,
          transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          pointerEvents: "none",
        }} />
        {/* Scroll progress bar */}
        {!isHome && (
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "1px",
            background: "#242424",
            width: `${scrollProgress * 100}%`,
            transition: "width 0.15s ease-out",
            pointerEvents: "none",
          }} />
        )}
        <Link href="/" style={{
          fontFamily: "'Instrument Sans', sans-serif",
          fontSize: 16,
          fontWeight: 400,
          color: "#242424",
          textDecoration: "none",
        }}>
          DR
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 12 : 24 }}>
          <NavLink href="/projects" label="Projects" active={pathname === "/projects"} />
          <NavLink href="/about" label="About" active={pathname === "/about"} />
          <button
            onClick={() => setModalOpen(true)}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              background: btnHovered ? "#ececec" : "#242424",
              color: btnHovered ? "#242424" : "#fcfcfc",
              border: "0.5px solid #242424",
              padding: "8px 16px",
              fontSize: 16,
              fontWeight: 400,
              fontFamily: "'Instrument Sans', sans-serif",
              cursor: "pointer",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
          >
            Contact
          </button>
        </div>
      </nav>
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
