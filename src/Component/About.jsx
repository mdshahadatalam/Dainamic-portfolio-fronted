import React from 'react'
import aboutImg from '../assets/images/Image (5).png'
import fram from '../assets/images/Frame (3).png'
import icon from '../assets/images/Icon.png'
import icon2 from '../assets/images/Icon (1).png'
import cheek from '../assets/images/check2-square 1.png'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export const About = () => {

  const [subHead,setSubHead] = useState("")
  const [head,setHead] = useState("")
  const [paragraph,setParagraph] = useState("")
  const [projectNumber,setProjectNumber] = useState("")
  const [experience,setExperience] = useState("")
  const [buttonText,setButtonText] = useState("")
  const [showButton,setShowButton] = useState(false)
  const [img,setImg] = useState("")

   useEffect(()=>{
    async function data(){
      let data = await axios.get('https://dainamic-portfolio-backend.vercel.app/aboutItem')
      console.log(data);
      setSubHead(data.data.subHead)
      setHead(data.data.head)
      setParagraph(data.data.paragraph)
      setProjectNumber(data.data.projectNum)
      setExperience(data.data.experience)
      setButtonText(data.data.buttonText)
      setShowButton(data.data.showButton)
      setImg(data.data.aboutImg)

      
    }
    data()
   },[])


  return (
    <>
    <section id='aboutSection' className='py-5 font-serif tracking-wide'>
        <div className="container">
            <div className="row justify-center align-items-center">

                <div className="col-lg-6">
                <img  className='img-fluid shadow-md rounded-sm' src={`https://dainamic-portfolio-backend.vercel.app/${img}`} alt="image" />
                </div>


                <div className="col-lg-6">
                    <div className='flex align-items-center'>
                    <img className='igm-fluid' src={fram} alt="" />
                    <small className='aboutMe py-2'>{subHead}</small>
                   </div>

                   <h3 className='canDesign '> {head} </h3>
                    <p className='aboutDami'>{paragraph}</p>

              <div className='flex align-items-center gap-x-5 pt-6'>
              <div className='flex align-items-center'>
                <div> <img className='img-fluid' src={icon} alt="" /></div>

                <div className='ps-2'>
                    <span className='number pb-1 d-inline-block'> {projectNumber} +</span>
                    <h4 className='completed'>Complete Project</h4>
                </div>
               </div>


               <div className='flex align-items-center'>
                <div> <img className='img-fluid' src={icon2} alt="" /></div>

                <div className='ps-2'>
                    <span className='number pb-1 d-inline-block'>{experience} +</span>
                    <h4 className='completed'>Year of experience</h4>
                </div>
               </div>

              </div>

              <div className='pt-12'>
                  <div className='flex align-items-center'>
                    <img src={cheek} alt="" />
                    <small className='work ps-2'>Work simple and cline design</small>
                  </div>

                  <div className='flex align-items-center pt-3'>
                    <img src={cheek} alt="" />
                    <small className='work ps-2'>New idea and user friendly design</small>
                  </div>

                 <div className='pt-10'>

                  {
                    showButton && <button className='download font-serif my-2 shadow-md  hover:bg-black hover:text-white '>{buttonText} </button>
                  }

                 

                 </div>

              </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
