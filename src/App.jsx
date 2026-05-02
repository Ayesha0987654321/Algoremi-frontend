// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home      from './pages/HomePage'
import About     from './pages/AboutPage'
import Services  from './pages/ServicesPage'
import Portfolio from './pages/PortfolioPage'
import Contact   from './pages/ContactPage'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar />
      <Routes>

        <Route path="/"          element={<Home />}      />
        <Route path="/about"     element={<About />}     />
        <Route path="/services"  element={<Services />}  />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact"   element={<Contact />}   />
         <Route path="*"              element={<NotFound />}   />
      
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center
                    gap-5 bg-bg px-6 text-center">
      <span className="text-6xl">🔍</span>
      <h1 className="font-display text-4xl font-extrabold text-ink tracking-tight">
        Page not found
      </h1>
      <p className="text-muted text-base max-w-sm leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
       <a href="/"
        className="mt-2 px-7 py-3.5 rounded-xl bg-ink text-white text-sm
                   font-semibold hover:opacity-85 transition-opacity"
      >
        ← Back to Home
      </a>
    </div>
  )
}