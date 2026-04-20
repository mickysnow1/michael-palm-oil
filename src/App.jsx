import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Sustainability from './components/Sustainability'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import { CTABanner, Footer } from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Sustainability />
      <Gallery />
      <Testimonials />
      <CTABanner />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
