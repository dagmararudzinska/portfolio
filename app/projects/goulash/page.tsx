"use client";
import { Fragment, useState } from "react";
import Footer from "@/components/Footer";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import { View, Idea, Star, Growth, ArrowRight, ChevronDown, ChevronUp } from "@carbon/icons-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { KDD_INDEX } from "@/lib/styles";

const LABEL: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "140%",
  textTransform: "uppercase",
  color: "#595959",
  paddingTop: 6,
  margin: 0,
  position: "sticky",
  top: 120,
  alignSelf: "start",
};

const SECTION: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: 40,
  paddingBottom: 120,
  paddingTop: 40,
};

const BODY: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 400,
  lineHeight: 1.55,
  margin: 0,
  color: "#242424",
};

const H2: React.CSSProperties = {
  fontSize: 36,
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: "-0.54px",
  margin: 0,
};

const SUBHEADING: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  lineHeight: 1.55,
  margin: 0,
  color: "#242424",
};

const CAPTION: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 400,
  lineHeight: 1.55,
  margin: 0,
  color: "#595959",
};

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span style={{ display: "inline-block", width: 4, height: 4, background: "#242424", flexShrink: 0, marginTop: 8 }} />
      <p style={{ ...BODY, margin: 0 }}>{children}</p>
    </div>
  );
}

function ReadMoreButton({ expanded, onToggle, label }: { expanded: boolean; onToggle: () => void; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={onToggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseUp={() => setHovered(false)}
        onTouchEnd={() => setHovered(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: hovered ? "#ececec" : "#242424",
          color: hovered ? "#242424" : "#fcfcfc",
          border: "0.5px solid #242424",
          padding: "12px 24px",
          fontSize: 15,
          fontWeight: 400,
          fontFamily: "inherit",
          cursor: "pointer",
          transition: "background 0.2s ease, color 0.2s ease",
        }}
      >
        {expanded ? "Collapse" : label}
        {expanded ? <ChevronUp size={16} color="currentColor" /> : <ChevronDown size={16} color="currentColor" />}
      </button>
    </div>
  );
}

const designRows = [
  {
    insight: "People often look for sales-specific categories, so they should be easy to find.",
    decision: "Use a separate filter to find recipes that include discounted ingredients.",
    impact: "It saves time and helps to plan meals based on the price of ingredients.",
  },
  {
    insight: "People are more likely to choose something when the price is lower.",
    decision: "Info about discounts is right next to the recipe. On the shopping cart level, the original price is shown next to the discounted one so the customer can compare the two prices.",
    impact: "It\u2019s quicker to compare costs and easier to see how much is saved.",
  },
  {
    insight: "People tend to see the same discount as more valuable if it\u2019s presented as the larger number.",
    decision: "Show the most meaningful savings — as a percentage or as an absolute amount. We\u2019ve flagged this for A/B testing.",
    impact: "Stronger perception of value when optimizing the shopping list.",
  },
  {
    insight: "Symbols alone don\u2019t always help users to understand what they can expect. They need info to base their ideas on.",
    decision: "The cost tiers (lowest, medium, highest price) show the price range for each tier.",
    impact: "Planning meals takes less time.",
  },
];

function DesignChoicesTable({ isMobile }: { isMobile: boolean }) {
  const cols = [
    { Icon: View, label: "Research insight", key: "insight" as const },
    { Icon: Idea, label: "Design decision", key: "decision" as const },
    { Icon: Growth, label: "Impact", key: "impact" as const },
  ];

  if (isMobile) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {designRows.map((row, i) => (
          <div key={i} style={{ border: "0.5px solid #595959" }}>
            {cols.map((col, j) => (
              <div key={j} style={{ padding: 16, borderBottom: j < cols.length - 1 ? "0.5px solid #595959" : undefined }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <col.Icon size={14} />
                  <p style={SUBHEADING}>{col.label}</p>
                </div>
                <p style={BODY}>{row[col.key]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr 40px 1fr", rowGap: 16 }}>
      {[
        { Icon: View, label: "Research insight" },
        null,
        { Icon: Idea, label: "Design decision" },
        null,
        { Icon: Growth, label: "Impact" },
      ].map((col, i) =>
        col === null ? (
          <div key={i} />
        ) : (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingBottom: 8 }}>
            <col.Icon size={18} />
            <p style={SUBHEADING}>{col.label}</p>
          </div>
        )
      )}
      {designRows.map((row, i) => (
        <Fragment key={i}>
          <div style={{ border: "0.5px solid #595959", padding: 20 }}>
            <p style={BODY}>{row.insight}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#595959" }}>
            <ArrowRight size={16} />
          </div>
          <div style={{ border: "0.5px solid #595959", padding: 20 }}>
            <p style={BODY}>{row.decision}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#595959" }}>
            <ArrowRight size={16} />
          </div>
          <div style={{ border: "0.5px solid #595959", padding: 20 }}>
            <p style={BODY}>{row.impact}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default function Goulash() {
  const isMobile = useIsMobile();
  const S = { ...SECTION, gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", paddingBottom: isMobile ? 60 : 120, gap: isMobile ? 24 : 40 };
  const L: React.CSSProperties = { ...LABEL, position: isMobile ? "static" : "sticky" };
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ background: "#fcfcfc", fontFamily: "'Instrument Sans', sans-serif", color: "#242424" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px" }}>

        {/* Hero */}
        <section style={{ paddingTop: isMobile ? 40 : 80, paddingBottom: isMobile ? 60 : 120, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {["Goulash", "Foodtech", "Mobile"].map((item, i) => (
              <Fragment key={i}>
                {i > 0 && <span style={{ display: "inline-block", width: 4, height: 4, background: "#595959", flexShrink: 0 }} />}
                <span style={{ fontSize: 13, fontWeight: 400, color: "#595959", lineHeight: 1.4 }}>{item}</span>
              </Fragment>
            ))}
          </div>
          <h2 style={{ fontSize: isMobile ? 34 : 64, fontWeight: 500, lineHeight: 1.04, letterSpacing: isMobile ? "-0.5px" : "-1.408px", margin: 0, width: "100%" }}>
            Introducing a way to communicate savings indirectly in a meal planning app
          </h2>
        </section>

        {/* Overview */}
        <div style={S} className="reveal">
          <p style={L}>Overview</p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", border: "0.5px solid #595959" }}>
            {[
              {
                n: "01",
                label: "Context",
                text: "Goulash is a meal planning app that sits between recipe discovery and grocery delivery. The idea is to help users save money, reduce food waste, and spend less time deciding what to cook.",
              },
              {
                n: "02",
                label: "Problem",
                text: "The main idea is that you can save money. However, when I joined the project, there was no indication of savings in the user interface.",
              },
              {
                n: "03",
                label: "Process",
                text: "After some research and benchmarking, I prepared communication based on showing a price for each meal. But I had to change my idea because it turned out we couldn\u2019t show specific discounts or prices for individual meals because of local laws. I had to come up with indirect signals that people would still believe.",
              },
              {
                n: "04",
                label: "Outcomes",
                text: "I\u2019ve created a set of ways to communicate indirect savings, including a tab with only discounted recipes, a banner informing about discounted ingredients within a recipe, or a drawer explaining and defining pricing tiers. The patterns have been added and are available in the app in the form I designed them.",
              },
            ].map((card, i) => (
              <div key={card.label} style={{ padding: 32, borderRight: !isMobile && i % 2 === 0 ? "0.5px solid #595959" : undefined, borderBottom: i < 3 ? "0.5px solid #595959" : undefined }}>
                <div style={{ display: "flex", gap: 16, alignItems: "baseline", margin: "0 0 12px" }}><span style={{ fontSize: 15, fontWeight: 600, color: "rgba(36,36,36,0.35)", flexShrink: 0 }}>{card.n}</span><span style={{ fontSize: 15, fontWeight: 600 }}>{card.label}</span></div>
                <p style={BODY}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div style={{ paddingTop: 40, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 12 }} className="reveal">
          <div style={{ position: "relative" }}>
            <img
              src="/goulash-hero.gif"
              alt="Goulash savings experience — discount badges, deals filter, and savings popup"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, border: "0.5px solid #D4D4D2", pointerEvents: "none" }} />
          </div>
          <p style={CAPTION}>
            The redesigned cookbook experience highlights savings from the start. I added a &lsquo;deals&rsquo; tab for filtered browsing and put discount badges on recipe cards. I also explained the price tiers and how the discount value is calculated.
          </p>
        </div>

        {/* Key design decisions */}
        <div style={{ paddingTop: 40, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 24 }} className="reveal">
          <h2 style={H2}>Key design decisions</h2>
          <div style={{ border: "0.5px solid #595959" }}>
            {[
              {
                n: "01",
                title: "Introduced a dedicated tab for recipes with discounts.",
                text: "It makes it easier for people to find recipes with a focus on budget-friendly choices.",
              },
              {
                n: "02",
                title: "Highlighted meals that included discounted ingredients with eye-catching badges.",
                text: "So that it\u2019s instantly clear which meals are cheaper and by what percent.",
              },
              {
                n: "03",
                title: "I\u2019ve added clear explanations to the price tiers and how discounts are calculated.",
                text: "At first, the price tiers were just $ symbols with no explanation. I gave them some exact figures on price ranges to make it clear how much the meal would cost. I also included some info on how discounts are calculated and what the approximate percentage actually means.",
              },
              {
                n: "04",
                title: "Shopping cart highlights savings for easy total cost tracking.",
                text: "Price comparisons show the original price and the discounted price, so users can easily spot savings.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.n}
                style={{
                  padding: isMobile ? "20px 16px" : "32px 40px",
                  borderBottom: i < arr.length - 1 ? "0.5px solid #595959" : undefined,
                  display: "flex",
                  gap: isMobile ? 16 : 40,
                  alignItems: "flex-start",
                }}
              >
                {!isMobile && <span style={KDD_INDEX}>{item.n}</span>}
                <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 4 }}>
                  <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.55, margin: 0 }}>{item.title}</p>
                  <p style={BODY}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Read more toggle */}
        <div style={{ paddingBottom: expanded ? 0 : 120, paddingTop: 0 }}>
          <ReadMoreButton expanded={expanded} onToggle={() => setExpanded(!expanded)} label="Read more (~3 min)" />
        </div>

        {/* Extended content */}
        {expanded && (
          <>
            {/* Discovery */}
            <div style={{ paddingTop: 80, paddingBottom: 0 }} className="reveal">
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", gap: isMobile ? 24 : 40 }}>
                <p style={L}>Discovery</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={H2}>The promise wasn&apos;t obvious</h2>
                  <p style={{ ...BODY, maxWidth: 640 }}>
                    The constraint became clear over time. My first idea was to show prices per meal &mdash; a simple, easy-to-read signal for people who want to watch their spending. It was reviewed by the legal team and flagged up. That&apos;s when the problem shifted from how do we show savings to how do we communicate value without disclosing amounts.
                  </p>
                  <p style={{ ...BODY, maxWidth: 640 }}>
                    The final cost of meals in the Goulash app depends on a bunch of different things: how many meals are added to a plan, how many products are shared between recipes, and which provider the user chooses. It would be misleading to show just one &ldquo;you&apos;ll save X&rdquo; figure.
                  </p>
                </div>
              </div>
            </div>

            {/* Process — design choices table */}
            <div style={{ paddingTop: isMobile ? 40 : 80, paddingBottom: 0, display: "flex", flexDirection: "column", gap: 0 }} className="reveal">
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", gap: isMobile ? 24 : 40, paddingBottom: isMobile ? 24 : 40 }}>
                <p style={L}>Process</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <h2 style={H2}>The reasons behind the design choices</h2>
                  <p style={BODY}>The full decision chain &mdash; each row shows a single insight to its design response and the reasoning behind it.</p>
                </div>
              </div>
              <DesignChoicesTable isMobile={isMobile} />
              <p style={{ ...CAPTION, marginTop: 12 }}>
                The full decision chain &mdash; each row shows a single insight to its design response and the reasoning behind it.
              </p>
            </div>

            {/* Outcomes */}
            <div style={{ ...S, paddingTop: isMobile ? 40 : 80 }} className="reveal">
              <p style={L}>Outcomes</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 720 }}>
                <h2 style={H2}>A set of ways to communicate value of the app</h2>
                <p style={BODY}>
                  I came up with a set of rules to inform users about the main value of the app &mdash; savings on groceries, together with delivering additional and updated components. I can&apos;t point to any metrics because I wasn&apos;t on the project long enough to see any post-launch data. What I can say is that the way it&apos;s set up hasn&apos;t changed since it was released.
                </p>
              </div>
            </div>

            {/* Components visual */}
            <div style={{ paddingTop: 40, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 12 }} className="reveal">
              <div style={{ position: "relative" }}>
                <img
                  src="/goulash-components.png"
                  alt="Goulash savings components — recipe page with banner and cart with discounted ingredients"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, border: "0.5px solid #D4D4D2", pointerEvents: "none" }} />
              </div>
              <p style={CAPTION}>
                Set of components designed to support saving communication
              </p>
            </div>

            {/* Reflections */}
            <div style={{ ...S, paddingTop: isMobile ? 24 : 40 }} className="reveal">
              <p style={L}>Reflections</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={H2}>What I&apos;d track to measure future impact:</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <Bullet>Selection rate of discounted recipes.</Bullet>
                    <Bullet>Conversion from meal plan to shopping list.</Bullet>
                    <Bullet>I&apos;d also like to run some qualitative interviews to see how clear and trustworthy the communication seems.</Bullet>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
                  <h2 style={H2}>Thoughts on designing with strong constraints</h2>
                  <p style={BODY}>
                    The rule about not showing certain amounts made us think more carefully about what information users need at each step and where on the screen they need it. The constraint made the communication more precise. Also, I found that microcopy was more important than I thought it would be.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* See other case studies */}
        <div style={{ paddingBottom: isMobile ? 80 : 160, paddingTop: 0 }} className="reveal">
          <h2 style={{ ...H2, marginBottom: 40 }}>See other case studies</h2>
          <CaseStudyGrid cards={[
            { href: "/projects/wooclap", client: "Wooclap", industry: "Edtech", platform: "Desktop", title: "Designing an intuitive drag-and-drop grouping experience for live presentations" },
            { href: "/projects/nn", client: "Nationale Nederlanden", industry: "Insurance", platform: "Desktop", title: "Redesigning the agent experience in an insurance CRM — unified workflows and commission tracking" },
          ]} />
        </div>

      </div>
      <Footer />
    </div>
  );
}
