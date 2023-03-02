import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedIn} from 'react-icons/fa'
import {Link} from 'react-scroll'
import workImg from '../assets/workImg.jpeg'
import laserWhip from '../assets/laserWhip.gif'
import blackWaves from '../assets/waves-black.gif'
import space from '../assets/space.gif'
import flames from '../assets/flames.gif'
import music from '../assets/music.png'
import spaceman from '../assets/spaceman.jpg'

/**<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzAyZWRjNGM4ZmU0NDc3YmNhMTY0ODY1YzYzN2M0N2RhMDU2ZTY2NiZjdD1n/AHeTfHgVFPHgs/giphy.gif" alt=""
      style={{width: '50px'}} className='bg-transparent'/> */

      // <div style={{backgroundImage: `url(${music})`,width: '500px', height: '860px', position: 'center'}} className='text-white mr-10 mt-20'>

      /*<div style={{backgroundImage: `url(${spaceman})`}}>
      <img src="https://th.bing.com/th/id/OIP.WMXABa4NKH9u6H00tN9d2QAAAA?pid=ImgDet&rs=1" alt=""
      style={{width: '50px'}} className='spaceman-div'/>
      </div>*/

const Navbar = () => {
    const [nav, setNav] = useState(false);
    

    const clickHandler = () => {
        setNav(!nav)
    }

    const musicHandler = () => {
      window.open('https://soundcloud.com/hjh-thesedays')
    }

  return (
    <div style={{backgroundImage: `url(${space})`}} className='fixed w-screen h-[80px] flex justify-between items-center px-4 text-gray-300 navbar-div'>

        <div></div>
      
        {/* menu */}
        <ul className='hidden md:flex ml-28 pl-6 links-div'>
            <li className='text-4xl font-mono'>
              <Link to="about" smooth={true} duration={500} className='border-solid border-indigo-600 hover:text-slate-400'>
              <button>About</button>
        </Link></li>
            <li className='text-4xl font-mono hover:text-slate-400'><Link to="projects" smooth={true} duration={500}><button>Projects</button></Link></li>
            <li className='text-4xl font-mono hover:text-slate-400'><Link to="contact" smooth={true} duration={500}><button>Contact</button></Link></li>
        </ul>

        {/* hamburger menu */}
        <div onClick={clickHandler} className='md:hidden z-10 ml-10 pl-8'>
            {!nav ? <FaBars/> : <FaTimes />}
        </div>


        {/* mobile menu */}
        <ul style={{backgroundImage: `url(${space})`}} className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl pr-12'><Link onClick={clickHandler} to="about" smooth={true} duration={500}>
          About
        </Link></li>
            <li className='py-6 text-4xl pr-12'><Link onClick={clickHandler} to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li className='py-6 text-4xl pr-12'><Link onClick={clickHandler} to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/*social Links */}
        <div>
        <ul>
          <li>
            <button onClick={musicHandler}><img style={{backgroundImage: `url(${music})`,width: '42px', height: '42px'}} className= 'hover:animate-bounce 0.2s sound-div' /></button>
          </li>
          </ul> 
        </div>
        </div>

  )
}

export default Navbar
