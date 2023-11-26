import React from 'react'
import Image from '../assets/banner.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Home2 } from './Home2'

export const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ['Web Developer', 'Mobile Developer', 'Freelancer', 'Full Stack Developer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <>
      <div className='md:flex justify-around mt-6'>

        <div className='p-5 md:mt-24  ' >
          <p className=' md:text-4xl text-3xl  text-white'>Hi There!</p>
          <p className='mt-5 text-white text-3xl uppercase'>I'am
            <span className=' md:font-semibold md:text-4xl text-3xl  font-bold text-center  '> MOHD SABIR, </span> </p>
          <p className=' md:text-3xl md:w-96 text-2xl uppercase mt-8 font-semibold text-white ' > A <span className='text-textcolor'>{typeEffect}</span></p>
        </div>


        <div className='md:p-5  mt-24 md:mt-14 md:ml-24 '> <img className=' rounded-2xl  md:w-96' src={Image} alt="" /></div>
      </div>
      <Home2 />
    </>
  )
}
