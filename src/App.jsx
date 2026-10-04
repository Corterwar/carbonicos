import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ForUsers from './components/ForUsers'
import ForCompanies from './components/ForCompanies'
import Blockchain from './components/Blockchain'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0a] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <ForUsers />
      <ForCompanies />
      <Blockchain />
      <CTA />
      <Footer />
    </div>
  )
}
