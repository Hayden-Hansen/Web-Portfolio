import React from 'react'
import {Link} from 'react-scroll'
import ProfilePic from '../assets/ProfilePic.jpg'
import mountains from '../assets/mountains.gif'

//style={{backgroundImage: `url(${mountains})`}} 
//<button><img src={ProfilePic} alt="" style={{width: '200px', height: '220px'}}/></button>

const About = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex justify-center text-gray-300 mt-16 bg-[#0a192f] about-div'>
      <div className='sm:flex flex-col justify-center items-center mt-4 mb-2 pb-16 w-full h-fit'>
            <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
                <div className='text-left pb-2 pl-16 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
                </div>
                <div className=' bg-[#0a192f] h-fit w-full grid md:grid-cols-2 gap-8 px-4'>
                    <div className='md:text-left text-xl font-bold pl-12'>
                      <p>Thanks for visiting my site! After I obtained my Bachelor of Science in Physics from the University of Michigan in 2018, 
                        I worked as a rotational engineer solving problems and increasing efficiency across multiple business departments. 
                        During my last rotation, I discovered my passion for coding and front end development. This led me to my current position 
                        as a Junior Developer. Along the way, I completed multiple online bootcamps and earned numerous certifications in front 
                        and back end development. I am currently seeking a front end development position. In my free time, I enjoy making music. 
                        Checkout my SoundCloud link at the top right! </p>
                    </div>
                    <div className='flex justify-center items-center h-fit mb-12 '>
                      <img src={ProfilePic} alt="" style={{width: '200px', height: '260px'}}/>
                    </div>
                </div>
            </div>

      </div>

     
  )
}

export default About
