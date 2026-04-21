"use client";
import { Fragment, useState } from "react";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import { KDD_INDEX } from "@/lib/styles";
import { ChevronDown, ChevronUp } from "@carbon/icons-react";

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

export default function NN() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ background: "#fcfcfc", fontFamily: "'Instrument Sans', sans-serif", color: "#242424" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 80px" }}>

        {/* Hero */}
        <section style={{ paddingTop: 80, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {["Nationale Nederlanden", "Insurance", "Desktop"].map((item, i) => (
              <Fragment key={i}>
                {i > 0 && <span style={{ display: "inline-block", width: 4, height: 4, background: "#595959", flexShrink: 0 }} />}
                <span style={{ fontSize: 13, fontWeight: 400, color: "#595959", lineHeight: 1.4 }}>{item}</span>
              </Fragment>
            ))}
          </div>
          <h2 style={{ fontSize: 64, fontWeight: 500, lineHeight: 1.04, letterSpacing: "-1.408px", margin: 0, width: "100%" }}>
            Redesigning the agent experience in an insurance CRM &mdash; unified workflows and commission tracking
          </h2>
        </section>

        {/* Overview */}
        <div style={SECTION} className="reveal">
          <p style={LABEL}>Overview</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "0.5px solid #595959" }}>
            {[
              {
                n: "01",
                label: "Context",
                text: "Nationale Nederlanden is an insurance provider. They\u2019ve got a pretty complex set of internal tools, and my job was to make the agent\u2019s workflow in their CRM platform, called K2, a bit easier.",
              },
              {
                n: "02",
                label: "Problem",
                text: "The problem was that agents were managing clients on one platform and making sales on three others (depending on the insurance type that was being sold). So, every sale meant having to do a bunch of things like switching between tools, rewriting data that didn\u2019t sync and manually reporting outcomes, and so on.",
              },
              {
                n: "03",
                label: "Process",
                text: "I joined after the research had already been done. I came in at synthesis, which basically means mapping findings onto the actual workflow across both platforms, then designing a model that connected client context to sales action.",
              },
              {
                n: "04",
                label: "Outcomes",
                text: "The work covered three main areas: lead management, client database and daily prioritisation. We created some high-fidelity prototypes for user testing and engineering handoff.",
              },
            ].map((card, i) => (
              <div key={card.label} style={{ padding: 32, borderRight: i % 2 === 0 ? "0.5px solid #595959" : undefined, borderBottom: i < 2 ? "0.5px solid #595959" : undefined }}>
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
              src="/nn-hero.gif"
              alt="Nationale Nederlanden CRM \u2014 dashboard improvements"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, border: "0.5px solid #D4D4D2", pointerEvents: "none" }} />
          </div>
          <p style={CAPTION}>
            The main thing we did was improve the dashboard. We did that by adding a simple icon button in the side menu, which let insurance agents start selling straight from their CRM platform. There were also a few other changes, like adding a box to estimate commissions, a button to start online meetings from the platform and a new way of organising actions based on their priority.
          </p>
        </div>

        {/* Key design decisions */}
        <div style={{ paddingTop: 40, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 24 }} className="reveal">
          <h2 style={H2}>Key design decisions</h2>
          <div style={{ border: "0.5px solid #595959" }}>
            {[
              {
                n: "01",
                title: "Entry points for starting a sale",
                text: "Added sales entry points in the nav bar and inside client and lead detail pages. Agents can start a quote or policy from wherever they already are, without losing context.",
              },
              {
                n: "02",
                title: "A dashboard that surfaces action",
                text: "The old dashboard didn\u2019t show urgent actions. The redesign added tagged action items, like contact requests and payment issues, directly on the dashboard.",
              },
              {
                n: "03",
                title: "One place for lead and client details",
                text: "Lead information was split across platforms, sometimes with mismatched data. A unified lead and client detail page pulls together insurance needs, sales status, and next steps in one place.",
              },
              {
                n: "04",
                title: "Commission summary on the dashboard",
                text: "Agents never really knew how much they were going to earn by the end of the month, so they had to calculate it themselves. We\u2019ve added a commission summary to the dashboard. It estimates a bonus from reported policy premiums, updates automatically from sales system data, and gives agents a running view of where they stand against their targets.",
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
            <div style={{ paddingTop: 80, paddingBottom: 0, display: "flex", flexDirection: "column", gap: 0 }} className="reveal">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, paddingBottom: 56 }}>
                <p style={LABEL}>Discovery</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={H2}>The tools worked, but they weren&apos;t connected</h2>
                  <p style={BODY}>
                    Research synthesis mapped the findings onto the actual workflow across K2 and ONE, which helped us identify three areas causing difficulties:
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, border: "0.5px solid #595959" }}>
                {[
                  {
                    title: "Integration with sales systems",
                    findings: [
                      "Agents had to leave the CRM to complete a sale, which broke the context and forced them to do manual reporting.",
                      "The sales data didn\u2019t flow back automatically. It was also missing commission visibility.",
                      "One process required multiple logins.",
                    ],
                  },
                  {
                    title: "Dashboard & navigation",
                    findings: [
                      "The CRM wasn\u2019t the agents\u2019 main tool for decision-making, and key information was spread across different platforms.",
                      "The client database filtering didn\u2019t show the actual workflows.",
                    ],
                  },
                  {
                    title: "Lead management",
                    findings: [
                      "The leads were a bit all over the place, with no real structure, priorities or clear ownership.",
                      "There weren\u2019t any quality indicators, like in the future-potential category.",
                      "Managers couldn\u2019t manage the distribution of leads between agents.",
                    ],
                  },
                ].map((cat, i) => (
                  <div key={cat.title} style={{ padding: 32, borderRight: i < 2 ? "0.5px solid #595959" : undefined }}>
                    <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.55, margin: "0 0 20px" }}>{cat.title}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {cat.findings.map((f, j) => <Bullet key={j}>{f}</Bullet>)}
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ ...CAPTION, margin: "12px 0 0" }}>
                Each card represents a category in which structural gaps were caused by the difference between K2 and ONE in terms of how the tools fit together.
              </p>
            </div>

            {/* Design solution visual */}
            <div style={{ paddingTop: 80, paddingBottom: 0, display: "flex", flexDirection: "column", gap: 12 }} className="reveal">
              <div style={{ position: "relative" }}>
                <img
                  src="/nn_start-sales-client.gif"
                  alt="Starting a sales process from client view"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, border: "0.5px solid #D4D4D2", pointerEvents: "none" }} />
              </div>
              <p style={CAPTION}>
                I introduced direct entry points into sales platforms from within client and lead views.
                Agents could initiate a quote or policy workflow without needing to open the respective
                sales platform and rewriting client&apos;s data.
              </p>
            </div>

            {/* Outcomes */}
            <div style={{ ...SECTION, paddingTop: 120 }} className="reveal">
              <p style={LABEL}>Outcomes</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
                <h2 style={H2}>Two iterations, tested with agents in usability sessions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.55, margin: 0 }}>What shaped the second iteration:</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <Bullet>
                      The commission widget showed amounts by default. Agents wanted to be able to hide it because it wasn&apos;t always convenient to have it visible. So we&apos;ve added visibility controls.
                    </Bullet>
                    <Bullet>
                      The sale entry point used an icon that was a bit hard to read. We replaced it with a simpler one.
                    </Bullet>
                    <Bullet>
                      The most important change: We need a &lsquo;Start Sale&rsquo; button to cover more use cases. Agents needed it for anniversary changes and campaign sales, too. The first version treated it as a single action, which was to start a new sale. The second one made it an upsell entry point as well. That had a big impact on the flow structure &mdash; the biggest change between rounds.
                    </Bullet>
                  </div>
                </div>
                <p style={BODY}>
                  Once we&apos;d done the user testing, we&apos;d got the designs and prototypes ready for the engineering handoff. The model showed how K2 and the sales platforms could operate as one surface, and it became the starting point for future integration work.
                </p>
              </div>
            </div>

            {/* Reflections */}
            <div style={{ ...SECTION, paddingTop: 40 }} className="reveal">
              <p style={LABEL}>Reflections</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={H2}>What I&apos;d track to measure future impact:</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Time from lead qualification to sales initiation",
                      "Number of platform switches per completed sales flow",
                      "Lead-to-policy conversion rate",
                      "Long-term agent task completion rate and satisfaction",
                    ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
                  <h2 style={H2}>Learnings</h2>
                  <p style={BODY}>
                    I joined after the research was finished. If you&apos;re going off someone else&apos;s synthesis, you might end up misinterpreting it. It was really helpful to have the researcher in design reviews. They could explain problems more clearly, tweak ideas or challenge them if they were wrong. It just goes to show that working together and talking things through are the key to finding the best solution.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* See other case studies */}
        <div style={{ paddingBottom: 160, paddingTop: expanded ? 40 : 0 }} className="reveal">
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
              href="/projects/goulash"
              client="Goulash"
              industry="Food tech"
              platform="Mobile"
              title="Introducing a way to communicate savings indirectly in a meal planning app"
            />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
