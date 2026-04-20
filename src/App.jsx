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
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="plantation">
        <About />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="sustainability">
        <Sustainability />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Testimonials />
      <CTABanner />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
