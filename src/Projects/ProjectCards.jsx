import React from 'react'
import Online from '../assets/Projects/online.png'
import Contract from '../assets/Projects/contract.png'
import Capline from '../assets/Projects/capline.png'
import Shopping from '../assets/Projects/shoping.PNG'

export const ProjectCards = () => {
    return (
        <>
            <div className='text-center'>

                <h1 className='text-white md:text-4xl text-2xl mt-7'>My Recent <span className='text-textcolor'>Works</span> 
                </h1>
                
                <p className='text-white text-xl mt-2'>Here are few projects i've worked recently</p>
               
            </div>
            <div className='md:flex md:justify-center md:space-x-36  mt-10'>

                <div className='md:w-80 md:h-max mb-5 rounded-xl border-2 p-2  hover:shadow-shadow' >
                    <img className='rounded-sm' src={Contract} alt="" />
                    <h1 className='text-center md:mt-2 md:text-2xl font-semibold'>Contract Management</h1>
                    <p className='text-white p-3'> It is a Demo frontend page based on the HTML and Javascript in which you can Give contract like signing your documents and other task as wants to build something Web Applications or Mobile Applications.</p>
                    <div className='text-center '>
                            
                        <a href="https://github.com/mohdsabir1/Contract-Management" target='_blank'><button className='mr-10 border-2 p-2 rounded-xl ' type="button">GitHub</button></a>
                       <a href="https://contract-management-system.netlify.app/" target='_blank'><button className='mr-10 border-2 p-2 rounded-xl' type="button">Demo</button></a> 

                    </div>
                </div>
                <div className='md:w-80 md:h-max mb-5  rounded-xl border-2 p-2  hover:shadow-shadow' >
                    <img className='rounded-sm' src={Capline} alt="" />
                    <h1 className=' text-center md:mt-2 md:text-2xl font-semibold'>Health Management</h1>
                    <p className='text-white p-3'> It is Demo Website of a Capline Healthcare based on HTML, CSS and javascript.</p>
                    <div className='text-center '>
                            
                    <a href="https://github.com/mohdsabir1/Caplin" target='_blank'><button className='mr-10 border-2 p-2 rounded-xl ' type="button">GitHub</button></a>
                       <a href="https://caplin.netlify.app" target='_blank'><button className='mr-10 border-2 p-2 rounded-xl' type="button">Demo</button></a> 

                    </div>
                </div>
                <div className='md:w-80 md:h-max mb-5 rounded-xl border-2 p-2  hover:shadow-shadow' >
                    <img className='rounded-sm' src={Shopping} alt="" />
                    <h1 className='text-center md:mt-2 md:text-2xl font-semibold'>Shopping Portal</h1>
                    <p className='text-white p-3'> Online Shopping Portal which is fully functioning based on the PHP as a backend and frotend HTML, CSS and Javascript, You can go through all of the pages to buy something.</p>
                    <div className='text-center '>
                            
                    <a href="https://github.com/mohdsabir1/Shopping" target='_blank'><button className='mr-10 border-2 p-2 rounded-xl ' type="button">GitHub</button></a>
                       <a href="#" ><button className='mr-10 border-2 p-2 rounded-xl' type="button">Demo</button></a> 

                    </div>
                </div>
            </div>
            <div className='md:flex justify-center space-x-36 mt-10'>

                
              
                <div className='md:w-80 md:h-max mb-5 rounded-xl border-2 p-2  hover:shadow-shadow' >
                    <img className='rounded-sm' src={Online} alt="" />
                    <h1 className='text-center md:mt-2 md:text-2xl font-semibold'>Grievance System</h1>
                    <p className='text-white p-3'> It is a PHP base Project in which students raise their query to the Admin and get solutions about their queries.</p>
                    <div className='text-center '>

                    <a href="https://github.com/mohdsabir1/Online-Grievance-System" target='_blank'><button className='mr-10 border-2 p-2 rounded-xl ' type="button">GitHub</button></a>
                       <a href="#" ><button className='mr-10 border-2 p-2 rounded-xl' type="button">Demo</button></a> 

                    </div>
                </div>
            </div>
        </>
    )
}
