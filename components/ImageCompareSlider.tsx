"use client";
import { useState } from "react";
import { TAB_BAR, tabItem } from "@/lib/styles";

export default function ImageCompareSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const [active, setActive] = useState<"before" | "after">("before");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={TAB_BAR}>
        <div style={tabItem(active === "before")} onClick={() => setActive("before")}>
          current
        </div>
        <div style={tabItem(active === "after")} onClick={() => setActive("after")}>
          redesign
        </div>
      </div>
      <img
        src={active === "before" ? before : after}
        alt={active === "before" ? beforeAlt : afterAlt}
        style={{ width: "100%", display: "block" }}
      />
    </div>
  );
}
