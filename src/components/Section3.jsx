import React from 'react'
import serviceDetail from '../assets/service-detail.png'
import serviceInteract from '../assets/service-interact.png'
import serviceMant from '../assets/service-mant.png'
import serviceProd from '../assets/service-product.png'
import serviceQa from '../assets/service-qa.png'
import serviceLine from '../assets/service-line.png'

function Section3() {
  return (
    <div id='section-3' className='section-3'>
        <div className='innovation'>
            <span className='innovation-text'>Innovación en acción</span>
        </div>
        <div className='our-services-container'>
            <div className='our-services-first'>
                <h2 className='our-services-title'>Nuestros Servicios</h2>
                <div className='absolute'>
                    <img className='our-service-detail' src={serviceDetail} />
                </div>
            </div>
            <div>
                <p className='our-service-text'>Estamos preparados para vivir de la nueva era <br />
                    digital, la pregunta es, ¿vos lo estas?. Nuestros <br />
                    nómadas digitales cuentan con las mejores skills <br /> que el
                    mercado demanda
                </p>
            </div>
        </div>
        <div className='services'>
            <div className='service-section'>
                <div className='box-icon'>
                    <img src={serviceProd} />
                </div>
                <h2 className='service-title'>Diseño de producto</h2>
                <p className='service-text'>¿Idea pero faltan recursos? Te ayudamos, creamos estrategias de diseño y definimos juntos el camino hacia MVP o prototipo.</p>
            </div>
            <img className='service-line service-line-one' src={serviceLine} />
            <div className='service-section'>
                <div className='box-icon'>
                    <img src={serviceInteract} />
                </div>
                <h2 className='service-title'>Diseño de interacción</h2>
                <p className='service-text'>Desde wireframes, mockups y prototipos, diseñamos pantallas y flujos óptimos para la experiencia del usuario en todos los dispositivos.</p>
            </div>
            <img className='service-line service-line-two' src={serviceLine} />
            <div className='service-section'>
                <div className='box-icon'>
                    <img src={serviceQa} />
                </div>
                <h2 className='service-title'>Desarrollo y QA</h2>
                <p className='service-text'>Desarrollamos aplicaciones web y móviles usando metodología ágil y tecnologías líderes, con pruebas y control de calidad automatizados.</p>
            </div>
            <img className='service-line service-line-three' src={serviceLine} />
            <div className='service-section'>
                <div className='box-icon'>
                    <img src={serviceMant} />
                </div>
                <h2 className='service-title'>Mantenimiento</h2>
                <p className='service-text'>Ofrecemos post-implementación para solucionar incidencias y mejorar funcionalidades. Utilizamos herramientas y procesos propios o del cliente.</p>
            </div>
        </div>
    </div>
  )
}

export default Section3