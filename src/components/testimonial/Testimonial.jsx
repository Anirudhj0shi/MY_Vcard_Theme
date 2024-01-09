import React from 'react'

const Testimonial = () => {
  return (
    <>
        <div className='flex items-center justify-center p-4 mt-4'>
          <hr className="border-b-2 border-yellow-600 w-full mr-2" />
          <h1 className='font-bold text-center text-xl text-white '>Testimonial</h1>
          <hr className="border-b-2 border-yellow-600 w-full ml-2" />
        </div>
        <div className='flex '>
            <div className='w-1/2 m-1 flex items-center justify-center'>
            <img className='rounded-bl-full rounded-br-full rounded-tl-full h-44 w-40' src='https://images.unsplash.com/photo-1584282617200-32f377e493ef?q=80&w=1969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Avatar' />
            </div>
            <p className='w-1/2 m-4 text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto mollitia vitae maiores suscipit</p>
        </div>
    </>
  )
}

export default Testimonial
