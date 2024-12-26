import React from 'react'
import fram from '../assets/images/Frame (3).png'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export const Resume = () => {

    const [list,setList] = useState([])

  useEffect(()=>{
    async function data() {
        let data = await axios.get('http://localhost:3000/resumeItem')
        // console.log(data.data)
        setList(data.data)
    }
    data()
  },[])

  return (
   <section id='resumeSection' className='py-5 font-serif bg-[#FFF5EF] cursor-pointer'>
    <div className="container">

                <div className='flex justify-center align-items-center py-2'>
                    <img className='igm-fluid' src={fram} alt="images" />
                    <small className='aboutMe py-2'>My Resume</small>
                </div>

                <h3 className='servicesHeadin pb-4'>10+ YEARS OF EXPERIENCE</h3>

              

            
           <div className="row">

            <h4 className='education'>Education</h4>
              
            {
                list.map((item)=>(
                    <div className="col-lg-4 portRes">
                    <div className='bg-[#FFFFFF] shadow-md rounded-md p-3 mt-3 portResImg'>
                        <h3 className='BSC py-2'>{item.subHead} </h3>
                        <small className='university py-2'>{item.head}</small>
    
                        <p className='rusumiDami py-2'>{item.paragraph}</p>
                    </div>
                </div>
                ))
             }  
    

        </div>


        <div className="row pt-5">

            <h4 className='education'>Software Skills</h4>
            <div className="col-lg-4 portRes">
                <div className='bg-[#FFFFFF] shadow-md rounded-md p-3 mt-3 portResImg'>
                    <h3 className='BSC py-2'>UI/UX Design</h3>
                    <small className='university py-2'>University of ULAV (2018 - 2022)</small>

                    <p className='rusumiDami py-2'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                </div>
            </div>
            <div className="col-lg-4 portRes">
            <div className='bg-[#FFFFFF] shadow-md rounded-md p-3 mt-3 portResImg'>
                    <h3 className='BSC py-2'>Web Developer </h3>
                    <small className='university py-2'>University of ULAV (2018 - 2022)</small>

                    <p className='rusumiDami py-2'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                </div>
            </div>
            <div className="col-lg-4 portRes">
            <div className='bg-[#FFFFFF] shadow-md rounded-md p-3 mt-3 portResImg'>
                    <h3 className='BSC py-2'>App Development</h3>
                    <small className='university py-2'>University of ULAV (2018 - 2022)</small>

                    <p className='rusumiDami py-2'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                </div>
            </div>

        </div>



        
        <div className="row pt-5">

            <h4 className='education'>Experience</h4>
            <div className="col-lg-4 portRes">
                <div className='bg-[#FFFFFF] shadow-md rounded-md p-3 mt-3 portResImg'>
                    <h3 className='BSC py-2'>Web Developer & Trainer</h3>
                    <small className='university py-2'>Brac Developer Team - (2012 - 2016)</small>

                    <p className='rusumiDami py-2'>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
                </div>
            </div>
            <div className="col-lg-4 portRes">
            <div className='bg-[#FFFFFF] shadow-md rounded-md p-3 mt-3 portResImg'>
                    <h3 className='BSC py-2'>Front-end Developer</h3>
                    <small className='university py-2'>Brane - (2020 - 2011)</small>

                    <p className='rusumiDami py-2'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                </div>
            </div>
            <div className="col-lg-4 portRes">
            <div className='bg-[#FFFFFF] shadow-md rounded-md p-3 mt-3 portResImg'>
                    <h3 className='BSC py-2'>UI/UX Designer </h3>
                    <small className='university py-2'>Google Out Tech - (2017 - Present)</small>

                    <p className='rusumiDami py-2'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                </div>
            </div>

        </div>
    </div>
   </section>
  )
}
