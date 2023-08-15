import './App.css'
import NavbarResponsive from './components/NavbarResponsive'
import Footer from './components/Footer'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import BackToTop from './components/BackToTop'

function App() {

  return (
    <div className="Main">
      <BackToTop/>
      <div className='navbar-container'>
        <NavbarResponsive/>
      </div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  )
}

export default App
