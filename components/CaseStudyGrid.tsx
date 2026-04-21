"use client";
import { useLayoutEffect, useRef, useState } from "react";
import CaseStudyCard from "./CaseStudyCard";

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

  useLayoutEffect(() => {
    if (!ref0.current || !ref1.current) return;
    const h0 = ref0.current.offsetHeight;
    const h1 = ref1.current.offsetHeight;
    setTitleMinHeight(Math.max(h0, h1));
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <CaseStudyCard {...cards[0]} titleRef={ref0} titleMinHeight={titleMinHeight} />
      <CaseStudyCard {...cards[1]} titleRef={ref1} titleMinHeight={titleMinHeight} />
    </div>
  );
}
