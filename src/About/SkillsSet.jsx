import React from 'react'
import { SiVisualstudiocode, SiSlack, SiWindows, SiPhp, SiHtml5 , SiCss3, SiReact, SiBootstrap, SiTailwindcss, SiJavascript,SiNodedotjs} from 'react-icons/si'
export const SkillsSet = () => {
  return (
    <>
        <div className='text-center mt-14'>
            <h1 className='text-white md:text-4xl md:mb-4 text-2xl font-semibold uppercase mb-2'>Profesional <span className='text-textcolor'>SkilSet</span>  </h1>
            
        </div>
            
                <div className='md:mt-10'>
                    <ul className='md:flex  md:justify-evenly flex flex-wrap mt-10 ml-14 my-5 mx-5 '>
                        <li className='p-10  border-2 mr-5 mb-3 hover:shadow-shadow  cursor-pointer'><SiJavascript className='text-5xl text-white bg-transparent'/></li>
                        <li className='p-10  border-2 mr-2 mb-3 hover:shadow-shadow cursor-pointer '><SiPhp className='text-5xl text-white bg-transparent'/></li>
                        <li className='p-10  border-2 mr-5 mb-3 hover:shadow-shadow cursor-pointer'><SiHtml5 className='text-5xl text-white bg-transparent'/></li>
                        <li className='p-10  border-2 mr-2 mb-3 hover:shadow-shadow cursor-pointer'><SiCss3 className='text-5xl text-white bg-transparent'/></li>
                        <li className='p-10  border-2 mr-5 mb-3 hover:shadow-shadow cursor-pointer'><SiReact className='text-5xl text-white bg-transparent'/></li>
                        <li className='p-10  border-2 mr-2 mb-3 hover:shadow-shadow cursor-pointer'><SiBootstrap className='text-5xl text-white bg-transparent'/></li>
                        <li className='p-10  border-2 mr-2 mb-3 hover:shadow-shadow cursor-pointer'><SiTailwindcss className='text-5xl text-white bg-transparent'/></li>
                        
                    </ul>
                </div>
                <div className='text-center mt-14'>
            <h1 className='text-white md:text-4xl md:mb-4 text-2xl font-semibold uppercase mb-2'>  <span className='text-textcolor'>Tools</span> i use </h1>
        
        </div>
                <div className='md:mt-10'>
                    <ul className='md:flex  md:justify-evenly flex flex-wrap mt-10 ml-14 my-5 mx-5 '>
                        <li className='p-10  border-2 mr-5 mb-3 hover:shadow-shadow  cursor-pointer'><SiVisualstudiocode className='text-5xl text-white bg-transparent'/></li>
                        <li className='p-10  border-2 mr-2 mb-3 hover:shadow-shadow cursor-pointer '><SiSlack className='text-5xl text-white bg-transparent'/></li>
                        <li className='p-10  border-2 mr-5 mb-3 hover:shadow-shadow cursor-pointer'><SiWindows className='text-5xl text-white bg-transparent'/></li>
                        
                    </ul>
                </div>
            
    </>
  )
}
