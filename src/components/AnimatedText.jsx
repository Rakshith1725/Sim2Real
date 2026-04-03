import { motion } from "framer-motion"

export default function AnimatedText({ text, className = "", staggerDelay = 0.05 }) {
  // Split text into words
  const words = typeof text === "string" ? text.split(" ") : [text]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 100,
        mass: 1
      },
    },
    hidden: {
      opacity: 0,
      y: 60,
      rotate: 5,
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden mr-[0.25em] inline-block">
          <motion.span variants={child} className="inline-block origin-bottom">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
