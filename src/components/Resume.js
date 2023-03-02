import React from 'react'
import mountains from '../assets/mountains.gif'
import resume from '../documents/Resume.pdf'

const Resume = () => {

  const resumeHandler = () => {
    window.open(resume)
  }



  return (
    <button onClick={resumeHandler} className='max-w-[300px] mx-auto p-6 mt-0 flex flex-col justify-center w-full h-full'>
    <div className='max-w-[300px] mx-auto p-6 mt-10 flex flex-col justify-center w-full h-full border-4 border-indigo-400 bg-purple-800 rounded-full hover:bg-purple-900'>
      <button className='text-white text-4xl hover:bg-purple-900'>RESUME</button>
      </div>
      </button>
  )
}

export default Resume
