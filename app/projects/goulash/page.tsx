"use client";
import { Fragment, useState } from "react";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import { View, Idea, Star, Growth, ArrowRight, ChevronDown, ChevronUp } from "@carbon/icons-react";
import { KDD_INDEX } from "@/lib/styles";

const LABEL: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  color: "#595959",
  paddingTop: 6,
  margin: 0,
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
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: hovered ? "#3a3a3a" : "#242424",
          color: "#fcfcfc",
          border: "0.5px solid #242424",
          padding: "12px 24px",
          fontSize: 15,
          fontWeight: 400,
          fontFamily: "inherit",
          cursor: "pointer",
          transition: "background 0.2s ease",
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
    insight: "People are often on the lookout for sales-specific categories, so they should be easy to find.",
    decision: "Use a separate filter to find recipes that include discounted ingredients.",
    matters: "Users who start with a budget goal can immediately browse cost-optimized recipes instead of discovering discounts by chance.",
    impact: "Reduces time spent searching and supports price-driven meal planning.",
  },
  {
    insight: "Users judge how valuable something is when they see the numbers.",
    decision: "Information about discounts can be found right next to the recipe. On the shopping cart level, the original price is shown next to the discounted one so the customer can compare the two prices.",
    matters: "The generated shopping list becomes instantly scannable for savings, helping users understand how the total cost is calculated.",
    impact: "Faster cost comparison and clearer perception of savings.",
  },
  {
    insight: "People see the same discount as more valuable if it is presented as the larger number.",
    decision: "Show the most meaningful savings — as a percentage or as an absolute amount. This was flagged for A/B testing.",
    matters: "Users can quickly identify which ingredients create the biggest budget impact.",
    impact: "Stronger perception of value when optimizing the shopping list.",
  },
  {
    insight: "Symbols alone don't always help users to understand what they can expect. They need something to base their ideas on.",
    decision: "The cost tiers (lowest, medium, highest price) show you the price range for each tier.",
    matters: "A labelled tier sets a concrete spending expectation before users commit to a meal plan.",
    impact: "Planning meals takes less time.",
  },
];

function DesignChoicesTable() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr 40px 1fr 40px 1fr", rowGap: 16 }}>
      {[
        { Icon: View, label: "Research insight" },
        null,
        { Icon: Idea, label: "Design decision" },
        null,
        { Icon: Star, label: "Why it matters" },
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
            <p style={BODY}>{row.matters}</p>
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
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ background: "#fcfcfc", fontFamily: "'Instrument Sans', sans-serif", color: "#242424" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>

        {/* Hero */}
        <section style={{ paddingTop: 80, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {["Goulash", "Foodtech", "Mobile"].map((item, i) => (
              <Fragment key={i}>
                {i > 0 && <span style={{ display: "inline-block", width: 4, height: 4, background: "#595959", flexShrink: 0 }} />}
                <span style={{ fontSize: 13, fontWeight: 400, color: "#595959", lineHeight: 1.4 }}>{item}</span>
              </Fragment>
            ))}
          </div>
          <h2 style={{ fontSize: 64, fontWeight: 500, lineHeight: 1.04, letterSpacing: "-1.408px", margin: 0, width: "100%" }}>
            Helping users find and optimize meal plans based on ingredient discounts and price tiers
          </h2>
        </section>

        {/* Overview */}
        <div style={SECTION} className="reveal">
          <p style={LABEL}>Overview</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "0.5px solid #595959" }}>
            {[
              {
                label: "Context",
                text: "Goulash is an app that helps people plan meals by offering recipes and ordering groceries directly from the same app. The idea is to help users save money, reduce food waste, and spend less time deciding what to cook.",
              },
              {
                label: "Problem",
                text: "The main idea is that you can save money. But when I joined the project, there was nothing showing savings in the user interface.",
              },
              {
                label: "Process",
                text: "At first, I suggested setting a price for each meal, but I had to change my idea because we couldn't show specific discounts or prices for individual meals because of local laws. I had to come up with indirect signals that people would still believe.",
              },
              {
                label: "Outcomes",
                text: "A savings banner on the recipe page, with a popup explaining how the discount is calculated and which specific ingredients are discounted.",
              },
            ].map((card, i) => (
              <div key={card.label} style={{ padding: 32, borderRight: i % 2 === 0 ? "0.5px solid #595959" : undefined, borderBottom: i < 2 ? "0.5px solid #595959" : undefined }}>
                <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.55, margin: "0 0 12px" }}>{card.label}</p>
                <p style={BODY}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div style={{ paddingTop: 40, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 12 }} className="reveal">
          <img
            src="/goulash-hero.gif"
            alt="Goulash savings experience — discount badges, deals filter, and savings popup"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <p style={CAPTION}>
            The redesigned cookbook experience — Deals tab for filtered browsing, discount badges on recipe cards, and a savings popup on entry.
          </p>
        </div>

        {/* Key design decisions */}
        <div style={{ paddingTop: 40, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 24 }} className="reveal">
          <h2 style={H2}>Key design decisions</h2>
          <div style={{ border: "0.5px solid #595959" }}>
            {[
              {
                n: "01",
                title: "Filter added to find recipes based on discounts for budget options.",
                text: "Budget goals enable browsing of cost-optimized recipes immediately.",
              },
              {
                n: "02",
                title: "Price comparisons display original and discounted prices for obvious savings.",
                text: "Shopping cart highlights savings for easy total cost tracking.",
              },
              {
                n: "03",
                title: "Clear cost tiers with price ranges provide a quick, transparent spending overview.",
                text: "Tier labels set clear spending expectations before meal plan selection.",
              },
              {
                n: "04",
                title: "Savings shown as percentage or dollar amount for clarity.",
                text: "Ingredients impacting budget are highlighted for smarter choices.",
              },
            ].map((item, i, arr) => (
              <div
                key={item.n}
                style={{
                  padding: "32px 40px",
                  borderBottom: i < arr.length - 1 ? "0.5px solid #595959" : undefined,
                  display: "flex",
                  gap: 40,
                  alignItems: "flex-start",
                }}
              >
                <span style={KDD_INDEX}>{item.n}</span>
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
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40 }}>
                <p style={LABEL}>Discovery</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={H2}>The promise wasn't visible</h2>
                  <p style={{ ...BODY, maxWidth: 640 }}>
                    The constraint became clear gradually. Final costs in Goulash depend on too many
                    variables: how many meals are in a plan, how many products overlap between recipes,
                    which provider the user selects. Showing a single “you'll save X” figure would be
                    misleading.
                  </p>
                  <p style={{ ...BODY, maxWidth: 640 }}>
                    Local commerce laws added a further restriction on displaying specific discount
                    amounts. We couldn't show numbers. My initial proposal was a price-per-meal view
                    — a clean, scannable signal for budget-conscious users. Legal reviewed it and
                    flagged it. That's when the problem shifted from “how do we show savings” to
                    “how do we communicate value without disclosing amounts”.
                  </p>
                </div>
              </div>
            </div>

            {/* Process — design choices table */}
            <div style={{ paddingTop: 80, paddingBottom: 0, display: "flex", flexDirection: "column", gap: 0 }} className="reveal">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, paddingBottom: 40 }}>
                <p style={LABEL}>Process</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <h2 style={H2}>The reasons behind the design choices</h2>
                  <p style={BODY}>The full decision chain — each row traces a single insight to its design response and the reasoning behind it.</p>
                </div>
              </div>
              <DesignChoicesTable />
            </div>

            {/* Outcomes */}
            <div style={{ ...SECTION, paddingTop: 80 }} className="reveal">
              <p style={LABEL}>Outcomes</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 720 }}>
                <h2 style={H2}>A set of consistent communication patterns that are now part of the app</h2>
                <p style={BODY}>
                  I can't point to any metrics because I wasn't on the project long enough to see
                  any post-launch data. What I can say is that the way it's set up hasn't changed
                  since it was released.
                </p>
              </div>
            </div>

            {/* Components visual */}
            <div style={{ paddingTop: 40, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 12 }} className="reveal">
              <img
                src="/goulash-components.png"
                alt="Goulash savings components — recipe page with banner and cart with discounted ingredients"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <p style={CAPTION}>
                A savings banner on the recipe page, with a popup explaining how the discount is calculated and which specific ingredients are discounted.
              </p>
            </div>

            {/* Reflections */}
            <div style={{ ...SECTION, paddingTop: 40 }} className="reveal">
              <p style={LABEL}>Reflections</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={H2}>What I'd track to measure future impact:</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <Bullet>Compare the number of discounted recipes selected with the number of regular-price ones.</Bullet>
                    <Bullet>Analyse what percentage of people finish the meal plans with an order.</Bullet>
                    <Bullet>Conduct interviews to find out what people think about how clear and trustworthy the given information is.</Bullet>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
                  <h2 style={H2}>Learnings on indirect design</h2>
                  <p style={BODY}>
                    The restriction on showing specific amounts forced a more careful look at what information users actually need at each step, and where in the interface they need it. The constraint made the communication more precise.
                  </p>
                  <p style={BODY}>
                    Microcopy turned out to be more important than I'd expected. A badge without an
                    explanation creates doubt. The same badge, paired with a clear label and appropriate
                    context, builds trust. This is something I have learned from working on this project.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* See other case studies */}
        <div style={{ paddingBottom: 160, paddingTop: expanded ? 0 : 0 }} className="reveal">
          <h2 style={{ ...H2, marginBottom: 40 }}>See other case studies</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <CaseStudyCard
              href="/projects/wooclap"
              client="Wooclap"
              industry="Edtech"
              platform="Desktop"
              title="Designing an intuitive drag-and-drop grouping experience for live presentations"
            />
            <CaseStudyCard
              href="/projects/nn"
              client="Nationale Nederlanden"
              industry="Insurance"
              platform="Desktop"
              title="Transforming insurance CRM — redesigning the agent experience with clearer workflows and commission tracking"
            />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
