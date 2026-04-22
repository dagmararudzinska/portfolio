"use client";
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
  const isMobile = useIsMobile();

  return (
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 24 }}>
      <CaseStudyCard {...cards[0]} />
      <CaseStudyCard {...cards[1]} />
    </div>
  );
}
