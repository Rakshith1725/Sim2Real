import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"

function clamp(n) {
  return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0
}

function splitMs(ms) {
  const s = clamp(ms / 1000)
  const days = clamp(s / (3600 * 24))
  const hours = clamp((s % (3600 * 24)) / 3600)
  const minutes = clamp((s % 3600) / 60)
  const seconds = clamp(s % 60)
  return { days, hours, minutes, seconds }
}

function Tile({ label, value, accent = "cyan" }) {
  const glow =
    accent === "pink"
      ? "shadow-glowPink"
      : accent === "violet"
        ? "shadow-glowViolet"
        : "shadow-glowCyan"

  const bar =
    accent === "pink"
      ? "from-neon-pink/70 via-neon-violet/40 to-transparent"
      : accent === "violet"
        ? "from-neon-violet/70 via-neon-cyan/40 to-transparent"
        : "from-neon-cyan/70 via-neon-violet/40 to-transparent"

  return (
    <div className={"glass neon-border relative overflow-hidden px-4 py-4 " + glow}>
      <div className={"absolute inset-x-0 top-0 h-px bg-gradient-to-r " + bar} />
      <div className="text-[11px] font-semibold tracking-[0.25em] text-white/60 uppercase">
        {label}
      </div>
      <div className="mt-2 text-3xl font-bold tabular-nums md:text-4xl">{value}</div>
    </div>
  )
}

export default function Countdown({ targetISO }) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(id)
  }, [])

  const remaining = Math.max(0, target - now)
  const { days, hours, minutes, seconds } = splitMs(remaining)
  const ended = remaining <= 0

  return (
    <div className="glass-strong neon-border relative overflow-hidden p-5 md:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -inset-20 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_55%)]" />
        <div className="absolute -inset-20 bg-[radial-gradient(circle_at_70%_60%,rgba(251,113,133,0.16),transparent_55%)]" />
      </div>

      <div className="relative flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold tracking-[0.25em] text-white/60 uppercase">
            Registration ends in
          </div>
          <div className="mt-2 text-sm text-white/70">
            {ended ? "Countdown ended — see updates in the timeline." : "Lock in your spot before the timer hits zero."}
          </div>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
        <Tile label="Days" value={String(days).padStart(2, "0")} accent="cyan" />
        <Tile label="Hours" value={String(hours).padStart(2, "0")} accent="violet" />
        <Tile label="Minutes" value={String(minutes).padStart(2, "0")} accent="pink" />
        <Tile label="Seconds" value={String(seconds).padStart(2, "0")} accent="cyan" />
      </div>
    </div>
  )
}

