import { motion } from "framer-motion"
import Background from "../components/Background"
import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Events from "../sections/Events"
import Timeline from "../sections/Timeline"
import Prizes from "../sections/Prizes"
import Brochure from "../sections/Brochure"
import Testimonials from "../sections/Testimonials"
import FAQ from "../sections/FAQ"
import Queries from "../sections/Queries"
import Footer from "../sections/Footer"

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Timeline />
      <Prizes />
      <Brochure />
      <Testimonials />
      <FAQ />
      <Queries />
      <Footer />
    </motion.div>
  )
}

