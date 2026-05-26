import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneOff,
  Wallet,
  Search,
  PhoneCall,
  Target,
  LayoutGrid,
  Globe2,
  Map,
  Network,
  BarChart3,
  Sparkles,
  Check,
  Star,
  Mail,
  ArrowUpRight,
  Compass,
  Database,
  Layers,
  Workflow,
  Building2,
  Award,
} from "lucide-react";

import { SiteHeader } from "@/components/brand/SiteHeader";
import { HeroVisual } from "@/components/brand/HeroVisual";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Hyperlocal Growth Engine | Louis Strategic Consulting" },
      {
        name: "description",
        content:
          "Louis Strategic Consulting helps service businesses build a hyperlocal growth system using AI intake, predictive targeting, dynamic landing pages, SEO, paid media, and revenue intelligence.",
      },
      { property: "og:title", content: "Hyperlocal Growth Engine | Louis Strategic Consulting" },
      {
        property: "og:description",
        content:
          "An integrated growth operating system for home-service and local-service businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Louis Strategic Consulting",
              description:
                "Strategic growth consulting for local and home-service businesses.",
              url: "/",
            },
            {
              "@type": "Service",
              name: "Hyperlocal Growth Engine",
              provider: { "@type": "Organization", name: "Louis Strategic Consulting" },
              serviceType: "Strategic Growth Consulting",
              areaServed: "United States",
              description:
                "An integrated growth operating system combining AI call intake, predictive neighborhood targeting, paid media, dynamic landing pages, local SEO, schema, analytics, and revenue intelligence.",
            },
          ],
        }),
      },
    ],
  }),
});

// ───────────────── helpers ─────────────────
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
      <span className="h-px w-6 bg-primary/60" />
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl text-secondary sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-charcoal/70 md:text-lg">
          {intro}
        </p>
      )}
    </motion.div>
  );
}

// ───────────────── page ─────────────────
function Page() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <System />
        <Framework />
        <RevenueLoop />
        <Deliverables />
        <Packages />
        <Authority />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

// ───────────────── hero ─────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-radial-fade" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-6">
          <motion.div {...fadeUp}>
            <Eyebrow>Hyperlocal Growth Engine</Eyebrow>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="mt-5 font-display text-4xl leading-[1.05] text-secondary sm:text-5xl md:text-6xl"
          >
            Own the local search landscape{" "}
            <span className="text-gradient-gold">before your competitors get the call.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75"
          >
            The Hyperlocal Growth Engine by Louis Strategic Consulting connects AI intake,
            neighborhood-level targeting, dynamic landing pages, paid media, SEO and analytics
            into one revenue-focused operating system for service businesses.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full px-6 shadow-elegant">
              <a href="#contact">
                Book a Growth Review
                <ArrowRight className="ml-1.5" size={16} />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-secondary/20 bg-transparent px-6 text-secondary hover:bg-secondary hover:text-primary-foreground"
            >
              <a href="#framework">View the Framework</a>
            </Button>
          </motion.div>

          <motion.dl
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-6 border-t border-border/70 pt-6"
          >
            {[
              ["10", "position search capture"],
              ["24/7", "lead intake visibility"],
              ["1", "accountable growth system"],
            ].map(([num, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl text-secondary md:text-3xl">{num}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="lg:col-span-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

// ───────────────── problem ─────────────────
function Problem() {
  const items = [
    {
      icon: PhoneOff,
      title: "Missed Calls",
      copy:
        "High-intent demand goes to voicemail. Without an AI front office, qualified jobs slip away before anyone notices.",
    },
    {
      icon: Wallet,
      title: "Wasted Ad Spend",
      copy:
        "Campaigns optimized in isolation overspend on the wrong ZIPs, wrong intent, and wrong times of day.",
    },
    {
      icon: Search,
      title: "Weak Local Authority",
      copy:
        "Fragmented SEO, thin landing pages and missing schema keep brands invisible across the surfaces buyers actually use.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Agency Flaw"
          title={<>Disconnected marketing <span className="text-gradient-gold">leaks revenue.</span></>}
          intro="Most service businesses do not lose growth because one channel is broken. They lose growth because the channels do not talk to each other. One vendor manages ads, another handles SEO, another builds pages, and the front office loses calls in real time."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <it.icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-xl text-secondary">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{it.copy}</p>
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────── system ─────────────────
function System() {
  const pillars = [
    {
      icon: PhoneCall,
      title: "AI Front Office",
      copy:
        "Capture calls, qualify demand, reduce missed opportunities, and identify service patterns as they happen.",
    },
    {
      icon: Target,
      title: "Predictive Neighborhood Targeting",
      copy:
        "Use ZIP-code patterns, property age, job demand, and service history to prioritize the streets most likely to convert.",
    },
    {
      icon: LayoutGrid,
      title: "Dynamic Landing Pages",
      copy:
        "Send high-intent visitors to focused neighborhood and service pages built to convert, measure, and inform future campaigns.",
    },
    {
      icon: Globe2,
      title: "Search Authority Layer",
      copy:
        "Build visibility across paid search, maps, organic rankings, directories, schema, and AI-powered answers.",
    },
  ];

  return (
    <section id="system" className="relative bg-cream/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The System"
          title={<>The Hyperlocal Growth Engine <br className="hidden md:block" /> connects every growth signal.</>}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex items-start gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                  <p.icon size={22} />
                </span>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl text-secondary">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-charcoal/75">
                    {p.copy}
                  </p>
                </div>
              </div>
              <span className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────── framework ─────────────────
function Framework() {
  const positions = [
    "Paid Search",
    "Google Maps",
    "Organic SEO",
    "Local Service Pages",
    "Directory Listings",
    "Retargeting",
    "Review Platforms",
    "AI Answer Engines",
    "Local Content Assets",
    "Brand / Entity Signals",
  ];

  return (
    <section id="framework" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="The Framework"
          title={<>The <span className="text-gradient-gold">10-Position</span> Hyperlocal Domination Framework</>}
          intro="When a homeowner has an urgent need, they do not compare page two. The objective is to create repeated visibility across the first-page ecosystem until the brand becomes the obvious choice."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          {/* Diagram */}
          <motion.div {...fadeUp} className="lg:col-span-6">
            <Diagram positions={positions} />
          </motion.div>

          {/* List */}
          <div className="lg:col-span-6">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {positions.map((p, i) => (
                <motion.li
                  key={p}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="group flex items-center gap-3 rounded-xl border border-border/70 bg-card px-4 py-3.5 transition-colors hover:border-accent/60"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-secondary font-mono text-[11px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-secondary">{p}</span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Diagram({ positions }: { positions: string[] }) {
  const R = 150;
  const cx = 200;
  const cy = 200;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--teal)" stopOpacity="0.05" />
          </radialGradient>
        </defs>
        {/* concentric rings */}
        {[60, 110, 160].map((r) => (
          <circle
            key={r}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="oklch(0.45 0.07 195 / 0.18)"
            strokeDasharray="2 4"
          />
        ))}
        {/* slow rotating orbit ring */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 200px" }}
        >
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="oklch(0.78 0.11 85 / 0.35)" strokeWidth="1" />
          <circle cx={cx + R} cy={cy} r="3" fill="var(--gold)" />
        </motion.g>
        {/* core */}
        <circle cx={cx} cy={cy} r="46" fill="url(#core)" />
        <circle cx={cx} cy={cy} r="46" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
        <text
          x={cx}
          y={cy - 2}
          textAnchor="middle"
          className="fill-current text-secondary"
          style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600 }}
        >
          Hyperlocal
        </text>
        <text
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          className="fill-current text-muted-foreground"
          style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase" }}
        >
          Engine
        </text>
        {/* nodes */}
        {positions.map((label, i) => {
          const angle = (i / positions.length) * Math.PI * 2 - Math.PI / 2;
          const x = cx + Math.cos(angle) * R;
          const y = cy + Math.sin(angle) * R;
          return (
            <g key={label}>
              <line x1={cx} y1={cy} x2={x} y2={y} stroke="oklch(0.45 0.07 195 / 0.2)" strokeWidth="0.8" />
              <circle cx={x} cy={y} r="14" fill="var(--card)" stroke="var(--teal)" strokeWidth="1.2" />
              <text
                x={x}
                y={y + 3.5}
                textAnchor="middle"
                style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600 }}
                className="fill-current text-secondary"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ───────────────── revenue loop ─────────────────
function RevenueLoop() {
  const steps = [
    { icon: PhoneCall, label: "AI Intake", copy: "Capture and qualify every inbound conversation." },
    { icon: Database, label: "Demand Signals", copy: "Transform calls and clicks into structured insight." },
    { icon: Target, label: "Predictive Targeting", copy: "Prioritize the neighborhoods most likely to convert." },
    { icon: LayoutGrid, label: "Landing Pages", copy: "Match intent with focused, measurable pages." },
    { icon: Workflow, label: "Campaign Optimization", copy: "Reallocate spend toward proven revenue." },
    { icon: Globe2, label: "Search Authority", copy: "Compound visibility across the first-page ecosystem." },
    { icon: BarChart3, label: "Revenue Intelligence", copy: "Close the loop with revenue-level reporting." },
  ];

  return (
    <section className="relative bg-secondary py-24 text-primary-foreground md:py-32">
      <div aria-hidden className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage:
          "radial-gradient(oklch(1 0 0 / 0.6) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }} />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-6 bg-accent/60" />
            Revenue Intelligence Loop
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            One continuous loop, from the first ring to the closed job.
          </h2>
        </div>

        <div className="relative mt-16">
          {/* connector line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent to-transparent md:block"
          />
          <ol className="grid gap-8 md:grid-cols-7 md:gap-3">
            {steps.map((s, i) => (
              <motion.li
                key={s.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full border border-accent/40 bg-secondary text-accent">
                  <s.icon size={20} />
                </span>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-1 font-display text-lg text-white">{s.label}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/65">{s.copy}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ───────────────── deliverables ─────────────────
function Deliverables() {
  const items = [
    "Growth audit and opportunity map",
    "Tracking architecture for GA4, GTM, and heatmaps",
    "AI call-intake and conversion workflow",
    "Hyperlocal paid media strategy",
    "Neighborhood landing page roadmap",
    "SEO knowledge web and internal linking map",
    "Schema and entity-authority recommendations",
    "Monthly optimization plan tied to revenue outcomes",
  ];

  return (
    <section id="deliverables" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Deliverables"
            title={<>What Louis Strategic Consulting <span className="text-gradient-gold">builds with you.</span></>}
            intro="A disciplined, sequenced engagement. Each deliverable feeds the next and ladders directly to qualified revenue."
          />
          <div className="mt-8 flex items-center gap-3">
            <Compass size={18} className="text-primary" />
            <span className="text-sm text-charcoal/70">
              Fractional Chief Growth Officer · single point of accountability
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-border/70 overflow-hidden rounded-2xl border border-border/70 bg-card">
            {items.map((item, i) => (
              <motion.li
                key={item}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-cream/60"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent/15 text-secondary ring-1 ring-accent/40">
                  <Check size={16} />
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[15px] text-secondary">{item}</span>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-primary"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ───────────────── packages ─────────────────
function Packages() {
  const packages = [
    {
      name: "Foundation Sprint",
      label: "Clarify the growth system",
      best:
        "Businesses that need strategy, tracking, positioning, and a prioritized execution roadmap.",
      includes: [
        "Growth audit",
        "Funnel review",
        "Tracking plan",
        "Market opportunity map",
        "30-day action roadmap",
      ],
      cta: "Start with Foundation",
      featured: false,
    },
    {
      name: "Market Capture",
      label: "Build the operating system",
      best:
        "Businesses ready to unify paid media, SEO, intake, landing pages, and analytics.",
      includes: [
        "Channel strategy",
        "Landing page direction",
        "Knowledge web plan",
        "Campaign roadmap",
        "Weekly growth review",
      ],
      cta: "Discuss Market Capture",
      featured: true,
    },
    {
      name: "Hyperlocal Domination",
      label: "Scale authority and demand",
      best:
        "Operators seeking deeper partnership, aggressive market capture, and revenue-aligned strategy.",
      includes: [
        "10-position framework",
        "AI intake strategy",
        "Predictive targeting",
        "Multi-market roadmap",
        "Revenue-aligned advisory structure",
      ],
      cta: "Explore Partner Model",
      featured: false,
    },
  ];

  return (
    <section id="packages" className="relative bg-cream/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Engagements"
          title={<>Strategy-led engagements, <span className="text-gradient-gold">priced to outcomes.</span></>}
          intro="Three entry points into the Hyperlocal Growth Engine. Each is custom-scoped to the operator's market, capacity, and revenue goals."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.article
              key={p.name}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-2xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                p.featured
                  ? "border-accent/60 ring-1 ring-accent/30 shadow-elegant"
                  : "border-border/70"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent">
                  <Star size={12} className="fill-accent text-accent" /> Recommended
                </span>
              )}
              <h3 className="font-display text-2xl text-secondary">{p.name}</h3>
              <p className="mt-1 text-sm text-primary">{p.label}</p>
              <div className="my-6 gold-divider" />
              <p className="text-sm leading-relaxed text-charcoal/70">
                <span className="font-medium text-secondary">Best for:</span> {p.best}
              </p>
              <ul className="mt-6 space-y-3">
                {p.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-[14px] text-charcoal/85">
                    <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                    {inc}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border/70">
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Investment
                </div>
                <div className="mt-1 font-display text-xl text-secondary">
                  Custom Engagement
                </div>
                <Button
                  asChild
                  className={`mt-5 w-full rounded-full ${
                    p.featured
                      ? ""
                      : "bg-secondary text-primary-foreground hover:bg-secondary/90"
                  }`}
                >
                  <a href="#contact">
                    {p.cta} <ArrowRight size={15} className="ml-1" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────── authority ─────────────────
function Authority() {
  const badges = [
    {
      icon: Layers,
      title: "HubSpot",
      items: ["Inbound", "Digital Marketing", "Social", "Email", "Sales", "Content Marketing"],
    },
    {
      icon: Network,
      title: "Google Ads",
      items: ["Search", "Display", "Shopping"],
    },
    {
      icon: Map,
      title: "Semrush",
      items: ["Local SEO", "Keyword Research", "AI Search", "Off-Page SEO", "Content Marketing"],
    },
  ];

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Authority"
          title={<>Certified across the channels that <span className="text-gradient-gold">drive modern local growth.</span></>}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-accent">
                  <Award size={20} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Certified
                  </div>
                  <h3 className="font-display text-xl text-secondary">{b.title}</h3>
                </div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {b.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border/70 bg-cream/60 px-3 py-1 text-[12px] text-charcoal/80"
                  >
                    {it}
                  </li>
                ))}
              </ul>
              <span className="absolute inset-x-7 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────── faq ─────────────────
function FAQ() {
  const items = [
    {
      q: "Is this a marketing agency package?",
      a: "No. This is a strategic growth system. Louis Strategic Consulting can coordinate execution, guide existing teams, or bring in specialists, but the focus is unified growth architecture and accountability.",
    },
    {
      q: "Who is this built for?",
      a: "Home-service and local-service businesses that need stronger local visibility, better lead capture, clearer tracking, and a repeatable growth system.",
    },
    {
      q: "Do we need existing marketing assets?",
      a: "No. The engagement can start with an audit and roadmap, then move into landing pages, tracking, campaigns, and authority building.",
    },
    {
      q: "How is success measured?",
      a: "Success is measured through qualified lead flow, booked calls, conversion rate, search visibility, cost per acquisition, and revenue intelligence.",
    },
    {
      q: "Can this work with our current vendors?",
      a: "Yes. The system can align current vendors around a unified strategy or identify where execution gaps need to be filled.",
    },
  ];
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Questions from <span className="text-gradient-gold">serious operators.</span></>}
            intro="Clarity before commitment. If your question isn't here, ask it directly."
          />
          <Button asChild variant="outline" className="mt-6 rounded-full border-secondary/20 text-secondary">
            <a href="#contact">
              <Mail size={15} className="mr-1.5" /> Ask Louis directly
            </a>
          </Button>
        </div>
        <div className="lg:col-span-7">
          <Accordion type="single" collapsible className="w-full">
            {items.map((it, i) => (
              <AccordionItem
                key={it.q}
                value={`item-${i}`}
                className="border-border/70"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg text-secondary hover:no-underline">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-charcoal/75">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// ───────────────── final cta ─────────────────
function FinalCTA() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32 lg:px-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border/70 bg-secondary p-10 text-primary-foreground shadow-elegant md:p-16">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 0%, oklch(0.78 0.11 85 / 0.25), transparent 60%), radial-gradient(50% 50% at 100% 100%, oklch(0.45 0.07 195 / 0.35), transparent 60%)",
          }}
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-6 bg-accent/60" />
              Begin
            </div>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
              Ready to turn local demand into a{" "}
              <span className="shimmer-gold">controlled growth system?</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Start with a focused growth review. Identify the largest revenue leak, the
              strongest market opportunity, and the first move toward hyperlocal domination.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-6 text-secondary hover:bg-accent/90"
            >
              <a href="/contact">
                Book a Growth Review <ArrowRight size={16} className="ml-1.5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href="mailto:hello@louisstrategic.com">
                <Mail size={16} className="mr-1.5" /> Email Louis Strategic Consulting
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────── footer ─────────────────
function Footer() {
  const cols = [
    { title: "Explore", links: [["Services", "/services"], ["Industries", "/industries"], ["Locations", "/locations"]] },
    { title: "System", links: [["Framework", "/framework"], ["Deliverables", "#deliverables"], ["Packages", "#packages"]] },
    { title: "Connect", links: [["Contact", "/contact"], ["Book Review", "#contact"], ["Email", "mailto:hello@louisstrategic.com"]] },
  ];
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-charcoal/70">
              A fractional growth partner building integrated, data-driven growth systems for
              home-service and local-service operators.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Building2 size={14} /> Available across North America
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {c.title}
              </div>
              <ul className="mt-4 space-y-3">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-secondary transition-colors hover:text-primary">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="lg:col-span-1" />
        </div>

        <div className="mt-12 hairline" />
        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Louis Strategic Consulting. All rights reserved.</p>
          <p className="italic">
            Strategic growth consulting for local and home-service businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
