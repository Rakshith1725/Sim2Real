import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import SectionHeading from "../components/SectionHeading"

export default function Brochure() {
  return (
    <section id="brochure" className="relative py-24 border-t border-white/10">
      <div className="container-max">
        <SectionHeading
          eyebrow="Brochure"
          title="Get the full rulebook."
          description="Download the competition guidelines, speaker list, and everything you need to get started."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 glass-strong neon-border overflow-hidden"
        >
          <div className="relative grid gap-6 p-7 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                <FileText className="h-4 w-4 text-neon-cyan" />
                Sim2Real Event Brochure
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Place your brochure file at <span className="font-semibold text-white/80">`public/brochure.pdf`</span>{" "}
                and this button will serve it instantly.
              </p>
            </div>

            <div className="md:col-span-4 text-center md:text-left md:justify-self-end">
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full md:w-auto"
                href="/brochure.pdf"
              >
                <Download className="h-4 w-4" />
                Download brochure
              </motion.a>
              <div className="mt-3 text-xs text-white/50">
                If you don’t have it yet, keep this section for launch day.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

