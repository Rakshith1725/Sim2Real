import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, LogIn, Sparkles } from "lucide-react"
import Countdown from "../components/Countdown"
import { EVENT } from "../content/event"
import Logo from "../components/Logo"

const Hero = () => {
  const { scrollY } = useScroll()

  const scale = useTransform(scrollY, [0, 400], [1, 0.8])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <motion.section
      style={{ scale, opacity }}
      id="home"
      className="relative min-h-screen pt-28 text-white"
    >
      <div className="container-max">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase sm:px-4 sm:py-2">
              <Sparkles className="h-4 w-4 text-neon-cyan" />
              {EVENT.org}
            </div>

            <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-7xl">
              Let’s explore the power of{" "}
              <span className="text-glow bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink bg-clip-text text-transparent">
                Robotics
              </span>{" "}
              with{" "}
              <Logo className="inline-flex h-16 md:h-20 LG:h-24" iconColor="#22d3ee" />
              .
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg mx-auto lg:mx-0">
              Compete in simulation, deploy on hardware, and ship a real-world robotics outcome.
              Build with mentors, battle the leaderboard, and showcase on demo day.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a className="btn-primary" href="/#timeline">
                Explore more
                <ArrowRight className="h-4 w-4" />
              </a>
              <a className="btn-ghost" href="/accounts/login/">
                <LogIn className="h-4 w-4" />
                Sign in
              </a>
            </div>

            <div className="mt-6 text-xs text-white/60 sm:text-sm">
              <span className="text-white/80 font-semibold">Fee</span>: {EVENT.registrationFee}
              <span className="mx-3 text-white/20">|</span>
              <span className="text-white/80 font-semibold">Venue</span>: {EVENT.location}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Countdown targetISO={EVENT.registrationDeadlineISO} />

            <div className="mt-5 glass neon-border overflow-hidden p-5">
              <div className="text-xs font-semibold tracking-[0.25em] text-white/60 uppercase">
                Live signal
              </div>
              <div className="inline-flex items-center gap-2">
                <Logo className="h-16 w-auto" iconColor="#22d3ee" />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-neon-lime shadow-[0_0_0_1px_rgba(163,230,53,.25),0_10px_40px_rgba(163,230,53,.14)]" />
                <div className="text-sm text-white/70">
                  Mentors, quizzes, and real-world deployment support during finals.
                </div>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {["Simulate", "Deploy", "Win"].map((t) => (
                  <div key={t} className="glass px-3 py-3">
                    <div className="text-sm font-bold">{t}</div>
                    <div className="mt-1 text-[11px] text-white/60">Phase</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero