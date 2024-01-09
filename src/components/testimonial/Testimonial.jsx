import React from 'react'

const Testimonial = () => {
  return (
    <>
        <div className='flex items-center justify-center p-4 mt-4'>
          <hr className="border-b-2 border-yellow-600 w-full mr-2" />
          <h1 className='font-bold text-center text-xl text-white '>Testimonial</h1>
          <hr className="border-b-2 border-yellow-600 w-full ml-2" />
        </div>
        <div className='flex p-4'>
            <div className='w-1/2 flex items-center justify-center'>
            <img className='rounded-bl-full rounded-br-full rounded-tl-full h-48 w-48' src='https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fHww' alt='Avatar' />
            </div>
            <p className='w-1/2 p-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto mollitia vitae maiores suscipit repudiandae sapiente. Ad quis nemo exercitationem reiciendis sed excepturi cum quaer</p>
        </div>
    </>
  )
}

export default Testimonial
