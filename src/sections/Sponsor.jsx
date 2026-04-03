import { motion } from "framer-motion"
import { Handshake, Award, Search, Zap, Mail, Phone, ExternalLink } from "lucide-react"
import SectionHeading from "../components/SectionHeading"
import TiltCard from "../components/TiltCard"
import { EVENT } from "../content/event"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12 } }
}

export default function Sponsor() {
  const mailTo = `mailto:${EVENT.email}`

  const WhySponsor = [
    {
      title: "Brand Visibility",
      desc: "Showcase your brand to a targeted audience of students, faculty, and industry professionals in robotics and UAVs.",
      icon: Search,
      color: "text-neon-cyan"
    },
    {
      title: "Recruitment Opportunities",
      desc: "Connect with the future leaders of the tech industry and recruit top-tier talent from leading universities.",
      icon: Handshake,
      color: "text-neon-violet"
    },
    {
      title: "Drive Innovation",
      desc: "Support the translation of simulation breakthroughs into tangible, real-world robotics solutions.",
      icon: Zap,
      color: "text-neon-pink"
    }
  ]

  const Packages = [
    {
      name: "Silver",
      price: "₹50,000",
      features: [
        "Logo on our website",
        "Grouped social media mention",
        "Access to participant resume book"
      ],
      color: "border-white/10"
    },
    {
      name: "Gold",
      price: "₹1,00,000",
      features: [
        "Logo on marketing materials & website",
        "Social media mentions",
        "Access to participant resume book",
        "Booth at our finals event"
      ],
      color: "border-neon-cyan/40 shadow-glowCyan",
      featured: true
    },
    {
      name: "Platinum",
      price: "₹2,00,000",
      features: [
        "Keynote speaking opportunity",
        "Premium logo placement",
        "Dedicated social media campaign",
        "Branded challenge in competition",
        "Full access to participant resume book",
        "Prime booth at our finals event"
      ],
      color: "border-neon-violet/40 shadow-glowViolet"
    }
  ]

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Content */}
      <section id="sponsor-hero" className="container-max pt-10">
        <div className="max-w-4xl">
          <SectionHeading
            eyebrow="Sponsor Us"
            title="Partner with the Future of Robotics"
            description="Join us in shaping the next generation of robotics innovators. The Sim2Real Robotics Competition is where cutting-edge simulation meets real-world application."
          />
          <div className="mt-8">
            <motion.a 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }} 
              className="btn-primary" 
              href="#packages"
            >
              View Sponsorship Packages
            </motion.a>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section id="why-sponsor" className="container-max">
        <h2 className="text-2xl font-black mb-10 tracking-tight">Why Sponsor Sim2Real?</h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {WhySponsor.map((f, i) => (
            <motion.div 
              key={i} 
              variants={item} 
              className="w-full h-full"
            >
              <TiltCard>
                <div className="w-full h-full glass neon-border p-8 hover:shadow-glowCyan transition-colors duration-300 pointer-events-none">
                  <f.icon className={`h-8 w-8 ${f.color} mb-6`} />
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="container-max scroll-mt-28">
        <h2 className="text-2xl font-black mb-10 tracking-tight">Sponsorship Packages</h2>
        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {Packages.map((pkg, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="w-full h-full"
            >
              <TiltCard className="w-full h-full">
                <div className={`w-full h-full glass relative overflow-hidden flex flex-col p-8 border transition-colors ${pkg.color} ${pkg.featured ? 'bg-white/[0.06] z-10 hover:shadow-glowCyan' : 'hover:shadow-glowCyan/50'}`}>
                  {pkg.featured && (
                    <div className="absolute top-0 right-0 bg-neon-cyan px-4 py-1 text-[10px] font-black uppercase text-black tracking-widest pointer-events-none">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6 pointer-events-none">
                    <div className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-1">{pkg.name}</div>
                    <div className="text-3xl font-black text-white">{pkg.price}</div>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow pointer-events-none">
                    {pkg.features.map((feat, j) => (
                      <li key={j} className="flex gap-3 text-sm text-white/70">
                        <Award className="h-5 w-5 flex-shrink-0 text-neon-cyan opacity-50" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <motion.a 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.98 }} 
                    className={`w-full py-4 rounded-xl text-center text-sm font-bold transition-all relative z-20 ${pkg.featured ? 'btn-primary text-black' : 'bg-white/10 hover:bg-white/20'}`}
                    href="#contact"
                  >
                    Become a {pkg.name} Sponsor
                  </motion.a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className="container-max">
        <div className="glass neon-border p-10 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Handshake size={150} />
          </div>
          <div className="relative max-w-3xl">
            <h2 className="text-2xl font-black mb-6 tracking-tight">What Our Sponsors Say</h2>
            <blockquote className="text-xl font-medium leading-relaxed italic text-white/90 mb-8">
              "Congratulations to all the winners and organizers! As an official Cloud Partner, Niveus is proud to collaborate with top academic institutions in building the future of technology."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet" />
              <div>
                <div className="font-bold text-white">Ms. Nisha</div>
                <div className="text-sm text-white/50">Head of Marketing, Niveus Solutions</div>
              </div>
              <a 
                href="https://www.linkedin.com/posts/niveus-solutions_..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-2 text-xs font-semibold text-neon-cyan hover:underline"
              >
                <ExternalLink size={14} />
                View on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container-max scroll-mt-28">
        <div className="glass neon-border p-10 text-center">
          <h2 className="text-3xl font-black mb-4 tracking-tight">Ready to Make an Impact?</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Contact us to discuss sponsorship opportunities or to create a custom package that aligns with your company's goals.
          </p>
          <motion.div 
            className="grid gap-6 md:grid-cols-2 max-w-lg mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.a 
              href={mailTo} 
              variants={item}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
              className="flex flex-col items-center p-6 glass transition-colors border border-white/5 group hover:shadow-glowCyan"
            >
              <Mail className="h-8 w-8 text-neon-cyan mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-bold mb-1">Email Us</div>
              <div className="text-xs text-white/50">{EVENT.email}</div>
            </motion.a>
            <motion.a 
              href="tel:+918123985320" 
              variants={item}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
              className="flex flex-col items-center p-6 glass transition-colors border border-white/5 group hover:shadow-glowViolet"
            >
              <Phone className="h-8 w-8 text-neon-violet mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-bold mb-1">Call Us</div>
              <div className="text-xs text-white/50">+91 8123985320</div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
