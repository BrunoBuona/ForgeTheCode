import React from 'react'
import valueAnali from '../assets/value-anali.png'
import valueCreat from '../assets/value-creat.png'
import valueSelfie from '../assets/value-selfie.png'
import valueInno from '../assets/value-inno.png'
import valueStar from '../assets/value-star.png'
import valueCircle from '../assets/value-circle.png'

function Section4() {
  return (
    <div id='section-4' className='section-4'>
        <div className='section-4-container'>
            <div className='values'>
                <p className='values-text'>Nuestros valores</p>
            </div>
            <div className='values'>
                <div className='absolute'>
                    <img className='value-star' src={valueStar} />
                </div>
                <p className='know-foco'>Conoce los principios que <br /> 
                impulsan a <strong className='FOCO'>FOCO</strong> a triunfar</p>
            </div>
            <div className='absolute'>
                <img className='value-circle' src={valueCircle} />
            </div>
            <div className='section-values'>
                <div className='section-values-each'>
                    <figure>
                        <img className='value-image' src={valueCreat} />
                    </figure>
                    <div>
                        <h2 className='section-values-title'>Somos creativos</h2>
                        <p className='section-values-sub'>Nos gusta ser autenticos</p>
                    </div>
                </div>
                <div className='section-values-each reverse'>
                    <figure>
                        <img className='value-image' src={valueAnali} />
                    </figure>
                    <div>
                        <h2 className='section-values-title'>Analistas</h2>
                        <p className='section-values-sub'>Nos gusta tener el control de lo que <br /> hacemos</p>
                    </div>
                </div>
                <div className='section-values-each'>
                    <figure>
                        <img className='value-image' src={valueSelfie} />
                    </figure>
                    <div>
                        <h2 className='section-values-title'>Diversos</h2>
                        <p className='section-values-sub'>Nos gusta aprender de todo</p>
                    </div>
                </div>
                <div className='section-values-each reverse'>
                    <figure>
                        <img className='value-image' src={valueInno} />
                    </figure>
                    <div>
                        <h2 className='section-values-title'>Innovadores</h2>
                        <p className='section-values-sub'>Nos gusta pensar en grande</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4