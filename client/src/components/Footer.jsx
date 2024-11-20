import React from 'react'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
   <img src={assets.appLogo} width={100} alt=''/>
    <p className='flex-1 border-l border-gray-400 pl-4 text-sm test-grey-700 max-sm:hidden'>Copyright @AjayPrajapathi | All right Reserved</p>
  <div className='flex gap-2.5'>
    <img src={assets.linkedin}/>
    <img src={assets.github}/>
  
  </div>

    </div>
    
  )
}

export default Footer