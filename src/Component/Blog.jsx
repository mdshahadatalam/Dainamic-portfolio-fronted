import React from 'react'
import fram from '../assets/images/Frame (3).png'
import blog1 from '../assets/images/blog/Image (10).png'
import blog2 from '../assets/images/blog/Image (11).png'
import blog3 from '../assets/images/blog/Rectangle 41.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
export const Blog = () => {

    const [list,setList] = useState([])

  useEffect(()=>{
    async function data(){
        let data = await axios.get('https://dainamic-portfolio-backend.vercel.app/blogItem')
        // console.log(data.data);
        setList(data.data)
        
    }
    data()
  },[])
  return (
   <>
   <section id='blog' className='py-5 font-serif'>
    <div className="container">
    <div className='flex justify-center align-items-center py-2'>

        <img className='img-fluid' src={fram} alt="images" />
        <small className='aboutMe py-2'>My Blog</small>
      </div>

          <h3 className='servicesHeadin pb-4'>LATEST BLOG</h3>
        <div className="row">
               
             {
                list.map((item)=>(
                    <div className="col-lg-4">
                    <div className='shadow-md rounded-md mt-3'>
                        <div className='flex justify-center'>
                          {
                            item.showImg ? <img className='img-fluid' src={`https://dainamic-portfolio-backend.vercel.app/${item.blogImg}`} alt="images" /> : "No Img"
                          }
                        

                        </div>
                        <small className='january py-2 px-4 d-inline-block'>{item.data}</small>
    
                        <p className='become py-2 px-4'>{item.subHead}</p>
    
                       <div>
                       <span className='readMore pb-2 ps-4 d-inline-block cursor-pointer hover:underline'>{item.head}</span>
                       </div>
                    </div>
                </div>
                ))
             }

        </div>
    </div>
   </section>
   </>
  )
}
