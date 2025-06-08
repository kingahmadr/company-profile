import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import  WhatsAppButton from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton 
        phoneNumber="+6283890514596"
        message="Hello! I found your website and I'd like to ask about your projects."
      />
      <Hero />
      <Services />
      {/* <Stats /> */}
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
