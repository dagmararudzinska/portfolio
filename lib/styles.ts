import type { CSSProperties } from "react";

// Shared typography constants across case study pages

export const KDD_INDEX: CSSProperties = {
  color: "rgba(5, 5, 5, 0.20)",
  fontFamily: "'Instrument Sans', sans-serif",
  fontSize: 64,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "100%",
  minWidth: 72,
  flexShrink: 0,
};

// Tab bar container — stretches to full width, underline in neutral-200
export const TAB_BAR: CSSProperties = {
  width: "100%",
  display: "flex",
  gap: 40,
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "0.5px solid #D4D4D2",
};

// Individual tab item
export function tabItem(isActive: boolean): CSSProperties {
  return {
    padding: "16px 4px",
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: "0.12px",
    textTransform: "uppercase",
    color: "#242424",
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    fontFamily: "'Instrument Sans', sans-serif",
    borderBottom: isActive ? "1px solid #242424" : "none",
    marginBottom: isActive ? "-0.5px" : undefined,
  };
}
