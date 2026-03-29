import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import { EVENT } from "../content/event"

function encodeMailto(str) {
  return encodeURIComponent(str).replace(/%20/g, "+")
}

export default function Queries() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [institution, setInstitution] = useState("")
  const [message, setMessage] = useState("")

  const mailto = useMemo(() => {
    const subject = `[Sim2Real] Query from ${name || "Visitor"}`
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Institution: ${institution || "-"}`,
      "",
      message || "-",
    ].join("\n")

    return `mailto:${EVENT.email}?subject=${encodeMailto(subject)}&body=${encodeMailto(body)}`
  }, [name, email, institution, message])

  return (
    <section id="queries" className="relative py-24 border-t border-white/10">
      <div className="container-max">
        <SectionHeading
          eyebrow="Queries"
          title="Have questions? Reach out."
          description="Send us your message — we’ll reply on email. (This form opens your email client with the message pre-filled.)"
        />

        <div className="mt-14 grid gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            <div className="glass-strong neon-border p-7 transition-colors hover:shadow-glowCyan/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = mailto
                }}
                className="grid gap-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
                      Name
                    </span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
                      Email
                    </span>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="h-11 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                      placeholder="you@domain.com"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
                    Institution name
                  </span>
                  <input
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="h-11 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                    placeholder="College / University / Org"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold tracking-[0.22em] text-white/55 uppercase">
                    Message
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                    placeholder="Tell us what you’re building or ask a question…"
                  />
                </label>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a className="btn-ghost" href={`mailto:${EVENT.email}`}>
                    <Mail className="h-4 w-4" />
                    {EVENT.email}
                  </a>
                  <motion.button
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary"
                    type="submit"
                  >
                    <Send className="h-4 w-4" />
                    Send query
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

