import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      const isInteractive = e.target.closest("button, a, input, textarea, [role='button']")
      setHovering(!!isInteractive)
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: hovering ? 2.5 : 1,
        opacity: position.x === -100 ? 0 : 1
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
    >
      <div className="w-full h-full bg-white rounded-full opacity-100" />
    </motion.div>
  )
}

export default Cursor