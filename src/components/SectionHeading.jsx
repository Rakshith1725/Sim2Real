import { motion } from "framer-motion"

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const isCenter = align === "center"

  return (
    <div className={isCenter ? "text-center" : ""}>
      {eyebrow ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className={
            "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase"
          }
        >
          <span className="h-2 w-2 rounded-full bg-neon-cyan shadow-glowCyan" />
          {eyebrow}
        </motion.div>
      ) : null}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className={
          "mt-5 text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl " +
          (isCenter ? "" : "max-w-3xl")
        }
      >
        <span className="text-glow">{title}</span>
      </motion.h2>

      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className={
            "mt-4 text-sm leading-relaxed text-white/70 md:text-base " +
            (isCenter ? "mx-auto max-w-2xl" : "max-w-2xl")
          }
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  )
}

