import Galaxy from "./Galaxy/Galaxy"

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      <div className="absolute inset-0">
        <Galaxy
          starSpeed={1.2}
          density={1}
          hueShift={115}
          speed={1}
          glowIntensity={0.3}
          saturation={0}
          mouseRepulsion
          twinkleIntensity={0.5}
          rotationSpeed={0.35}
          transparent
          mouseInteraction={true}
          repulsionStrength={0.15}
        />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/20 via-transparent to-ink-950/55" />
        <div className="absolute inset-0 noise" />
      </div>
    </div>
  )
}

export default Background