import { motion } from "framer-motion"
import Background from "../components/Background"
import Navbar from "../components/Navbar"
import Footer from "../sections/Footer"
import Auth from "../sections/Auth"

export function SignInPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Background />
      <Navbar />
      <div className="pt-28">
        <Auth initialMode="signin" />
      </div>
      <Footer />
    </motion.div>
  )
}

export function SignUpPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Background />
      <Navbar />
      <div className="pt-28">
        <Auth initialMode="signup" />
      </div>
      <Footer />
    </motion.div>
  )
}

