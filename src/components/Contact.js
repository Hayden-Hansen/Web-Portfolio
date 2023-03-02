import React from 'react'
import mountains from '../assets/mountains.gif'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 '>
        <form method='POST' action='https://getform.io/f/92cdcd08-6331-40a0-9091-5a4d3df213e4' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='pt-4 pb-0 text-[32px] text-gray-300 font-extrabold'>Submit the form to send me a message, and I'll get back to you right away!</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Your Name' name='name' required/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Your Email' name='email' required/>
            <textarea className='bg-[#ccd6f6]' name='message' rows='10' placeholder='Your Message' required></textarea>
            <button className='border-2 text-[#ccd6f6] text-4xl font-bold bg-[#0a192f] hover:bg-[#334333] hover:border-pink-600 px-4 py-3 my-8 mx-auto items-center'>Send my message!</button>
        </form>
    </div>
  )
}

export default Contact
