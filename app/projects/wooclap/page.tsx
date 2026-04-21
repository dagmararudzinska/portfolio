"use client";
import { Fragment, useState, useRef, useLayoutEffect } from "react";
import Footer from "@/components/Footer";
import { ArrowUpRight, ArrowRight, View, Idea, ChevronDown, ChevronUp } from "@carbon/icons-react";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import { useIsMobile } from "@/hooks/useIsMobile";
import { KDD_INDEX, TAB_BAR, TAB_BAR_MOBILE, tabItem } from "@/lib/styles";

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

function SecondaryLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: hovered ? "#ececec" : "transparent",
        color: "#242424",
        padding: "10px 16px",
        fontSize: 14,
        fontWeight: 400,
        textDecoration: "none",
        fontFamily: "inherit",
        border: "0.5px solid #242424",
        transition: "background 0.2s ease",
      }}
    >
      {label}
      <ArrowUpRight size={16} style={{ transition: "transform 0.2s ease", transform: hovered ? "translate(2px, -2px)" : "translate(0,0)", flexShrink: 0 }} />
    </a>
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

function PovCards({ findings, takeaways, isMobile }: { findings: string[]; takeaways: string[]; isMobile: boolean }) {
  const rows = Math.max(findings.length, takeaways.length);

  if (isMobile) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, paddingBottom: 4 }}>
            <View size={14} />
            <p style={SUBHEADING}>Findings</p>
          </div>
          {findings.map((f, i) => (
            <div key={i} style={{ border: "0.5px solid #595959", padding: 16 }}>
              <p style={BODY}>{f}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, paddingBottom: 4 }}>
            <Idea size={14} />
            <p style={SUBHEADING}>Takeaways</p>
          </div>
          {takeaways.map((t, i) => (
            <div key={i} style={{ border: "0.5px solid #595959", padding: 16 }}>
              <p style={BODY}>{t}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", rowGap: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingBottom: 8 }}>
        <View size={18} />
        <p style={SUBHEADING}>Findings</p>
      </div>
      <div />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingBottom: 8 }}>
        <Idea size={18} />
        <p style={SUBHEADING}>Takeaways</p>
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <Fragment key={i}>
          <div style={{ border: "0.5px solid #595959", padding: 20 }}>
            {findings[i] && <p style={BODY}>{findings[i]}</p>}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#595959" }}>
            <ArrowRight size={16} />
          </div>
          <div style={{ border: "0.5px solid #595959", padding: 20 }}>
            {takeaways[i] && <p style={BODY}>{takeaways[i]}</p>}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

const POVS = [
  {
    label: "POV: Presenter creating an exercise",
    findings: [
      "The layout was a bit cluttered and tight, which made the hierarchy not immediately obvious.",
      "The form looked heavy, mostly because of helper texts making spacing between fields uneven. Inputs had labels that showed up as placeholders, then became top labels when typing.",
    ],
    takeaways: [
      "Cleaner layout with more generous white space.",
      "Provide tips as placeholders and use labels above input fields from the start.",
    ],
  },
  {
    label: "POV: Participant completing the exercise",
    findings: [
      "The display participants saw after joining differed from the presentation view, causing confusion.",
      "Dropdowns hid options and required many clicks to complete.",
      "It was possible to submit an unfinished exercise — the submit button was always active.",
      '"Incorrect answer" on red appeared even when the result was 90%.',
    ],
    takeaways: [
      "Keep layout consistent between presenter and participant views.",
      "Introduce drag-and-drop for a more natural interaction.",
      "Handle impossible actions through UI constraints, like disabled buttons.",
      "Soften feedback when the answer isn't 100% correct.",
    ],
  },
];

function PovSection() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [initialized, setInitialized] = useState(false);

  useLayoutEffect(() => {
    if (isMobile || initialized || !containerRef.current) return;
    const children = Array.from(containerRef.current.children) as HTMLElement[];
    const maxH = Math.max(...children.map(ch => ch.offsetHeight));
    setContainerHeight(maxH);
    setInitialized(true);
  }, [isMobile, initialized]);

  if (isMobile) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={TAB_BAR_MOBILE}>
          {POVS.map((p, i) => (
            <div key={i} style={{ ...tabItem(activeTab === i), textAlign: "left", borderBottom: activeTab === i ? "1px solid #242424" : "0.5px solid #D4D4D2", marginBottom: 0, whiteSpace: "normal" }} onClick={() => setActiveTab(i)}>
              {p.label}
            </div>
          ))}
        </div>
        <PovCards findings={POVS[activeTab].findings} takeaways={POVS[activeTab].takeaways} isMobile={true} />
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40 }}>
      <div />
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={TAB_BAR}>
          {POVS.map((p, i) => (
            <div key={i} style={tabItem(activeTab === i)} onClick={() => setActiveTab(i)}>
              {p.label}
            </div>
          ))}
        </div>
        <div
          ref={containerRef}
          style={{ position: "relative", height: initialized ? containerHeight : undefined }}
        >
          {POVS.map((pov, i) => (
            <div
              key={i}
              style={
                !initialized
                  ? { marginBottom: i < POVS.length - 1 ? 16 : 0 }
                  : {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      opacity: activeTab === i ? 1 : 0,
                      transition: "opacity 0.2s ease",
                      pointerEvents: activeTab === i ? "auto" : "none",
                    }
              }
            >
              <PovCards findings={pov.findings} takeaways={pov.takeaways} isMobile={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageTabs() {
  const [active, setActive] = useState<"current" | "redesign">("current");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <div style={TAB_BAR}>
        <div style={tabItem(active === "current")} onClick={() => setActive("current")}>Current Model</div>
        <div style={tabItem(active === "redesign")} onClick={() => setActive("redesign")}>Redesign</div>
      </div>
      <div style={{ height: 20 }} />
      <div style={{ position: "relative" }}>
        <img
          src={active === "current" ? "/wooclap-before.png" : "/wooclap-after.png"}
          alt={active === "current" ? "Current model — audience view" : "Redesigned audience view"}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, border: "0.5px solid #D4D4D2", pointerEvents: "none" }} />
      </div>
    </div>
  );
}

export default function Wooclap() {
  const isMobile = useIsMobile();
  const S = { ...SECTION, gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", paddingBottom: isMobile ? 60 : 120, gap: isMobile ? 24 : 40 };
  const L: React.CSSProperties = { ...LABEL, position: isMobile ? "static" : "sticky" };
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ background: "#fcfcfc", fontFamily: "'Instrument Sans', sans-serif", color: "#242424" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: isMobile ? "0 20px" : "0 80px", overflowX: "hidden" }}>

        {/* Hero */}
        <section style={{ paddingTop: isMobile ? 40 : 80, paddingBottom: isMobile ? 60 : 120, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {["Wooclap", "Edtech", "Desktop"].map((item, i) => (
              <Fragment key={i}>
                {i > 0 && <span style={{ display: "inline-block", width: 4, height: 4, background: "#595959", flexShrink: 0 }} />}
                <span style={{ fontSize: 13, fontWeight: 400, color: "#595959", lineHeight: 1.4 }}>{item}</span>
              </Fragment>
            ))}
          </div>
          <h2 style={{ fontSize: isMobile ? 34 : 64, fontWeight: 500, lineHeight: 1.04, letterSpacing: isMobile ? "-0.5px" : "-1.408px", margin: 0, width: "100%" }}>
            Designing an intuitive drag-and-drop grouping experience for live presentations
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
                text: "Wooclap is an edtech platform that helps presenters add exercises to their presentations — like quizzes, polls or open questions. What was missing was a clean way to group multiple items under a single label.",
              },
              {
                n: "02",
                label: "Problem",
                text: "The platform lacked a way to test many-to-one categorisation. The closest existing format was Matching, but it only supported one-to-one logic. My task was to address this friction point in a few hours recruitment task.",
              },
              {
                n: "03",
                label: "Process",
                text: "I designed \u201cGrouping\u201d — a new exercise type. Core decisions: introduce it as a new feature rather than expanding an existing one; use drag-and-drop; and let the UI handle feedback without interrupting the flow.",
              },
              {
                n: "04",
                label: "Outcomes",
                text: "The proposal covered exercise taxonomy, interaction models, presenter configuration, participant experience, and directions for further exploration.",
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
              src="/wooclap-hero.gif"
              alt="Participant view — completing the grouping exercise"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, border: "0.5px solid #D4D4D2", pointerEvents: "none" }} />
          </div>
          <p style={CAPTION}>
            Participant view — completing the exercise. Numbered items sit at the top, ready to drag to group containers waiting below. The subtitle carries the main instructions, keeping the interface clean and straightforward.
          </p>
        </div>

        {/* Key design decisions */}
        <div style={{ paddingTop: 40, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 24 }} className="reveal">
          <h2 style={H2}>Key design decisions</h2>
          <div style={{ border: "0.5px solid #595959" }}>
            {[
              {
                n: "01",
                title: "Grouping as its own exercise type",
                text: "One-to-one and many-to-one work differently. Keeping them separate makes picking exercises easier and lets Grouping evolve on its own.",
              },
              {
                n: "02",
                title: "Matching layout for presenters and participants",
                text: "Thanks to this approach, participants who enter the exercise know exactly what to expect and they don't have to learn a different layout or mechanics.",
              },
              {
                n: "03",
                title: "Drag-and-drop is the main interaction",
                text: "Dragging and dropping fits right into how we naturally group things — you just grab something and put it where it belongs. It makes the many-to-one idea feel super natural, no need to explain.",
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
          <ReadMoreButton expanded={expanded} onToggle={() => setExpanded(!expanded)} label="Read more (~4 min)" />
        </div>

        {/* Extended content */}
        {expanded && (
          <>
            {/* Discovery & Audit */}
            <div style={{ paddingTop: isMobile ? 40 : 80, paddingBottom: 0, display: "flex", flexDirection: "column", gap: 0 }} className="reveal">
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", gap: isMobile ? 24 : 40, paddingBottom: isMobile ? 32 : 56 }}>
                <p style={L}>Discovery &amp; audit</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={H2}>Exploring the{"\u00a0"}platform</h2>
                  <p style={{ ...BODY, maxWidth: 640 }}>
                    Before moving to designing a solution, I wanted to understand how the platform
                    works — so I could ground my proposition in the existing product. I mapped and
                    audited user flows for matching exercise — from the presenter and the audience side.
                    Here's what I found and what it made me think:
                  </p>
                </div>
              </div>
              <PovSection />
            </div>

            {/* Exercise display visual */}
            <div style={{ paddingTop: isMobile ? 40 : 80, paddingBottom: 0, display: "flex", flexDirection: "column", gap: 12 }} className="reveal">
              <div style={{ position: "relative" }}>
                <img
                  src="/wooclap-display.png"
                  alt="Presentation view of the exercise"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, border: "0.5px solid #D4D4D2", pointerEvents: "none" }} />
              </div>
              <p style={CAPTION}>
                Presentation view of the exercise — this is what the participant sees before entering the exercise on their device.
              </p>
            </div>

            {/* Redesign vs Current Design */}
            <div style={{ paddingTop: isMobile ? 40 : 80, paddingBottom: 0, display: "flex", flexDirection: "column", gap: 12 }} className="reveal">
              <ImageTabs />
              <p style={CAPTION}>
                Comparison of current and redesigned version of the audience view — what the participant sees on their device. I wanted to keep the layout consistent with what's first displayed. This way the cognitive load and mental effort is reduced, because the layout reflects users' expectations.
              </p>
            </div>

            {/* Process */}
            <div style={{ paddingTop: isMobile ? 60 : 120, paddingBottom: 0 }} className="reveal">
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr", gap: isMobile ? 24 : 40 }}>
                <p style={L}>Process</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <h2 style={H2}>Choosing what to solve and what to{"\u00a0"}set aside</h2>
                    <p style={{ ...BODY, maxWidth: 640 }}>
                      With a clearer picture of the problem space, I defined where to focus — as this
                      was a time-boxed recruitment task intended to take a few hours. I decided to:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {[
                        "Focus on two surfaces: the exercise creation flow for presenters, and the live completion experience for participants.",
                        "Desktop only, to keep interaction decisions tight.",
                        "Free tier constraints, to avoid designing around features that wouldn't be accessible to some users.",
                        "Wooclap's existing design system — not a visual redesign.",
                      ].map((item, i) => (
                        <Bullet key={i}>{item}</Bullet>
                      ))}
                    </div>
                    <p style={{ ...BODY, maxWidth: 640 }}>
                      Everything else — presenter's results view, analytics, edge cases — I noted but
                      set aside. My goal was to design the most shippable solution within realistic constraints.
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <h2 style={H2}>What to call it (and why it{"\u00a0"}matters)</h2>
                    <p style={{ ...BODY, maxWidth: 640 }}>
                      What to call it mattered more than it might seem. The name shapes where the exercise
                      lives in the UI and how users understand it before they&apos;ve even clicked. In the table,
                      you&apos;ll find a list of names I considered — along with their pros and cons. I went
                      with &ldquo;Grouping&rdquo;, as it maps most directly to what the exercise asks participants to do,
                      and differentiates clearly from &ldquo;Matching&rdquo; in the picker.
                    </p>
                    <div style={{ border: "0.5px solid #595959", overflowX: "auto" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 1fr", minWidth: 480 }}>
                        {["Proposition", "Pros", "Cons"].map((h, i) => (
                          <div key={h} style={{ padding: "12px 24px", borderRight: i < 2 ? "0.5px solid #595959" : undefined, borderBottom: "0.5px solid #595959", background: "#f7f7f7" }}>
                            <p style={{ ...LABEL, paddingTop: 0, position: "static" }}>{h}</p>
                          </div>
                        ))}
                        {[
                          { name: "Grouping", bold: true, pros: ["Maps directly to what participants do.", "Differentiates clearly from Matching."], cons: ["Slightly generic, but accurate."] },
                          { name: "Sort", bold: false, pros: ["Short, active."], cons: ["Implies ordering/ranking, not grouping."] },
                          { name: "Categorise", bold: false, pros: ["Familiar, academic framing."], cons: ["Feels formal; less intuitive as an action verb."] },
                          { name: "Classify", bold: false, pros: ["Precise."], cons: ["Heavy and academic; low discoverability."] },
                        ].map((row, i, arr) => (
                          <Fragment key={row.name}>
                            <div style={{ padding: "16px 24px", borderRight: "0.5px solid #595959", borderBottom: i < arr.length - 1 ? "0.5px solid #595959" : undefined }}>
                              <p style={{ fontSize: 15, fontWeight: row.bold ? 600 : 400, lineHeight: 1.55, margin: 0 }}>{row.name}</p>
                            </div>
                            <div style={{ padding: "16px 24px", borderRight: "0.5px solid #595959", borderBottom: i < arr.length - 1 ? "0.5px solid #595959" : undefined }}>
                              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                {row.pros.map((p, j) => <Bullet key={j}>{p}</Bullet>)}
                              </div>
                            </div>
                            <div style={{ padding: "16px 24px", borderBottom: i < arr.length - 1 ? "0.5px solid #595959" : undefined }}>
                              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                {row.cons.map((c, j) => <Bullet key={j}>{c}</Bullet>)}
                              </div>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcomes */}
            <div style={{ ...S, paddingTop: isMobile ? 60 : 120 }} className="reveal">
              <p style={L}>Outcomes</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
                <h2 style={H2}>A proposal built to fit into a{"\u00a0"}real product</h2>
                <p style={BODY}>
                  The proposal covered the full surface: exercise taxonomy, interaction models,
                  presenter configuration, participant experience, and directions for further exploration.
                </p>
                <p style={BODY}>
                  This was a recruitment task, so there are no production metrics to report. The
                  proposal was reviewed by Wooclap's senior product designer and product owner.
                  Their feedback highlighted clear reasoning, strong structural decisions, and clear
                  communication of decisions.
                </p>
                <p style={BODY}>
                  If this shipped, I'd track time spent in the presenter setup flow and return usage rate.
                </p>
                <div style={{ display: "flex", gap: 12, paddingTop: 8 }}>
                  <SecondaryLink href="https://player-shout-10278062.figma.site" label="Prototype — presenter view" />
                  <SecondaryLink href="https://polka-drill-29225007.figma.site" label="Prototype — participant view" />
                </div>
              </div>
            </div>

            {/* Reflections */}
            <div style={{ ...S, paddingTop: 0 }} className="reveal">
              <p style={L}>Reflections</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 640 }}>
                <p style={BODY}>
                  The early scoping decision let me focus on the task more in depth rather than going
                  broadly but small. It's super important when we don't have all the time and I enjoyed
                  seeing how it worked out.
                </p>
                <p style={BODY}>
                  Something I had fun with was exploring naming options. It was interesting to see
                  that what you call a feature, and where it lives in the platform, shapes how people
                  understand it before they clicked it — so it's an important UX question. Getting
                  the taxonomy right was part of defining the concept itself. I'd want to
                  pressure-test "Grouping" with real users early.
                </p>
                <p style={BODY}>
                  One honest note: the participant flow pulled more of my attention upfront, because
                  I noticed more issues with this part of experience. I got to the presenter side,
                  but I had to consciously course-correct to give it the same depth. In a real team
                  context, earlier product or educator input would help calibrate that balance sooner.
                </p>
              </div>
            </div>
          </>
        )}

        {/* See other case studies */}
        <div style={{ paddingBottom: isMobile ? 80 : 160, paddingTop: expanded ? (isMobile ? 24 : 40) : 0 }} className="reveal">
          <h2 style={{ ...H2, marginBottom: 40 }}>See other case studies</h2>
          <CaseStudyGrid cards={[
            { href: "/projects/nn", client: "Nationale Nederlanden", industry: "Insurance", platform: "Desktop", title: "Redesigning the agent experience in an insurance CRM — unified workflows and commission tracking" },
            { href: "/projects/goulash", client: "Goulash", industry: "Food tech", platform: "Mobile", title: "Introducing a way to communicate savings indirectly in a meal planning app" },
          ]} />
        </div>

      </div>
      <Footer />
    </div>
  );
}
