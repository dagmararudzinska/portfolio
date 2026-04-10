"use client";
import { Fragment, useState } from "react";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import { KDD_INDEX } from "@/lib/styles";
import { ChevronDown, ChevronUp } from "@carbon/icons-react";

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
            Transforming insurance CRM — redesigning the agent experience with clearer workflows and commission tracking
          </h2>
        </section>

        {/* Overview */}
        <div style={SECTION} className="reveal">
          <p style={LABEL}>Overview</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "0.5px solid #595959" }}>
            {[
              {
                label: "Context",
                text: "Nationale Nederlanden is an insurance company. My task was to simplify agents' workflow in K2 — their customer relationship management (CRM) platform.",
              },
              {
                label: "Problem",
                text: "Agents managed clients in one platform and made sales across three others, depending on the insurance type. Each time a sale happened, they had to switch platforms, rewrite data that didn't sync, and manually report outcomes.",
              },
              {
                label: "Process",
                text: "I mapped research onto the actual end-to-end workflow across both platforms and designed a new way of connecting CRM to sales — focusing on lead management, client database, and daily prioritisation.",
              },
              {
                label: "Outcomes",
                text: "The work went through two design iterations and was tested with real insurance agents in usability sessions. The end result was a set of high-quality screen designs and prototypes.",
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
          <div style={{ position: "relative" }}>
            <img
              src="/nn-hero.gif"
              alt="Nationale Nederlanden CRM — starting a sales process"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, border: "0.5px solid #D4D4D2", pointerEvents: "none" }} />
          </div>
          <p style={CAPTION}>
            One of the key enhancements was to allow insurance agents to start sales from their CRM platform. I achieved that by adding a simple icon button in the side menu.
          </p>
        </div>

        {/* Key design decisions */}
        <div style={{ paddingTop: 40, paddingBottom: 120, display: "flex", flexDirection: "column", gap: 24 }} className="reveal">
          <h2 style={H2}>Key design decisions</h2>
          <div style={{ border: "0.5px solid #595959" }}>
            {[
              {
                n: "01",
                title: "Sales entry points in different context",
                text: "I added direct sales entry points in side navigation bar which is always accessible, as well as inside client and lead details so agents can start quotes or policies without losing client context. Thanks to that, they have a quick shortcut to start sales within different workflows.",
              },
              {
                n: "02",
                title: "A sales dashboard that drives action",
                text: "The old dashboard didn't highlight time-sensitive or urgent actions. I redesigned it by adding tagged boxes with different type of urgent actions (like “contact requests” or “problems with payments”) and introducing them in the dashboard as actions to take.",
              },
              {
                n: "03",
                title: "One place for lead details",
                text: "Leads info was scattered across platforms, making agents jump between K2 and sales records, sometimes with mismatched data. I created a unified Leads details and Clients details pages that combine insurance needs, sales status, and next steps.",
              },
              {
                n: "04",
                title: "New component informing about earning predictions on the dashboard",
                text: "Added a section to the agency app dashboard with a summary of sales results in numbers. It presents an approximate commission amount based on an algorithm that analyzes premiums from reported policy sales. Data is dynamically updated based on sales system data, allowing agents to easily view a summary of goal achievement and their estimated sales bonus.",
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
                  <h2 style={H2}>The tools worked, but they weren't connected</h2>
                  <p style={BODY}>
                    The researcher had already run interviews with agents before I joined. I came in
                    at synthesis — mapping what they'd heard onto the actual end-to-end workflow
                    across both platforms. Three friction clusters were identified during synthesis.
                    The following categories of issues caused problems due to the gap between K2 and ONE:
                  </p>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, border: "0.5px solid #595959" }}>
                {[
                  {
                    title: "Integration with sales systems",
                    findings: [
                      "Agents had to leave the CRM to make a sale, which meant losing context. The process required agents to log in to different platforms and enter information that was already known.",
                      "The sales data wasn't automatically sent back to the CRM system, so agents had to make manual reports.",
                      "The agent's commission was not visible, so they never knew exactly how much they would earn.",
                    ],
                  },
                  {
                    title: "Dashboard & navigation",
                    findings: [
                      "The CRM was not the agents' main tool for making decisions.",
                      "The important information was spread across different platforms. There was a lot of switching between different contexts.",
                      "The way the client database was set up didn't match the way people actually worked.",
                    ],
                  },
                  {
                    title: "Lead management",
                    findings: [
                      "The leads did not have useful labels.",
                      "Managers couldn't choose which leads were assigned to which agents.",
                      "The sales funnel didn't have a category for storing leads that might convert in the future.",
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
                sales platform and rewriting client's data.
              </p>
            </div>

            {/* Outcomes */}
            <div style={{ ...SECTION, paddingTop: 120 }} className="reveal">
              <p style={LABEL}>Outcomes</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
                <h2 style={H2}>The work went through two design iterations and was tested with real insurance agents in usability sessions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.55, margin: 0 }}>What shaped the second iteration:</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <Bullet>
                      The sales dashboard showed commission amounts by default. Agents pointed this out quickly — they needed the option to hide it. Commission info is important, but not something that should always be visible. We added visibility controls.
                    </Bullet>
                    <Bullet>
                      The icon used to start a new sale didn't work. We used a similar, but simpler
                      one, which turned out to be more legible.
                    </Bullet>
                    <Bullet>
                      The more important discovery was about what counted as “initiating a sale”.
                      Agents needed this feature not only to issue new policies but also to process
                      policy changes on anniversary dates and as part of sales campaigns. This was
                      the biggest change between versions.
                    </Bullet>
                  </div>
                </div>
                <p style={BODY}>
                  The prototypes were delivered for engineering handoff. The design model established
                  a clear pattern for how K2 and sales engines could operate as a single workflow
                  surface, which set a baseline for future integration work.
                </p>
              </div>
            </div>

            {/* Reflections */}
            <div style={{ ...SECTION, paddingTop: 40 }} className="reveal">
              <p style={LABEL}>Reflections</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={H2}>What I'd track to measure future impact:</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "How long it takes from getting a lead to making a sale",
                      "How many leads are converted into policies",
                      "How many long-term tasks have been completed and how satisfied agents are with the changes",
                    ].map((item, i) => <Bullet key={i}>{item}</Bullet>)}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 40 }}>
                  <h2 style={H2}>Learnings on designing across organisational lines</h2>
                  <p style={BODY}>
                    The friction was mainly a structural problem. Platforms had grown independently
                    because they were built independently. Design can bridge that gap.
                  </p>
                  <p style={BODY}>
                    The other thing worth saying: I came into this project after the research was done.
                    Working from someone else's synthesis means you're always one inference away from
                    misreading it. I mapped it carefully, but the value of having the researcher in
                    the room during design reviews was that they could push back when I'd drifted.
                    That's a collaboration pattern I'd replicate.
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
              title="Helping users find and optimize meal plans based on ingredient discounts and price tiers"
            />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
