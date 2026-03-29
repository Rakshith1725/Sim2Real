import { motion } from "framer-motion"
import { MapPin, Mail } from "lucide-react"
import { EVENT } from "../content/event"
import Logo from "../components/Logo"

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="container-max">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <Logo className="h-16 w-auto" iconColor="#22d3ee" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Empowering the next generation of robotics through immersive education and a competitive sim-to-real challenge.
            </p>
          </div>

          <div className="md:col-span-7 md:justify-self-end">
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.a
                whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                className="glass neon-border flex items-start gap-3 p-4 transition-colors hover:shadow-glowCyan"
                href={`mailto:${EVENT.email}`}
              >
                <Mail className="mt-0.5 h-5 w-5 text-neon-cyan" />
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <div className="mt-1 text-sm text-white/65">{EVENT.email}</div>
                </div>
              </motion.a>
              <motion.div 
                whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                className="glass neon-border flex items-start gap-3 p-4 transition-colors hover:shadow-glowViolet"
              >
                <MapPin className="mt-0.5 h-5 w-5 text-neon-violet" />
                <div>
                  <div className="text-sm font-semibold">Location</div>
                  <div className="mt-1 text-sm text-white/65">{EVENT.location}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-8 text-xs text-white/55 md:justify-between">
          <div>© {new Date().getFullYear()} {EVENT.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#timeline">Event Schedule</a>
            <a className="hover:text-white" href="#prizes">Prizes</a>
            <a className="hover:text-white" href="#queries">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

