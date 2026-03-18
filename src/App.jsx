import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SponsorPage from "./pages/SponsorPage"
import { SignInPage, SignUpPage } from "./pages/AuthPages"

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      return
    }
    const id = hash.replace("#", "")
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/sponsor/" element={<SponsorPage />} />

        <Route path="/accounts/login" element={<SignInPage />} />
        <Route path="/accounts/login/" element={<SignInPage />} />

        <Route path="/accounts/signup" element={<SignUpPage />} />
        <Route path="/accounts/signup/" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App