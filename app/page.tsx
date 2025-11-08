import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import CTA from "@/components/cta"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <CTA />
      <Footer />
    </main>
  )
}
