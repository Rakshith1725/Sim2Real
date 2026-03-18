import { motion } from "framer-motion"
import { Crown, Medal, Trophy } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { EVENT } from "../content/event"

const icons = {
  "First Place": Crown,
  "Second Place": Medal,
  "Third Place": Trophy,
}

export default function Prizes() {
  return (
    <section id="prizes" className="relative py-24 border-t border-white/10">
      <div className="container-max">
        <SectionHeading
          eyebrow="Prizes"
          title="Exciting prizes await."
          description="Stay tuned for detailed prize values and additional categories."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EVENT.prizes.map((p, idx) => {
            const Icon = icons[p.place] ?? Trophy
            const accent =
              idx === 0
                ? "from-neon-cyan via-neon-violet to-neon-pink"
                : idx === 1
                  ? "from-neon-violet via-neon-cyan to-neon-lime"
                  : "from-neon-pink via-neon-violet to-neon-cyan"

            return (
              <motion.div
                key={p.place}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: Math.min(0.1 * idx, 0.3) }}
                className="glass-strong neon-border group relative overflow-hidden p-7"
              >
                <div className="absolute inset-0 opacity-70">
                  <div className={"absolute inset-0 bg-gradient-to-br " + accent + " opacity-[0.10]"} />
                  <div className="absolute -inset-28 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
                      Tier {String(idx + 1).padStart(2, "0")}
                    </div>
                    <Icon className="h-6 w-6 text-neon-cyan" />
                  </div>

                  <div className="mt-5 text-2xl font-extrabold">{p.place}</div>
                  <div className="mt-2 text-sm text-white/70">{p.reward}</div>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="mt-6 flex items-center justify-between text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
                    <span>Leaderboard</span>
                    <span className="text-neon-cyan">Live</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

