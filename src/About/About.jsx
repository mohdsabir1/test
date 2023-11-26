import React from 'react'
import AboutImage from '../assets/about.png'
import { SkillsSet } from './SkillsSet'

export const About = () => {
  return (
    <>
    <div className='md:flex '>
    <div className='md:text-center md:mt-32 mt-7'>
        <h1 className='text-white text-4xl uppercase text-center' >Know Who <span className='text-textcolor font-semibold'>i'm</span></h1>
        <div className=' ' style={{width:"280px;", margin:"auto;"}}></div>
        <div className=' md:max-w-3xl md:text-center md:mx-auto p-5 '>
        <p className='text-center text-2xl'>Hi Everyone, I'm <span className='text-textcolor'>MOHD SABIR</span> from Ghaziabad, Uttar Pradesh, India. I hold a Bachelor's degree in <span className='text-textcolor'>Computer Applications (BCA)</span> and am currently pursuing  Master's in <span className='text-textcolor'> Computer Applications (MCA)</span> at IGNOU, New Delhi. Alongside my academic journey, I'm proud to be a <span className='text-textcolor'>FRONTEND DEVELOPER at Jaar Consulting</span>, where I contribute to exciting projects that leverage cutting-edge technologies. Beyond coding,  and I'm always eager to explore new opportunities to learn and grow in the dynamic world of technology. Let's connect and share our passion for innovation!
</p>
        </div>
          <p className='text-gray-500 font-semibold text-xl text-center'>"Strive to build things that make a difference!"</p>
          <p className='text-gray-500 font-semibold text-xl md:ml-24 text-center'>- Sabir</p>
      </div>
      <div className='md:mt-32 mt-10'> 
        <img className='' src={AboutImage} alt="" />
      </div>
    </div>

    <SkillsSet />
      

    </>
  )
}
