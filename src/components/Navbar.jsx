/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './home/Home';
import Service from './Service';
import OurService from './OurService';
import Appointment from './Appointment';
import Gallery from './gallery/Gallery';

const Navbar = () => {
  return (

      <div className=' container w-full sm:w-[40%] sm:m-auto  bg-emerald-900'>

    
      
     
     <div>
      <Home></Home>
     </div>

     <div className="mt-[570px] ">
      <Service />
     </div>
     

     <div className= ' bg-gray-200 '>
      <OurService/>
     </div>

      <div className=''>
        <Appointment/>
      </div>

      <div>
        <Gallery />
      </div>
     


    </div>
  );
}

export default Navbar
