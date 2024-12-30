import React from 'react'
import fram from '../assets/images/Frame (3).png'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const Portfolio = () => {
    const [list,setList] = useState([])


useEffect(()=>{
    async function data(){
        let data = await axios.get('https://dainamic-portfolio-backend.vercel.app/portItem')
        console.log(data);
        setList(data.data)
        
    }
    data()
},[])

  return (
    <>
    <section id='portfolioSection' className='py-5 font-serif'>
    <div className="container">
        <div className='text-center py-2'>
            <img className='img-fluid' src={fram} alt="Portfolio Frame" />
            <small className='aboutMe py-2'>My Portfolio</small>
        </div>

        <h3 className='servicesHeadin pb-4 text-center'>VISIT MY PORTFOLIO</h3>

        <div className="row portfolioRes">

            {
                list.map((item)=>(
                    <div className="col-12 col-sm-6 col-lg-4 portRes">
                    <img className='img-fluid mt-3 shadow-md portResImg' src={`https://dainamic-portfolio-backend.vercel.app/${item.portImg}`} alt="Portfolio Item 1" />
                </div>
                ))
            }
           
        </div>

       
    </div>
</section>
    </>
  )
}
