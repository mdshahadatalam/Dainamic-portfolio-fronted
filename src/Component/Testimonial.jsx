import React from 'react'
import fram from '../assets/images/Frame (3).png'
import clint1 from '../assets/images/clinet/Image (6).png'
import clint2 from '../assets/images/clinet/Image (7).png'
import clint3 from '../assets/images/clinet/Image (9).png'

import patter1 from '../assets/images/pattar/Logo (5).png'
import patter2 from '../assets/images/pattar/Logo (6).png'
import patter3 from '../assets/images/pattar/Logo (8).png'
import patter4 from '../assets/images/pattar/Logo (9).png'
import patter5 from '../assets/images/pattar/Logo (10).png'
import patter6 from '../assets/images/pattar/Logo (11).png'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export const Testimonial = () => {

  const [list,setList] = useState([])

  useEffect(()=>{
    async function data(){

      const data = await axios.get('http://localhost:3000/testimonialItem')
      // console.log(data.data);
      setList(data.data)
      
    }
    data()
  },[])


  return (
    <>
    <section id='testimonialSec' className='py-5 font-serif cursor-pointer'>
        <div className="container">
        <div className='flex justify-center align-items-center py-2'>
                    <img className='img-fluid' src={fram} alt="images" />
                    <small className='aboutMe py-2'>Testimonial</small>
                </div>

                <h3 className='servicesHeadin pb-4'>Client Feedback</h3>
            <div className="row">

               {
                list.map((item)=>(
                  <div className="col-lg-4 portRes">

                  <div className='bg-[#FFF5EF] rounded-md shadow-md p-6 portResImg'>
                   <div className='flex align-items-center py-4'>
                      <div> 
                        {
                          item.showImg ? <img className='img-fluid' src={`http://localhost:3000/${item.tesImg}`} alt="images" /> :"No Img"
                        }
                         
                      </div>

                      <div className='ps-3'>
                          <h3 className='siam'>{item.subHead}</h3>
                          <span className='ctoOfficer'>{item.Headers}</span>
                      </div>
                  </div>
                  <p className='clintDami'>{item.paragraph}</p>
                  </div>

              </div>
                ))
               }

               
            </div>
        </div>
    </section>



    <section className='py-5'>
  <div className="container">
    <div className='flex justify-center align-items-center py-2'>
      <img className='img-fluid' src={fram} alt="images" />
      <small className='aboutMe py-2'>Partners</small>
    </div>

    <h3 className='servicesHeadin pb-4'>REPUTED PARTNER</h3>
    <div className="row">
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter1} alt="images" />
      </div>
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter2} alt="images" />
      </div>
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter3} alt="images" />
      </div>
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter4} alt="images" />
      </div>
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter5} alt="images" />
      </div>
      <div className="col-6 col-md-4 col-lg-2">
        <img className='img-fluid shadow-md' src={patter6} alt="images" />
      </div>
    </div>
  </div>
</section>
    </>
  )
}
