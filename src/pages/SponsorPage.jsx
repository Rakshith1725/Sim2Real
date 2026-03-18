import { motion } from "framer-motion"
import Background from "../components/Background"
import Navbar from "../components/Navbar"
import Sponsor from "../sections/Sponsor"
import Footer from "../sections/Footer"

export default function SponsorPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Background />
      <Navbar />
      <div className="pt-28">
        <Sponsor />
      </div>
      <Footer />
    </motion.div>
  )
}

