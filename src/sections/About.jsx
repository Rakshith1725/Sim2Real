import { motion } from "framer-motion"
import { Atom, Cpu, Bot, Trophy } from "lucide-react"
import SectionHeading from "../components/SectionHeading"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
}

const About = () => {
  return (
    <section id="about" className="relative py-24 border-t border-white/10">
      <div className="container-max">
        <SectionHeading
          eyebrow="About"
          title="A competition built for real robots."
          description="Sim2Real is a robotics challenge that starts in simulation and ends in the real world. The goal is to bridge strong algorithms with practical deployment — with mentorship and a showcase finale."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              title: "Simulation-first",
              desc: "Start in a controlled sim stack, iterate fast, validate metrics.",
              Icon: Atom,
              glow: "shadow-glowViolet",
            },
            {
              title: "Hardware deploy",
              desc: "Transition to real robots with mentorship and test support.",
              Icon: Bot,
              glow: "shadow-glowCyan",
            },
            {
              title: "Workshops",
              desc: "Hands-on sessions to bridge theory to real integration.",
              Icon: Cpu,
              glow: "shadow-glowViolet",
            },
            {
              title: "Awards & showcase",
              desc: "Present outcomes, win prizes, and build your network.",
              Icon: Trophy,
              glow: "shadow-glowPink",
            },
          ].map(({ title, desc, Icon, glow }) => (
            <motion.div
              key={title}
              variants={item}
              className={"glass neon-border group relative overflow-hidden p-6 transition will-change-transform hover:-translate-y-2 " + glow}
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -inset-20 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_55%)]" />
                <div className="absolute -inset-20 bg-[radial-gradient(circle_at_80%_70%,rgba(251,113,133,0.12),transparent_55%)]" />
              </div>
              <div className="relative">
                <Icon className="h-6 w-6 text-neon-cyan" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About