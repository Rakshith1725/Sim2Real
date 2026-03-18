import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LogIn, UserPlus, ShieldCheck } from "lucide-react"
import SectionHeading from "../components/SectionHeading"

function Field({ label, type = "text", value, onChange, placeholder }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        className="h-11 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
        placeholder={placeholder}
      />
    </label>
  )
}

export default function Auth({ initialMode = "signin" }) {
  const [mode, setMode] = useState(initialMode) // "signin" | "signup"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    setMode(initialMode)
  }, [initialMode])

  return (
    <section className="relative py-24 border-t border-white/10">
      <div className="container-max">
        <SectionHeading
          eyebrow="Access"
          title="Sign in / Sign up"
          description="This is a UI-only auth page (no backend wired yet). If you want real auth, tell me what backend you’re using."
        />

        <div className="mt-10 grid gap-6 md:mx-auto md:max-w-xl">
          {mode === "signin" ? (
            <div id="signin" className="glass-strong neon-border p-7">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                  <LogIn className="h-4 w-4 text-neon-cyan" />
                  Sign In
                </div>
                <a className="btn-ghost px-4 py-2" href="/accounts/signup/">
                  <UserPlus className="h-4 w-4" />
                  Sign up
                </a>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-4">
                <Field
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="you@domain.com"
                />
                <Field
                  label="Password"
                  type="password"
                  value={password}
                  onChange={setPassword}
                  placeholder="••••••••"
                />
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary mt-2"
                  type="submit"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Sign in
                </motion.button>
              </form>
            </div>
          ) : (
            <div id="signup" className="glass-strong neon-border p-7">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                  <UserPlus className="h-4 w-4 text-neon-violet" />
                  Sign Up
                </div>
                <a className="btn-ghost px-4 py-2" href="/accounts/login/">
                  <LogIn className="h-4 w-4" />
                  Sign in
                </a>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-4">
                <Field label="Name" value={name} onChange={setName} placeholder="Your name" />
                <Field
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="you@domain.com"
                />
                <Field
                  label="Password"
                  type="password"
                  value={password}
                  onChange={setPassword}
                  placeholder="••••••••"
                />
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary mt-2"
                  type="submit"
                >
                  <UserPlus className="h-4 w-4" />
                  Create account
                </motion.button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

