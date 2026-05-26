import { motion } from "framer-motion";
import { MapPin, TrendingUp, PhoneCall, Sparkles } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-[2.5rem] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 60% 30%, oklch(0.78 0.11 85 / 0.18), transparent 60%), radial-gradient(50% 50% at 20% 80%, oklch(0.45 0.07 195 / 0.22), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-5 shadow-elegant sm:p-7"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            hyperlocal · operating system
          </div>
          <div className="text-[10px] font-medium text-primary">LIVE</div>
        </div>

        <div className="mt-5 grid grid-cols-12 gap-4">
          {/* Map */}
          <div className="col-span-12 md:col-span-7 relative overflow-hidden rounded-2xl border border-border/60 bg-cream/60">
            <div className="absolute inset-0 bg-grid opacity-90" />
            <svg viewBox="0 0 400 240" className="relative h-56 w-full sm:h-64">
              {/* roads */}
              <g stroke="oklch(0.45 0.07 195 / 0.35)" strokeWidth="1.2" fill="none">
                <path d="M0 60 H400" />
                <path d="M0 120 H400" />
                <path d="M0 180 H400" />
                <path d="M80 0 V240" />
                <path d="M180 0 V240" />
                <path d="M280 0 V240" />
              </g>
              {/* neighborhood polygon */}
              <path
                d="M90 50 L260 40 L320 130 L240 200 L110 190 Z"
                fill="oklch(0.45 0.07 195 / 0.10)"
                stroke="oklch(0.45 0.07 195 / 0.55)"
                strokeDasharray="4 4"
              />
              {/* pins */}
              {[
                [120, 80], [200, 70], [260, 110], [180, 140], [240, 170], [100, 150],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="10" className="pulse-dot" fill="oklch(0.45 0.07 195 / 0.18)" />
                  <circle cx={x} cy={y} r="4" fill="var(--teal)" />
                </g>
              ))}
              {/* gold target */}
              <g>
                <circle cx="220" cy="115" r="16" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                <circle cx="220" cy="115" r="9" fill="none" stroke="var(--gold)" strokeWidth="1.5" />
                <circle cx="220" cy="115" r="3" fill="var(--gold)" />
              </g>
            </svg>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><MapPin size={12} className="text-primary" /> 14 high-intent ZIPs</span>
              <span className="font-mono text-secondary">+38% lead density</span>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
            {/* Search positions */}
            <div className="rounded-2xl border border-border/60 bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Search Positions
                </span>
                <span className="font-mono text-xs text-primary">10 / 10</span>
              </div>
              <div className="mt-3 grid grid-cols-10 gap-1">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scaleY: 0.2, opacity: 0.4 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                    style={{ transformOrigin: "bottom" }}
                    className={`h-8 rounded-sm ${i < 8 ? "bg-primary" : "bg-accent"}`}
                  />
                ))}
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Paid · Maps · Organic · LSAs · Directories · AI answers
              </p>
            </div>

            {/* Revenue chart */}
            <div className="rounded-2xl border border-border/60 bg-secondary p-4 text-primary-foreground">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                  Revenue Intelligence
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-accent">
                  <TrendingUp size={12} /> +62%
                </span>
              </div>
              <svg viewBox="0 0 220 70" className="mt-2 h-14 w-full">
                <defs>
                  <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                  d="M0 55 C 30 50, 50 48, 70 42 S 110 30, 140 22 S 190 12, 220 6"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="2"
                />
                <path
                  d="M0 55 C 30 50, 50 48, 70 42 S 110 30, 140 22 S 190 12, 220 6 L220 70 L0 70 Z"
                  fill="url(#rev)"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute -left-3 bottom-10 hidden rounded-xl border border-border/70 bg-card/95 px-3 py-2.5 shadow-elegant float-slow sm:flex items-center gap-2"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
            <PhoneCall size={14} />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">AI Intake</div>
            <div className="text-sm font-medium text-secondary">Call qualified · 00:42</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          style={{ animationDelay: "1.5s" }}
          className="absolute -right-3 top-24 hidden rounded-xl border border-border/70 bg-card/95 px-3 py-2.5 shadow-elegant float-slow sm:flex items-center gap-2"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/20 text-secondary">
            <Sparkles size={14} />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">AI Answer</div>
            <div className="text-sm font-medium text-secondary">Featured cited</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
