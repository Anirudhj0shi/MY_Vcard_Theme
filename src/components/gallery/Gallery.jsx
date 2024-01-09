import React from 'react';
import "./Gallery.css"
// import bg-gallery from '../.././';


const Gallery = () => {
   
  return (
    <>
    <div id='Gallery-page' className=' '>
        
      <h1 className='text-center font-bold p-4 text-xl  text-emerald-900 '>Gallery</h1>
      <div className="flex  ml-11 overflow-x-scroll overflow-hidden border-black pb-5">
        {/* Replace the URLs below with the paths to your images */}
        <img src="https://media.istockphoto.com/id/1487542203/vector/marketing-research-and-business-data-statistics-seo-analyst-with-magnifying-glass-growth.jpg?s=2048x2048&w=is&k=20&c=kFvDnhyh1WeaKuB0MyWrGEiASsjOlfu6Ke6NObF2Wlw=" alt="Image 1" className=" w-60 m-10   border-black border-2" />
        <img src="https://media.istockphoto.com/id/1487542203/vector/marketing-research-and-business-data-statistics-seo-analyst-with-magnifying-glass-growth.jpg?s=2048x2048&w=is&k=20&c=kFvDnhyh1WeaKuB0MyWrGEiASsjOlfu6Ke6NObF2Wlw=" alt="Image 2" className=" w-60 m-10  border-black border-2" />
        <img src="https://media.istockphoto.com/id/1487542203/vector/marketing-research-and-business-data-statistics-seo-analyst-with-magnifying-glass-growth.jpg?s=2048x2048&w=is&k=20&c=kFvDnhyh1WeaKuB0MyWrGEiASsjOlfu6Ke6NObF2Wlw=" alt="Image 2" className=" w-60 m-10  border-black border-2" />
        {/* Add more image elements as needed */}
      </div>

    </div>


    </>
  )
}

export default Gallery
