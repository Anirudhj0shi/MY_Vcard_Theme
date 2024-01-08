/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

const OurService = () => {
  return (

     <>
    <h1 className='text-center font-bold p-4 text-xl  text-emerald-900'>Our Services</h1>
    <div className="webdesign flex pb-4">
   

        {/* Website Icon */}
        <div className='w-[200px] border rounded-xl m-2 p-1 shadow-2xl  '>
        <div className="website-icon w-16 h-[50px] m-auto text-4xl rounded-lg flex items-center justify-center">
        <FontAwesomeIcon icon={faFaceSmile} />
        </div>

        {/* Web Development */}
        
        <div className="webdata  w-[89%]  text-center  ">
          <h1 className='font-bold'>Web Development</h1>
          <p>Lorem ipsum, dolor sit amecupiditate quidem at quis.
          Lorem ipsum dolor sit amet.</p>
        </div>
      </div>


      <div className='w-[200px] border rounded-xl m-2 p-1 shadow-2xl '>
        <div className="website-icon w-11 h-[50px] text-4xl m-auto rounded-lg flex items-center justify-center ">
          <FontAwesomeIcon icon={faGlobe} className="text-orange-300" />
        </div>

        {/* Web Development */}
        
        <div className="webdata  w-[89%]  text-center  ">
          <h1 className='font-bold'>Web Development</h1>
          <p>Lorem ipsum, dolor sit amecupiditate quidem at quis.
          Lorem ipsum dolor sit amet.</p>
        </div>
      </div>


        </div>

      
    </>
    
  )
}

export default OurService
