import React from 'react'
import { FaGithub, FaLinkedin, FaDochub, GrDocumentPdf } from 'react-icons/fa'
import starFall from '../assets/starfall.gif'
import mountains from '../assets/mountains.gif'
import { Gradient } from '@material-ui/icons'
import space from '../assets/space.gif'
import resume from '../documents/Resume.pdf'

//import {HiArrowNarrowRight} from 'react-icons'
//style={{backgroundImage: `url(${mountains})`}}
const Main = () => {

  const gitHandler = () => {
    window.open('https://github.com/Hayden-Hansen?tab=repositories')
  }

  const linkedInHandler = () => {
    window.open('https://www.linkedin.com/in/hayden-hansen-944197133/')
  }

  const resumeHandler = () => {
    window.open(resume)
  }



  return (
    <div style={{backgroundImage: `url(${mountains})`}} className='main-div'>
    <div /*style={{backgroundImage: `url(${space})`}}*/  className='w-full h-screen main main-div'>



    {/*Container */}
    <div className='max-w-[1000px] mx-auto px-0 flex flex-col justify-center h-[600px] items-center'>
      <div className='max-w-[1000px] mx-auto mt-10 px-0 pt-2 flex flex-col justify-center h-[100px] items-center'>
        <h1 className='text-5xl sm:text-7xl font-bold items-center text-[#ccd6f6] transition-opacity ease-in duration-700 opacity-100 hover:opacity-40'>Hayden Hansen</h1>
        <h2 className='text-4xl sm:text-5xl font-bold items-center w-full ml-16 pl-3 text-[#8892b0] transition-opacity ease-in duration-700 opacity-100 hover:opacity-40'>Front-End Developer</h2>
        <div className=' w-full h-[60px] flex justify-center items-center px-0 mt-30 pt-6'>
            <ul className='flex text-gray-300 mt-4'>
            <button onClick={gitHandler}><li className='bg-black hover:animate-bounce 0.2s mr-5'><a><FaGithub size = {60}/></a>Github</li></button>
            <button onClick={linkedInHandler}><li className='bg-blue-600 hover:animate-bounce 0.2s mr-5'><a><FaLinkedin size = {60}/></a>LinkedIn</li></button>
              <button onClick={resumeHandler}><li className='bg-[#565f69] hover:animate-bounce 0.2s mr-5 w-[85px] h-[85px]'><a><img className='pt-1 pb-1 h-[60px]' src='https://th.bing.com/th/id/OIP.fHOZ3hDoidaHQg6MhjftVAHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7'/>Resume</a></li></button>
            </ul>
        </div>
      </div> 
    </div>
    </div>
    <div name="about"></div>
    </div>
  )
}

export default Main
