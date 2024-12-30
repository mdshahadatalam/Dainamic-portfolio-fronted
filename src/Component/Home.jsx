import React from 'react'
import firstImg from '../assets/images/Image (3).png'
import fram from '../assets/images/Frame (3).png'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export const Home = () => {

  const [subHead,setSubHead] = useState("")
  const [head,setHead] = useState("")
  const [paragraph,setParagraph] = useState("")
  const [buttonText,setButtonText] = useState("")
  const [showButton,setShowButton] = useState(false)
  const [bannerImg,setBannerImg] = useState("")

  useEffect(()=>{
    async function data() {
      let data = await axios.get('https://dainamic-portfolio-backend.vercel.app/bannerItem')
      // console.log(data.data.subHead);
      setSubHead(data.data.subHead)
      setHead(data.data.head)
      setParagraph(data.data.paragraph)
      setButtonText(data.data.buttonText)
      setShowButton(data.data.buttonShow)
      setBannerImg(data.data.image)
      
    }
    data()
  },[])

  return (
    <>
    <section id='homeSection' className='py-5'>
      <div className="container">
        <div className="row justify-center align-items-center font-serif">
          <div className="col-lg-6">
           
           <div className='flex align-items-center gap-x-2'> 
           <img  className='img-fluid' src={fram} alt="" />
           <small className='designer'>{subHead} </small>
           </div>

            <h3 className='creative'>{head}</h3>
            <p className='homeDami'>{paragraph}</p>


            {
              showButton && <button 
              className='download font-serif my-2 shadow-md  hover:bg-black hover:text-white'
              >{buttonText}</button>
            }

          

          </div>

          <div className="col-lg-6">
            <img  className='img-fluid shadow-md rounded-sm' src={`https://dainamic-portfolio-backend.vercel.app/${bannerImg}`} alt="images" />
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
