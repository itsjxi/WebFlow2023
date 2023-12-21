import { useState } from 'react'
import './App.css'
import FormComponent from './components/leadForm/FormComponent'
import OurClient from './components/ClientLogoSection/clientlogo'
import HeroSection from './components/heroSection/heroSection'
import Navbar from './components/navbar/navbar'
import Carousel from './components/testimonials/crousel/crousel'
import Footer from './components/footer/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Carousel />
    <OurClient/>
    <FormComponent/>
    <Footer/>
    </>
  )
}

export default App
