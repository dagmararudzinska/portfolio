"use client";
import { useLayoutEffect, useRef, useState } from "react";
import CaseStudyCard from "./CaseStudyCard";
import { useIsMobile } from "@/hooks/useIsMobile";

type CardProps = {
  href: string;
  client: string;
  industry: string;
  platform?: string;
  title: string;
};

export default function CaseStudyGrid({ cards }: { cards: [CardProps, CardProps] }) {
  const ref0 = useRef<HTMLParagraphElement | null>(null);
  const ref1 = useRef<HTMLParagraphElement | null>(null);
  const [titleMinHeight, setTitleMinHeight] = useState<number | undefined>(undefined);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if (isMobile) {
      setTitleMinHeight(undefined);
      return;
    }
    if (!ref0.current || !ref1.current) return;
    const h0 = ref0.current.offsetHeight;
    const h1 = ref1.current.offsetHeight;
    setTitleMinHeight(Math.max(h0, h1));
  }, [isMobile]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 24 }}>
      <CaseStudyCard {...cards[0]} titleRef={ref0} titleMinHeight={titleMinHeight} />
      <CaseStudyCard {...cards[1]} titleRef={ref1} titleMinHeight={titleMinHeight} />
    </div>
  );
}
