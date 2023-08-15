import React from 'react'
import people from '../assets/3d-people.png'
import stars from '../assets/Stars.png'
import heart from '../assets/heart.png'
import points from '../assets/points.png'
import great from '../assets/great.png'
import curvedLines from '../assets/curved-lines.png'
import curly from '../assets/curly.png'
import circleBlue from '../assets/circle-blue.png'
import circlePink from '../assets/circle-pink.png'
import circleBlueMd from '../assets/circle-md-blue.png'

function Section2() {
  return (
    <div id='section-2' className='section-2'>
        <main className='about-us'>
          <div className='sec-2-people'>
            <div className='blue-box'>
              <img className='people-3d' src={people} />
              <div className='absolute'>
                <img className='stars' src={stars} />
              </div>
              <div className='absolute'>
                <img className='heart' src={heart} />
              </div>
              <div className='absolute'>
                <img className='points' src={points} />
              </div>
              <div className='absolute'>
                <img className='great' src={great} />
              </div>
              <div className='absolute'>
                <img className='curved-lines' src={curvedLines} />
              </div>
            </div>
          </div>
          <div className='sec-2-about'>
            <div className='weWant-container'>
              <span className='weWant'>Queremos que nos conozcas</span>
            </div>
            <p className='about-us-text'>Sobre nosotros</p>
            <p className='transform-text'>Transformamos la forma de hacer las cosas</p>
            <p className='we-are-text'>Somos una empresa innovadora con un enfoque en inclusión,
              diversidad y educación continua.
              Liderados por un equipo altamente capacitado de
              expertos en tecnología, brindamos soluciones digitales a 
              empresas que buscan fortalecer su presencia en el mercado
              digital. Juntos, trabajamos para alcanzar resultados excepcionales
            </p>
            <div className='absolute'>
              <img className='curly' src={curly} />
            </div>
            <div className='absolute'>
              <img className='circle-pink' src={circlePink} />
            </div>
            <div className='absolute'>
              <img className='circle-blue' src={circleBlue} />
            </div>
            <div className='absolute'>
              <img className='circle-blue-md' src={circleBlueMd} />
            </div>
          </div>
        </main>
    </div>
  )
}

export default Section2