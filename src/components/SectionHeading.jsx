import { motion } from "framer-motion"
import AnimatedText from "./AnimatedText"

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

      <AnimatedText 
        text={title} 
        className={
          "mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl text-glow bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent " +
          (isCenter ? "justify-center" : "max-w-3xl")
        } 
      />

      {/* Premium 3D Animated Divider */}
      <div className={`mt-6 flex h-px w-full max-w-md items-center bg-gradient-to-r from-transparent via-white/20 to-transparent ${isCenter ? "mx-auto" : ""}`}>
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="h-[2px] w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent shadow-[0_0_15px_#22d3ee]"
        />
      </div>

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

