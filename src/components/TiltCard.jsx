import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Apply spring physics for that heavy, premium feel
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 })

  // Map mouse values (-0.5 to 0.5) to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

  // Subtle 3D lift
  const z = useTransform(mouseXSpring, [-0.5, 0.5], [0, 0]) // You can add translation to Z if needed
  const scale = useSpring(useTransform(x, () => 1.02), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Normalize
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{ perspective: 1200 }}
      className="relative flex items-center justify-center w-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className={`w-full will-change-transform ${className}`}
      >
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
}
