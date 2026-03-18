import { Cpu, Bot, Brain, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "../components/SectionHeading"

const data = [
  { title: "AI / ML", icon: Brain, desc: "Perception, planning, and learning-driven control." },
  { title: "Robotics", icon: Bot, desc: "Kinematics, navigation, manipulation, autonomy." },
  { title: "Simulation", icon: Cpu, desc: "Sim stacks, domain randomization, evaluation." },
  { title: "Challenge Mode", icon: Trophy, desc: "Score-focused runs, leaderboards, finals." },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
}

const Events = () => {
  return (
    <section id="tracks" className="relative py-24 border-t border-white/10">
      <div className="container-max">
        <SectionHeading
          eyebrow="Tracks"
          title="Choose your build path."
          description="Pick a track (or blend them) and push your robot from sim to real with measurable performance."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {data.map((e) => {
            const Icon = e.icon
            return (
              <motion.div
                key={e.title}
                variants={item}
                className="glass neon-border group relative overflow-hidden p-6 transition hover:-translate-y-2 hover:shadow-glowCyan"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-16 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_55%)]" />
                </div>
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-neon-cyan" />
                  </div>
                  <div className="mt-4 text-lg font-bold">{e.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/70">{e.desc}</div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Events