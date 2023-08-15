import React from 'react'
import rectangleBlue from '../assets/Rectangle-blue.png'
import teamMask from '../assets/team-mask.png'
import centralLogo from '../assets/Vector.png'
import circle from '../assets/Circle.png'
import rectangle from '../assets/Rectangle.png'
import tecnologicas from '../assets/tecnologicas.png'


function Section1() {
  return (
    <div id='section-1' className='section-1'>

      <img className='rectangle-blue' src={rectangleBlue}/>
      <img className='rectangle-team' src={teamMask}/>
      <img className='circle' src={circle}/>
      <img className='rectangle' src={rectangle} />
      <div className='big-box'>
        <div className='welcome-box'>
          <div>
            <span className='welcome'>Bienvenido a FOCO</span>
          </div>
          <h2 className='create'>Creamos soluciones</h2>
          <figure>
            <img className='tecno' src={tecnologicas} />
          </figure>
          <p className='text'>Para tener una buena idea, hay que tener muchas ideas 😉</p>
        </div>
        <div className='agenda-box'>
            <a className='agenda-link' href="#section-5">
            <span className='agenda'>
              Agenda un reunión</span>
            </a>
          </div>
      </div>

      <div className='section-1-inside'>
        <img className='central-logo' src={centralLogo}/>
      </div>
    </div>
  )
}

export default Section1