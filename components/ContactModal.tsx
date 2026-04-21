"use client";
import { useState, useEffect } from "react";
import { Close, Copy, Checkmark, ArrowUpRight } from "@carbon/icons-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const OVERLINE: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  color: "#595959",
  margin: 0,
};

const ICON_COLOR = "#595959";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const isMobile = useIsMobile();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [copyHovered, setCopyHovered] = useState(false);
  const [submitHovered, setSubmitHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 300);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/maqldlog", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, message }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  function copyEmail() {
    navigator.clipboard.writeText("rudzinskadagmara@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(36,36,36,0.5)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fcfcfc",
          width: "100%",
          maxWidth: 720,
          padding: isMobile ? 24 : 48,
          display: "flex",
          flexDirection: "column",
          gap: 40,
          position: "relative",
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            background: "none",
            border: "none",
            padding: 8,
            color: "#242424",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Close size={20} />
        </button>

        <h2 style={{ fontSize: isMobile ? 24 : 36, fontWeight: 500, letterSpacing: isMobile ? "-0.3px" : "-0.54px", lineHeight: 1.2, margin: 0 }}>
          Let&apos;s work together
        </h2>

        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 48 }}>
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={OVERLINE}>Your email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                disabled={status === "sent"}
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  fontFamily: "'Instrument Sans', sans-serif",
                  color: "#242424",
                  background: "#fcfcfc",
                  border: "0.5px solid #595959",
                  padding: "12px 16px",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={OVERLINE}>Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                rows={5}
                disabled={status === "sent"}
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  fontFamily: "'Instrument Sans', sans-serif",
                  color: "#242424",
                  background: "#fcfcfc",
                  border: "0.5px solid #595959",
                  padding: "12px 16px",
                  outline: "none",
                  resize: "vertical",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </div>
            {status === "error" && (
              <p style={{ fontSize: 13, color: "#cc0000", margin: 0 }}>
                Something went wrong. Please email me directly.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              onMouseEnter={() => setSubmitHovered(true)}
              onMouseLeave={() => setSubmitHovered(false)}
              style={{
                background: submitHovered && status === "idle" ? "#ececec" : "#242424",
                color: submitHovered && status === "idle" ? "#242424" : "#fcfcfc",
                border: "0.5px solid #242424",
                padding: "12px 24px",
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "'Instrument Sans', sans-serif",
                alignSelf: isMobile ? "stretch" : "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                opacity: status === "sending" ? 0.5 : 1,
                transition: "background 0.2s ease, color 0.2s ease, opacity 0.2s ease",
                cursor: status === "sent" ? "default" : "pointer",
              }}
            >
              {status === "sent" ? (
                <>Message sent <Checkmark size={16} /></>
              ) : status === "sending" ? (
                "Sending…"
              ) : (
                "Send message"
              )}
            </button>
          </form>

          {/* Contact details */}
          <div style={{ width: isMobile ? "auto" : 200, display: "flex", flexDirection: "column", gap: 24, flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p style={OVERLINE}>Contact</p>
              {isMobile ? (
                <a
                  href="mailto:rudzinskadagmara@gmail.com"
                  style={{ fontSize: 13, fontWeight: 400, color: "#242424", lineHeight: 1.55, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
                >
                  rudzinskadagmara@gmail.com
                  <ArrowUpRight size={12} color={ICON_COLOR} style={{ flexShrink: 0 }} />
                </a>
              ) : (
                <button
                  onClick={copyEmail}
                  onMouseEnter={() => setCopyHovered(true)}
                  onMouseLeave={() => setCopyHovered(false)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 400, color: "#242424", lineHeight: 1.55 }}>
                    rudzinskadagmara@gmail.com
                  </span>
                  <span style={{
                    display: "inline-flex",
                    transition: "transform 0.2s ease",
                    transform: copyHovered && !copied ? "translate(1px, -1px)" : "translate(0, 0)",
                    flexShrink: 0,
                  }}>
                    {copied
                      ? <Checkmark size={14} color={ICON_COLOR} />
                      : <Copy size={14} color={ICON_COLOR} />
                    }
                  </span>
                </button>
              )}
              <a
                href="https://linkedin.com/in/dagmara-rudzinska"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setLinkedinHovered(true)}
                onMouseLeave={() => setLinkedinHovered(false)}
                style={{ fontSize: 13, fontWeight: 400, color: "#242424", lineHeight: 1.55, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}
              >
                LinkedIn
                <ArrowUpRight
                  size={12}
                  color={ICON_COLOR}
                  style={{
                    transition: "transform 0.2s ease",
                    transform: linkedinHovered ? "translate(2px, -2px)" : "translate(0,0)",
                    flexShrink: 0,
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
