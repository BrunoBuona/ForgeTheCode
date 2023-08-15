import React, {useEffect, useState} from 'react'
import upArrow from '../assets/icons8-up-arrow-26.png'

function BackToTop() {

    const [backToTopButton,setBackToTopButton ]= useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY> 1600){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    

    return <div className='App'>
    {backToTopButton && (
      <button className='autoTopButton' onClick={scrollUp}>
        <img src={upArrow} />
    </button>
    )} 

  </div>
}

export default BackToTop