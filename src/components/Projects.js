import React from 'react'
import whatsapp from '../assets/whatsappPic.png'
import workImg from '../assets/workImg.jpeg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.jpg'
import mongo from '../assets/mongo.png'
import firebase from '../assets/firebase.jpg'
import pusher from '../assets/pusher.png'
import heroku from '../assets/heroku.jpg'
import amazonPic from '../assets/amazonPic.png'
import express from '../assets/express.jpg'
import stripe from '../assets/stripe.png'
import eatTrack from '../assets/eatTrack.png'
import fightingGame from '../assets/fightingGame.png'
import netlify from '../assets/netlify.png'
import sorting from '../assets/sorting.png'
import shooter from '../assets/shooter.png'
import web from '../assets/web.jpg'
import bootstrap from '../assets/bootstrap.jpg'
import python from '../assets/python.jpg'
import pygame from '../assets/pygame.jpg'
import tailwind from '../assets/tailwind.png'
import mountains from '../assets/mountains.gif'
import portfolio from '../assets/portfolio.png'
import { FaGithub } from 'react-icons/fa'

//md:h-screen

const Projects = () => {

    const whatsappCodeHandler = () => {
        window.open('https://github.com/Hayden-Hansen/WhatsApp-Clone')
    }

    const whatsappDemoHandler = () => {
        window.open('https://whatsapp-clone-bcfa2.firebaseapp.com/')
    }

    const amazonCodeHandler = () => {
        window.open('https://github.com/Hayden-Hansen/Amazon-Clone/tree/main')
    }

    const amazonDemoHandler = () => {
        window.open('https://clone-f577a.firebaseapp.com/')
    }

    const foodCodeHandler = () => {
      window.open('https://github.com/Hayden-Hansen/Eat-and-Track')
  }

    const foodDemoHandler = () => {
      window.open('https://radiant-crag-73686.herokuapp.com/')
  }

    const fightingCodeHandler = () => {
    window.open('https://github.com/Hayden-Hansen/Fighting-Game')
}

    const fightingDemoHandler = () => {
    window.open('https://verdant-donut-bdea8e.netlify.app/')
}

    const sortingCodeHandler = () => {
  window.open('https://github.com/Hayden-Hansen/Sorting-Visualizer')
}

    const sortingDemoHandler = () => {
  window.open('https://silver-kitsune-b75efd.netlify.app/')
}

    const shooterCodeHandler = () => {
  window.open('https://github.com/Hayden-Hansen/Shooter-Game')
}




  return (
    <div name='projects' className='w-full md:h-fit text-gray-300 pt-16'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-10 mt-16 w-[1600px] mb-16 projects-div'>
            <p className='w-[125px] text-4xl font-bold inline text-gray-300 border-b-4 border-pink-600'>Projects</p>
            <p className='mb-0 pb-0 text-left text-[32px] text-gray-300 font-extrabold py-6'>Here are some of my most recent projects. Hover over each project picture to view its details!</p>
        </div>

            

            <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-4'>
                <div className='text-center font-bold text-4xl text-[#ccd6f6]'>WhatsApp Clone</div>
                <div style={{backgroundImage: `url(${whatsapp})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover effects*/}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-white tracking-wider'>
                        This is a clone of the desktop version of WhatsApp. You can create new chat rooms and send messages. 
                        Messages are stored in MongoDB, and Pusher allows the messages to be seen in real-time!  
                        If you are using Chrome, do not worry about the security warning. This is only because I set up 
                        google authentication with firebase. It is completely safe.
                        </span>
                        <div className='pt-8 text-center'>
                            <a>
                                <button onClick={whatsappDemoHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><img className='w-18 h-[90px]' src={web} /></a>
                                <p>Site</p> 
                                </button>
                            </a>
                            <a>
                                <button onClick= {whatsappCodeHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-black font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><FaGithub size = {90}/></a>
                                <p>Code</p>  
                                </button>                          
                                </a>
                        </div>
                    </div>
                </div>

                <div className='text-2xl font-bold text-center'>TECH STACK:</div>
    <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-1 text-center py-6 border-b-8 border-l-8 border-r-8 h-[350px] mb-20'>
    <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={html} alt='HTML icon'/>
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={css} alt='HTML icon'/>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={js} alt='HTML icon'/>
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={react} alt='HTML icon'/>
          <p className='my-4'>REACT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-14 mx-auto mt-1' src={node} alt='HTML icon'/>
          <p className='my-5 pt-2'>NODE.JS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-16 mx-auto mt-1' src={express} alt='HTML icon'/>
          <p className='my-5 pt-2'>EXPRESS.JS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1 bg-white' src={mongo} alt='HTML icon'/>
          <p className='my-5'>MONGODB</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1 bg-white' src={firebase} alt='HTML icon'/>
          <p className='my-5'>FIREBASE</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1 bg-white' src={pusher} alt='HTML icon'/>
          <p className='my-5'>PUSHER</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1 bg-white' src={heroku} alt='HTML icon'/>
          <p className='my-5'>HEROKU</p>
        </div>

    </div>
  

            <div className='text-center font-bold text-4xl text-[#ccd6f6]'>Amazon Clone</div>
                <div style={{backgroundImage: `url(${amazonPic})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto mt-0 content-div'>

                    {/*Hover effects*/}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-white tracking-wider'>
                        This is an Amazon clone. User and product data is stored in MongoDB, and I have implemented Stripe for (non-activated) payment processing. 
                        Click on the search icon next to the search bar to add an item to the store!
                        </span>
                        <div className='pt-8 text-center'>
                            <a>
                                <button onClick={amazonDemoHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><img className='w-18 h-[90px]' src={web} /></a>
                                <p>Site</p> 
                                </button>
                            </a>
                            <a>
                                <button onClick= {amazonCodeHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-black font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><FaGithub size = {90}/></a>
                                <p>Code</p>  
                                </button>                          
                                </a>
                        </div>
                    </div>
                    </div>

                <div className='text-2xl font-bold  text-center'>TECH STACK:</div>
    <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-1 text-center py-8 border-b-8 border-l-8 border-r-8 h-[370px] mb-20'>
    <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={html} alt='HTML icon'/>
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={css} alt='HTML icon'/>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={js} alt='HTML icon'/>
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={react} alt='HTML icon'/>
          <p className='my-4'>REACT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-14 mx-auto mt-1' src={node} alt='HTML icon'/>
          <p className='my-5 pt-2'>NODE.JS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-16 mx-auto mt-1' src={express} alt='HTML icon'/>
          <p className='my-5 pt-2'>EXPRESS.JS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1 bg-white' src={mongo} alt='HTML icon'/>
          <p className='my-5'>MONGODB</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1 bg-white' src={firebase} alt='HTML icon'/>
          <p className='my-5'>FIREBASE</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1 bg-white' src={stripe} alt='HTML icon'/>
          <p className='my-5'>STRIPE</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1 bg-white' src={heroku} alt='HTML icon'/>
          <p className='my-5'>HEROKU</p>
        </div>
    </div>
                <div className='text-center font-bold text-4xl text-[#ccd6f6]'>Eat and Track</div>
                <div style={{backgroundImage: `url(${eatTrack})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover effects*/}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-white tracking-wider'>
                        This is a calendar to track and set goals for daily caloric intake! The goals and calorie data is stored in localStorage, 
                        and user data is stored in MongoDB. It is also connected to the FoodData Central API, so you can find the caloric value of any food!
                        </span>
                        <div className='pt-8 text-center'>
                            <a>
                                <button onClick={foodDemoHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><img className='w-18 h-[90px]' src={web} /></a>
                                <p>Site</p> 
                                </button>
                            </a>
                            <a>
                                <button onClick= {foodCodeHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-black font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><FaGithub size = {90}/></a>
                                <p>Code</p>  
                                </button>                          
                                </a>
                        </div>
                    </div>
                </div>

      <div className='text-2xl font-bold  text-center'>TECH STACK:</div>
      <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-1 text-center py-8 border-b-8 border-l-8 border-r-8 h-[270px] mb-20'>
      <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={html} alt='HTML icon'/>
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={css} alt='HTML icon'/>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={bootstrap} alt='HTML icon'/>
          <p className='my-4'>BOOTSTRAP</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={js} alt='HTML icon'/>
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1' src={mongo} alt='HTML icon'/>
          <p className='my-5'>MONGODB</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1 bg-white' src={heroku} alt='HTML icon'/>
          <p className='my-5'>HEROKU</p>
        </div>

    </div>

    <div className='text-center font-bold text-4xl text-[#ccd6f6]'>Fighting Game</div>
    <div style={{backgroundImage: `url(${fightingGame})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover effects*/}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-white tracking-wider'>
                        As a huge fan of Tekken growing up, I knew one of my projects would have to be a fighting game! The controls are listed on the site page. 
                        Samurai vs. Ninja - let the fight begin!
                        </span>
                        <div className='pt-8 text-center'>
                            <a>
                                <button onClick={fightingDemoHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><img className='w-18 h-[90px]' src={web} /></a>
                                <p>Site</p> 
                                </button>
                            </a>
                            <a>
                                <button onClick= {fightingCodeHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-black font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><FaGithub size = {90}/></a>
                                <p>Code</p>  
                                </button>                          
                                </a>
                        </div>
                    </div>
                </div>

                <div className='text-2xl font-bold  text-center'>TECH STACK:</div>
    <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-1 text-center py-8 border-b-8 border-l-8 border-r-8 h-[170px] mb-20'>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={html} alt='HTML icon'/>
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={css} alt='HTML icon'/>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={js} alt='HTML icon'/>
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto bg-white' src={netlify} alt='HTML icon'/>
          <p className='my-4'>NETLIFY</p>
        </div>

    </div>
                <div className='text-center font-bold text-4xl text-[#ccd6f6]'>Sorting Visualizer</div>
                <div style={{backgroundImage: `url(${sorting})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover effects*/}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-white tracking-wider'>
                        This is a sorting visualizer that uses a version of the bubble sort method to sort each vertical bar by ascending height. 
                        Please note that this app has sound effects - you may want to turn your speakers down.
                        </span>
                        <div className='pt-8 text-center'>
                            <a>
                                <button onClick={sortingDemoHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><img className='w-18 h-[90px]' src={web} /></a>
                                <p>Site</p> 
                                </button>
                            </a>
                            <a>
                                <button onClick= {sortingCodeHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-black font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><FaGithub size = {90}/></a>
                                <p>Code</p>  
                                </button>                          
                                </a>
                        </div>
                    </div>
                </div>

                <div className='text-2xl font-bold  text-center'>TECH STACK:</div>
                <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-1 text-center py-8 border-b-8 border-l-8 border-r-8 h-[170px] mb-20'>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={html} alt='HTML icon'/>
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={css} alt='HTML icon'/>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={js} alt='HTML icon'/>
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-0 bg-white' src={netlify} alt='HTML icon'/>
          <p className='my-4'>NETLIFY</p>
        </div>

    </div>

                <div className='text-center font-bold text-4xl text-[#ccd6f6]'>Web Portfolio</div>
                <div style={{backgroundImage: `url(${portfolio})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto border-2 border-x-gray-300 content-div'>

                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        This web portfolio showcases my web development skills. View the code below!
                        </span>
                        <div className='pt-8 text-center'>
                            <a>
                                <button onClick= {sortingCodeHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-black font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><FaGithub size = {90}/></a>
                                <p>Code</p>  
                                </button>                          
                                </a>
                        </div>
                    </div>
                </div>

                <div className='text-2xl font-bold  text-center'>TECH STACK:</div>
    <div className='w-full grid grid-cols-4 sm:grid-cols-4 gap-1 text-center py-6 border-b-8 border-l-8 border-r-8 h-[320px] mb-20'>
    <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={html} alt='HTML icon'/>
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={css} alt='HTML icon'/>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={tailwind} alt='HTML icon'/>
          <p className='my-4'>TAILWIND</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={js} alt='HTML icon'/>
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={react} alt='HTML icon'/>
          <p className='my-4'>REACT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto mt-1 bg-white' src={firebase} alt='HTML icon'/>
          <p className='my-5'>FIREBASE</p>
        </div>

    </div>

              <div className='text-center font-bold text-4xl text-[#ccd6f6]'>Shooter Game</div>
                <div style={{backgroundImage: `url(${shooter})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*Hover effects*/}
                    <div className='opacity-0 text-center group-hover:opacity-100'>
                        <span className='text-2xl text-center font-bold text-white tracking-wider'>
                        Before I began my web development journey, I took the python bootcamp on Udemy. After the course, I built 
                        this game in python using pygame. View the code below!
                        </span>
                        <div className='pt-8 text-center'>
                            <a>
                                <button onClick= {shooterCodeHandler} className='text-center rounded-lg px-4 py-3 m-2 bg-black font-bold text-lg hover:animate-bounce 0.2s'>
                                <a><FaGithub size = {90}/></a>
                                <p>Code</p>  
                                </button>                          
                                </a>
                        </div>
                    </div>
                </div>

                <div className='text-2xl font-bold  text-center'>TECH STACK:</div>
    <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-1 text-center py-6 border-b-8 border-l-8 border-r-8 h-[150px] mb-20'>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={python} alt='HTML icon'/>
          <p className='my-4'>PYTHON</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-16 h-[25px] mx-auto' src={pygame} alt='HTML icon'/>
          <p className='pt-8'>PYGAME</p>
        </div>

    </div>

            </div>

      </div>
    </div>
  )
}

export default Projects
