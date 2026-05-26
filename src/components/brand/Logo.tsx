type Props = { className?: string; mark?: boolean };

export function Logo({ className = "h-9 w-auto", mark = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Louis Strategic Consulting">
      <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" aria-hidden="true">
        {/* House outline */}
        <path
          d="M8 22L24 8L40 22V40C40 41.1046 39.1046 42 38 42H10C8.89543 42 8 41.1046 8 40V22Z"
          stroke="var(--teal)"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        {/* Gold upward arrow */}
        <path
          d="M17 33L24 24L31 33"
          stroke="var(--gold)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 24V40"
          stroke="var(--gold)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      {!mark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-semibold tracking-tight text-secondary">
            Louis
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Strategic Consulting
          </span>
        </span>
      )}
    </span>
  );
}
