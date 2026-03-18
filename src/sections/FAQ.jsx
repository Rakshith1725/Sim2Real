import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { EVENT } from "../content/event"

function QA({ q, a, isOpen, onToggle }) {
  return (
    <div className="glass neon-border overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <div className="text-sm font-semibold text-white/85 md:text-base">{q}</div>
        <ChevronDown
          className={
            "h-5 w-5 shrink-0 text-neon-cyan transition " + (isOpen ? "rotate-180" : "rotate-0")
          }
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="px-5 pb-5"
          >
            <div className="text-sm leading-relaxed text-white/70">{a}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-24 border-t border-white/10">
      <div className="container-max">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Quick answers — if you still need help, ping us in the Queries section."
        />

        <div className="mt-14 grid gap-4 md:mx-auto md:max-w-3xl">
          {EVENT.faq.map((f, idx) => (
            <QA
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={open === idx}
              onToggle={() => setOpen((cur) => (cur === idx ? -1 : idx))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

