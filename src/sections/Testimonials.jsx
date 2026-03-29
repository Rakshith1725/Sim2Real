import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { EVENT } from "../content/event"

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 border-t border-white/10">
      <div className="container-max">
        <SectionHeading
          eyebrow="Testimonials"
          title="Hear from our innovators."
          description="What past participants and mentors say about the Sim2Real experience."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {EVENT.testimonials.map((t, idx) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: Math.min(0.1 * idx, 0.2), type: "spring", stiffness: 80, damping: 12 }}
              whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
              className="glass-strong neon-border relative overflow-hidden p-7 transition-colors hover:shadow-glowViolet"
            >
              <div className="absolute inset-0 opacity-70">
                <div className="absolute -inset-20 bg-[radial-gradient(circle_at_20%_10%,rgba(167,139,250,0.18),transparent_55%)]" />
              </div>
              <div className="relative">
                <Quote className="h-6 w-6 text-neon-cyan" />
                <blockquote className="mt-4 text-base leading-relaxed text-white/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-white/60">
                  <span className="font-semibold text-white/80">— {t.author}</span>
                  {t.role ? <span className="ml-2">· {t.role}</span> : null}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

