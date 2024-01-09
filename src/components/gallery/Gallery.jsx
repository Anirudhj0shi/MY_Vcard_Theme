import React from 'react'

const Gallery = () => {
  return (
  <>
<div className="flex flex-col bg-gray-200 m-auto p-auto">
<h1 className="flex justify-center p-3 m-3  font-bold text-2xl text-emerald-900">Gallery</h1>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 " >
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          
          
          
        </div>
      </div>
</div>
        {/*  */}
  </>
  )
}

export default Gallery
