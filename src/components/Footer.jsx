import React from 'react'
import focoLogo from '../assets/footer-logo.png'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-content'>
            <figure className='footer-logo'>
                <img src={focoLogo} />
            </figure>
            <div className='footer-information'>
                <div className='footer-info'>
                    <p>+5499999999</p>
                    <p>+5499999999</p>
                    <p>info@forgethecode.com</p>
                </div>
                <div className='footer-info footer-links'>
                    <a href="#section-1">Home</a>
                    <a href="#section-2">Sobre nosotros</a>
                    <a href="#section-3">Servicios</a>
                    <a href="#section-5">Contacto</a>
                </div>
                <div className='footer-info'>
                    <p>LinkedIn</p>
                </div>
            </div>

        </div>
        <div className='disclaimer'>
            <p>
            ©2023 FORGE THE CODE. Todos los derechos reservados.
            </p>
        </div>
    </footer>
  )
}

export default Footer