import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const addHover = () => setHovering(true)
    const removeHover = () => setHovering(false)

    const elements = document.querySelectorAll("button, a")

    elements.forEach(el => {
      el.addEventListener("mouseenter", addHover)
      el.addEventListener("mouseleave", removeHover)
    })

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)

      elements.forEach(el => {
        el.removeEventListener("mouseenter", addHover)
        el.removeEventListener("mouseleave", removeHover)
      })
    }
  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: hovering ? 2 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
    />
  )
}

export default Cursor