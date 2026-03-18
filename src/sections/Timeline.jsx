import { motion } from "framer-motion"
import { Calendar, ChevronRight } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { EVENT } from "../content/event"

const Timeline = () => {
  return (
    <section id="timeline" className="relative py-24 border-t border-white/10">
      <div className="container-max">
        <SectionHeading
          eyebrow="Timeline"
          title="Event schedule"
          description="A clean run from registration to simulation, then a real-world deployment finale."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="glass-strong neon-border overflow-hidden p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
                <Calendar className="h-4 w-4 text-neon-cyan" />
                Event Schedule
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Keep this pinned. Times are in IST and may be updated in announcements.
              </p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-5 space-y-3 text-sm text-white/70">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white/80">Email</span>
                  <a className="hover:text-white" href={`mailto:${EVENT.email}`}>
                    {EVENT.email}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white/80">Fee</span>
                  <span>{EVENT.registrationFee}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white/80">Venue</span>
                  <span className="text-right">{EVENT.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/50 via-white/10 to-neon-pink/40 lg:left-4" />
              <div className="space-y-5">
                {EVENT.schedule.map((s, idx) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: Math.min(0.1 * idx, 0.5) }}
                    className="relative pl-10 lg:pl-12"
                  >
                    <div className="absolute left-3 top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-neon-cyan shadow-glowCyan lg:left-4" />
                    <div className="glass neon-border group overflow-hidden p-5 transition hover:-translate-y-1 hover:shadow-glowViolet">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <div className="text-lg font-bold">{s.title}</div>
                          <div className="mt-1 text-sm text-white/65">{s.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-white/80">{s.date}</div>
                          <div className="mt-1 text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
                            {s.time}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
                        Phase {String(idx + 1).padStart(2, "0")}
                        <ChevronRight className="h-3.5 w-3.5 text-neon-violet" />
                        System ready
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline