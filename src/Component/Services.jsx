import React from 'react'
import serIcon from '../assets/images/srevice/Icon.png'
import serIcon2 from '../assets/images/srevice/Icon (2).png'
import serIcon3 from '../assets/images/srevice/Icon (3).png'
import serIcon4 from '../assets/images/srevice/Icon (4).png'
import serIcon5 from '../assets/images/srevice/Icon (5).png'
import serIon6 from '../assets/images/srevice/Icon (6).png'
import serIcon7 from '../assets/images/srevice/Icon (7).png'
import serIcon8 from '../assets/images/srevice/Icon (8).png'
import fram from '../assets/images/Frame (3).png'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export const Services = () => {

    const [list,setList] = useState([])


    useEffect(()=>{
      async  function data(){
            let data = await axios.get('http://localhost:3000/serviceItem')
            // console.log(data.data);
            setList(data.data)
        }
        data()
    },[])
  return (
    <>
    <section id='serviceSection' className='py-5 font-serif cursor-pointer'>
        <div className="container">

              <div className='flex justify-center align-items-center py-2'>
                    <img className='igm-fluid' src={fram} alt="images" />
                    <small className='aboutMe py-2'>My Service</small>
                </div>

                <h3 className='servicesHeadin pb-4'>Services I offer</h3>

            <div className="row">


                {list.map((item)=>(
                     <div className="col-lg-3 portRes">
                     <div className='shadow-md hover:bg-[#FFF5EF]  text-center p-3 rounded-md mt-3 portResImg'>
 
                         <div className='flex justify-center'>
                            {item.showImg ?  <img className='img-fluid py-3' src={`http://localhost:3000/${item.serImg}`} alt="images" /> : <div className='w-[83px] h-[83px] bg-slate-200 d-flex align-items-center justify-center'> No Img</div>}

                

                         </div>
                         <h3 className='Ui'>{item.subHead}</h3>
                         <p className='serDami'>{item.head} </p>
                     </div>
                 </div>
                
                ))}

        

            </div>


            {/* <div className="row pt-5">
                <div className="col-lg-3">
                    <div className='shadow-md bg-white text-center p-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIcon5} alt="images" />
                        </div>
                        <h3 className='Ui'>SEO Optimisation</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
                <div className="col-lg-3 portRes">
                    <div className='shadow-md bg-white text-center p-2 py-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIon6} alt="images" />
                        </div>
                        <h3 className='Ui'>WordPress Developer</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
                <div className="col-lg-3 portRes">
                    <div className='shadow-md bg-white text-center p-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIcon7} alt="images" />
                        </div>
                        <h3 className='Ui'>App Development</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
                <div className="col-lg-3 portRes">
                    <div className='shadow-md bg-white text-center p-3 rounded-md mt-3 portResImg'>

                        <div className='flex justify-center'>
                        <img className='img-fluid py-3' src={serIcon8} alt="images" />
                        </div>
                        <h3 className='Ui'>Business Strategy</h3>
                        <p className='serDami'>Hen our power of choice is untrammelled and when nothing prevents our being able</p>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
    </>
  )
}
