/* eslint-disable no-unused-vars */
import React from 'react'


const Products = () => {
  return (
    <>
        <h1 className='text-center font-bold p-4 text-xl  text-emerald-900'>Products</h1>
        <div className=" flex pb-4 m-auto">
                {/* Website Icon */}
            <div className='border rounded-xl m-3  shadow-2xl hover:scale-105  '>
                <img className="website-icon m-auto text-4xl rounded-lg flex " src='https://cdn.pixabay.com/photo/2017/04/04/04/25/technology-2200260_640.jpg' />
            </div>


            <div className=' border rounded-xl m-3  shadow-2xl hover:scale-105 '>
                <div className="flex">
                    <img className="website-icon h-full  rounded-lg" src='https://cdn.pixabay.com/photo/2017/04/04/04/25/technology-2200260_640.jpg' />
                </div>
            </div>

        </div>
        <div className=" flex pb-4 m-auto">
                {/* Website Icon */}
            <div className='border rounded-xl m-3  shadow-2xl hover:scale-105  '>
                <img className="website-icon m-auto text-4xl rounded-lg flex " src='https://cdn.pixabay.com/photo/2017/04/04/04/25/technology-2200260_640.jpg' />
            </div>


            <div className=' border rounded-xl m-3  shadow-2xl hover:scale-105 '>
                <div className="flex">
                    <img className="website-icon h-full  rounded-lg" src='https://cdn.pixabay.com/photo/2017/04/04/04/25/technology-2200260_640.jpg' />
                </div>
            </div>

      </div>

      
    </>
    
  )
}

export default Products
