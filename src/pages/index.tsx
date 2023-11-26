import React, { useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import NinethFrame from './components/NinethFrame'
import SeventhFrame from './components/SeventhFrame'
import SecondFrame from './components/SecondFrame'
import SixthFrame from './components/SixthFrame'
import ThirdFrame from './components/ThirdFrame'
import FifthFrame from './components/FifthFrame'
import FourthFrame from './components/FourthFrame'
import FirstFrame from './components/FirstFrame'
import EightFrame from './components/EightFrame';
import App from './components/App';

function index() {

  return (
   <App />
  )
}

export default index