import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LogIn, UserPlus, Menu, X } from "lucide-react"
import Logo from "./Logo"

const links = [
  { href: "/#timeline", label: "Time Line" },
  { href: "/#prizes", label: "Prizes" },
  { href: "/#brochure", label: "Brochure" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#queries", label: "Queries" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-ink-950/55 backdrop-blur-xl border-b border-white/10" />
      <div className="container-max relative flex items-center justify-between py-4">

        <a href="/" className="group inline-flex items-center gap-2">
          <Logo className="h-14 w-auto" iconColor="#22d3ee" />
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-white/70">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative transition hover:text-white"
            >
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink transition-all duration-300 group-hover:w-full" />
              {l.label}
            </a>
          ))}
          <a
            href="/sponsor/"
            className="group relative transition hover:text-white"
          >
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink transition-all duration-300 group-hover:w-full" />
            Sponsor Us
          </a>
        </div>

        {/* Desktop auth buttons + Mobile hamburger */}
        <div className="flex items-center gap-2">
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="/accounts/login/"
            className="btn-ghost hidden sm:inline-flex"
          >
            <LogIn className="h-4 w-4" />
            Sign in
          </motion.a>
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="/accounts/signup/"
            className="btn-ghost hidden md:inline-flex"
          >
            <UserPlus className="h-4 w-4" />
            Sign up
          </motion.a>

          {/* Hamburger — visible below lg */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition hover:bg-white/[0.08]"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden relative overflow-hidden border-b border-white/10 bg-ink-950/90 backdrop-blur-2xl"
          >
            <div className="container-max flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/sponsor/"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/[0.06] hover:text-white"
              >
                Sponsor Us
              </a>

              <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="mt-2 flex gap-2">
                <a href="/accounts/login/" onClick={() => setOpen(false)} className="btn-ghost flex-1 justify-center">
                  <LogIn className="h-4 w-4" />
                  Sign in
                </a>
                <a href="/accounts/signup/" onClick={() => setOpen(false)} className="btn-primary flex-1 justify-center">
                  <UserPlus className="h-4 w-4" />
                  Sign up
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar