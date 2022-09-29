import React, {useState, useuseEffect} from 'react'
import { useEffect } from 'react';
import {BsArrowUpSquare} from 'react-icons/bs'

const ScrolltoTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(False);

  useEffect(() => {
    window.addEventListener("scroll",() =>{
      if (window.screenY > 500) {
        setShowScrollTopButton(True)
      } else {
        setShowScrollTopButton(False)
      }
    })
    
  }, []);


  const Scrolltop = () => {
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    });
  }

  return (
    <div>
      {showScrollTopButton && <BsArrowUpSquare className='app__scroll_top' onClick={Scrolltop} />}
    </div>
  )
}

export default ScrolltoTop;