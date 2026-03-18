import { useRef } from "react"

const MagneticButton = ({ children }) => {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleLeave = () => {
    ref.current.style.transform = "translate(0px,0px)"
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="px-8 py-4 bg-white text-black rounded-xl font-semibold transition"
    >
      {children}
    </button>
  )
}

export default MagneticButton