import React, {useState} from 'react'
import mountains from '../assets/mountains.gif'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.jpg'
import bulma from '../assets/bulma.jpg'
import node from '../assets/node.jpg'
import express from '../assets/express.jpg'
import python from '../assets/python.jpg'
import mongo from '../assets/mongo.png'
import azureSQL from '../assets/azureSQL.jpg'
import firebase from '../assets/firebase.jpg'
import mySQL from '../assets/mySQL.jpg'
import azure from '../assets/azure.jpg'
import uiPath from '../assets/uiPath.jpg'
import pythonCert from '../documents/pythonCertificate.pdf'
import webCert from '../documents/webDeveloperCertificate.pdf'
import reactCert from '../documents/reactCertificate.pdf'
import gitCert from '../documents/gitCertificate.pdf'
import microsoftCert from '../documents/microsoftCertificate.pdf'
import powerPlatform from '../assets/powerPlatform.jpg'
import github from '../assets/github.png'
import git from '../assets/git.jpg'

const Summary = () => {

const [experience, setExperience] = useState(true)
const [education, setEducation] = useState(false)
const [skills, setSkills] = useState(false)
const [certificates, setCertificates] = useState(false)

const experienceHandler = () => {
  setExperience(true);
  setEducation(false);
  setSkills(false);
  setCertificates(false);
}

const educationHandler = () => {
  setExperience(false);
  setEducation(true);
  setSkills(false);
  setCertificates(false);
}

const skillsHandler = () => {
  setExperience(false);
  setEducation(false);
  setSkills(true);
  setCertificates(false);
}

const certificatesHandler = () => {
  setExperience(false);
  setEducation(false);
  setSkills(false);
  setCertificates(true);
}

const webCertHandler = () => {
  window.open(webCert)
}

const reactCertHandler = () => {
  window.open(reactCert)
}

const gitCertHandler = () => {
  window.open(gitCert)
}

const pythonCertHandler = () => {
  window.open(pythonCert)
}

const microsoftCertHandler = () => {
  window.open(microsoftCert)
}


  return (
    <div className='flex flex-wrap pt-10 mt-6'>
         <div className='w-full flex justify-center items-center pt-2 pb-0 text-gray-300 bg-[#0a192f] summary-div'>
         <div className='w-full h-[100px] flex justify-center items-center text-center mt-0 pb-0 mb-10'>
      <ul className='flex justify-center items-center w-full h-[200px] pt-8 pb-0 list-div'>
            <li  className= {experience ?'text-center text-4xl mr-5 pr-2 border-4 border-indigo-400 w-[200px] bg-purple-900 hover:bg-[#334333]' : 'text-center text-4xl mr-5 pr-2 border-4 border-pink-600 w-[200px] hover:bg-[#334333]' }><button onClick={experienceHandler}>Experience</button></li>
            <li className={education ?'text-center text-4xl mr-5 pr-2 border-4 border-indigo-400 w-[200px] bg-purple-900 hover:bg-[#334333]' : 'text-center text-4xl mr-5 pr-2 border-4 border-pink-600 w-[200px] hover:bg-[#334333]' }><button onClick={educationHandler}>Education</button></li>
            <li className={skills ?'text-center text-4xl mr-5 pr-2 border-4 border-indigo-400 w-[200px] bg-purple-900 hover:bg-[#334333]' : 'text-center text-4xl mr-5 pr-2 border-4 border-pink-600 w-[200px] hover:bg-[#334333]' }><button onClick={skillsHandler}>Skills</button></li>
            <li className={certificates ?'text-center text-4xl mr-5 pr-2 border-4 border-indigo-400 w-[200px] bg-purple-900 hover:bg-[#334333]' : 'text-center text-4xl mr-5 pr-2 border-4 border-pink-600 w-[200px] hover:bg-[#334333]' }><button onClick={certificatesHandler}>Certificates</button></li>
        </ul>
       </div>
       </div>

 {experience ? (
<div className='w-full h-fit flex justify-center items-center pt-0 mt-0 pl-10 info-div'>
    <div className='w-full h-fit bg-[#0a192f] flex justify-center items-center mr-10 mt-20 border-4 border-pink-500 text-white'>

    <div className='w-full justify-start items-start ml-10 mt-5'>

      <div className='w-full h-[25x] justify-start items-start text-2xl'>
      APPLICATION INNOVATIONS JUNIOR DEVELOPER
      </div>

      <div className='w-full h-[25x] justify-start items-start italic'>
      Watson-Marlow Fluid Technology Solutions (WMFTS) UK
      </div>

      <div className='w-fit h-[25x] justify-start items-start mb-1'>
      Rochester Hills, MI          October 2021 - present
      </div>


    <ul className='w-fit h-fit text-left dev-div'>
        <li>Transformed productivity and efficiency of processes in numerous departments across multiple countries by leading the 
              implementation of business solutions through Microsoft Power Platform</li>
              <p className='ml-10 mt-1'>○   Power Apps: created custom user-interface applications that streamlined departmental operations and managed data sources, such as Sharepoint, Dataverse, Azure DevOps</p>
              <p className='ml-10'>○   Power BI: created interactive dashboards and reports from multiple data sources, such as Sharepoint, Azure, MySQL</p>
              <p className='ml-10'>○   Power Automate: designed workflows to automate repetitive tasks and streamline business processes </p>
              <p className='ml-10 mb-1'>○   Power Pages: designed external-facing websites using HTML, CSS, and JS to increase customer ability to access and analyze customer-related information</p>
        <li className='mb-1'>Facilitated the expansion and utilization of the Microsoft Power Platform by conducting regular training sessions at numerous domestic and international sites 
          that resulted in the creation of over 45 citizen developers throughout the business community</li>
        <li>Increased efficiency and optimized processes in various departments by designing complex automations with UiPath</li>
              
    </ul>


    <div className='w-full h-[25x] justify-start items-start mt-5 text-2xl'>
      GLOBAL GRADUATE ENGINEER (GLOBAL GRADUATE ENGINEERING DEVELOPMENT PROGRAM)
      </div>

      <div className='w-full h-[25x] justify-start items-start italic mb-1'>
      Watson-Marlow Fluid Technology Solutions (WMFTS)/Spirax Sarco UK
      </div>


      <ul className='w-fit h-fit text-left dev-div'>
        <li>Two year program consisting of four six-month rotations (including one international placement) 
              emphasizing collaboration, critical thinking, and practical problem solving over four key areas of business</li>
        <li className='italic mb-1'>Sales Rotation: Spirax Sarco UK</li>
        <div className='w-fit h-[25x] justify-start items-start ml-4 mb-1'>
          Cheltenham, UK  March 2021 – September 2021
      </div>
              <p className='ml-10'>○   Streamlined and enhanced price planning and forecasting across EMEA division by developing, testing, and implementing Microsoft 
                                          Power Apps and Power BI applications related to value pricing, forecasting, and activity tracking</p>
              <p className='ml-10 mb-2'>○   Trained sales engineers and managers to use Power Apps and Power BI applications by conducting informational sessions and providing continuous support</p>

          <li className='italic'>Technical Rotation: Spirax Sarco UK</li>
          <div className='w-fit h-[25x] justify-start items-start ml-4 mb-1'>
          Rochester Hills, MI September 20 2020 – March 2021
          </div>
              <p className='ml-10'>○   Ensured the improvement and replication of sales successes and continuous development of sales engineers by designing, testing, and implementing global sales success platform through SharePoint </p>
              <p className='ml-10 mb-2'>○   Trained senior sales engineers to use sales success platform by developing instructional manuals and conducting informational sessions</p>
              
          <li className='italic'>Business Rotation: Aflex Hose USA, LLC (WMFTS)</li>
          <div className='w-fit h-[25x] justify-start items-start ml-4 mb-1'>
          Pipersville, PA  March 2020 - September 2020
          </div>
              <p className='ml-10 mb-2'>○   Led company transition to Microsoft Dynamics AX Software by managing transition process and designing individualized training tutorials</p>

          <li className='italic'>Operations Rotation: Aflex Hose USA, LLC (WMFTS)</li>
          <div className='w-fit h-[25x] justify-start items-start ml-5 mb-1'>
          Pipersville, PA  September 2019 - March 2020
          </div>
              <p className='ml-10'>○  Led and implemented efficiency program after conducting an in-depth analysis that identified key operational problems</p>
              <p className='ml-10 mb-2'>○  Ensured continuous operational improvement by analyzing key performance indicators (such as production, quality, and safety) and designing interventions based on the data</p>

       </ul>



    </div>

    </div>
</div>
) : ''
}



{education ? (
  <div className='w-full h-fit flex justify-center items-center pt-0 mt-10 pl-10 info-div'>
    <div className='w-fit h-fit bg-[#0a192f] flex justify-center items-center mr-10 mt-20 border-4 border-pink-500 text-white'>

    <div className='w-full justify-center items-center ml-10 mr-10 mb-7'>

      <div className='w-full h-[25x] justify-start items-start text-lg'>
      University of Michigan          
      </div>

      <div className='w-full h-[25x] justify-start items-start italic'>
      Bachelor of Science in Physics (Spanish Minor)
      </div>

      <div className='w-fit h-[25x] justify-start items-start'>
      Ann Arbor, MI          
      </div>

      <div className='w-fit h-[255x] justify-start items-start'>
      Graduated: December 2018
      </div>

      </div>


      <div className='w-full justify-center items-center mr-10 mt-5'>

      <div className='w-full h-[25x] justify-start items-start text-lg'>
      Universidad de Salamanca (6-week Study Abroad Program)         
      </div>

      <div className='w-full h-[25x] justify-start items-start italic'>
      Center for Global and Intercultural Studies (CGIS)
      </div>

      <div className='w-fit h-[25x] justify-start items-start'>
      Salamanca, Spain        
      </div>

      <div className='w-fit h-[25x] justify-start items-start mb-6'>
      July 2016 - August 2016
      </div>

      </div>

    </div>
</div>
) : ''}




{skills ? (
<div  className='w-full h-fit flex justify-center items-center pt-0 mt-10 pl-10 info-div'>
    <div className='w-full h-fit bg-[#0a192f] flex justify-center items-center mr-10 mt-20 border-4 border-pink-500 text-white'>


    {/*Container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

  <div className='w-full text-center'>FRONT END</div>


      <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-12 mx-auto' src={html} alt='HTML icon'/>
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-12 mx-auto' src={css} alt='HTML icon'/>
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-12 mx-auto' src={js} alt='HTML icon'/>
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-12 mx-auto' src={react} alt='HTML icon'/>
          <p className='my-4'>REACT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-16 mx-auto mt-1' src={node} alt='HTML icon'/>
          <p className='my-5'>NODE.JS</p>
        </div>

        </div>
        <div className='w-full text-center'>BACK END</div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8'>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-16 mx-auto' src={express} alt='HTML icon'/>
          <p className='my-4'>EXPRESS.JS</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={python} alt='HTML icon'/>
          <p className='my-3'>PYTHON</p>
        </div>
        </div>

        <div className='w-full text-center'>CSS FRAMEWORKS</div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={tailwind} alt='HTML icon'/>
          <p className='my-4'>TAILWIND</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={bootstrap} alt='HTML icon'/>
          <p className='my-3'>BOOTSTRAP</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-10 mx-auto' src={bulma} alt='HTML icon'/>
          <p className='my-3'>BULMA</p>
        </div>
        </div>

        <div className='w-full text-center'>DATABASES</div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-12 mx-auto' src={mongo} alt='HTML icon'/>
          <p className='my-4'>MONGODB</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-12 mx-auto' src={azureSQL} alt='HTML icon'/>
          <p className='my-4'>AZURE SQL DATABASE</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-12 mx-auto' src={firebase} alt='HTML icon'/>
          <p className='my-4'>FIREBASE</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-16 mx-auto mt-1' src={mySQL} alt='HTML icon'/>
          <p className='my-6'>MYSQL</p>
        </div>
        </div>

        <div className='w-full text-center'>OTHER SKILLS</div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-16 mx-auto' src={git} alt='HTML icon'/>
          <p className='my-4'>GIT</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-16 mx-auto' src={github} alt='HTML icon'/>
          <p className='my-4'>GITHUB</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-16 mx-auto' src={azure} alt='HTML icon'/>
          <p className='mt-7 mb-4'>AZURE</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-16 mx-auto mt-2' src={uiPath} alt='HTML icon'/>
          <p className='mt-12 mb-10'>UIPATH</p>
        </div>
        <div className='shadow-md hover:scale-110 duration-500'>
          <img className='w-12 mx-auto' src={powerPlatform} alt='HTML icon'/>
          <p className='my-3'>MICROSOFT POWER PLATFORM</p>
        </div>
        </div>

      








      </div>







        
    </div>
</div>
) : ''}





{certificates ? (

  <div className='w-full h-fit flex justify-center items-center pt-0 mt-10 pl-10 info-div'>
    <div className='w-fit h-fit bg-[#0a192f] flex justify-center items-center mr-10 mt-20 border-4 border-pink-500 text-white'>

    <div className='w-full justify-center items-center ml-10 mr-10 mt-5'>

    <div className='w-full h-[25x] justify-start items-start text-lg'>
    ONLINE LEARNING:         
    </div>

<ul>
    <li>
    <button onClick={webCertHandler} className='w-fit h-[25x] justify-start items-start text-left ml-0 underline hover:text-pink-300'>
    <p>○ The Web Developer Bootcamp 2022 - Udemy</p>
    </button>
    </li>
    <li>
    <button onClick={reactCertHandler} className='w-fit h-[25x] justify-start items-start text-left ml-0 underline hover:text-pink-300'>
    <p>○ React - The Complete Guide (incl Hooks, React Router, Redux) - Udemy</p>
    </button>
    </li>
    <li>
    <button onClick={gitCertHandler} className='w-fit h-[25x] justify-start items-start text-left ml-0 underline hover:text-pink-300'>
    <p>○ Master: Git and GitHub in 5 Days: Go from Zero to Hero - Udemy</p>
    </button>
    </li>
    <li>
    <button onClick={pythonCertHandler} className='w-fit h-[25x] justify-start items-start text-left ml-0 underline hover:text-pink-300'>
    <p>○ The Complete Python Bootcamp From Zero to Hero in Python - Udemy</p>
    </button>
    </li>
    </ul>

      </div>


      <div className='w-full justify-center items-center ml-10 mr-10 mb-0 h-[180px]'>

    <div className='w-full h-[25x] justify-start items-start text-lg'>
    MICROSOFT:         
    </div>
    
<ul>
    <li>
    <button onClick={microsoftCertHandler} className='w-fit h-[25x] justify-start items-start text-left ml-0 underline hover:text-pink-300'>
    <p>○ Microsoft Power Platform Fundamentals</p>
    </button>
    </li>
    </ul>

      </div>

    </div>
</div>

) : ''}




</div>





  )
}

export default Summary
