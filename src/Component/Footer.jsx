import React from 'react'
import logo from '../assets/images/others/Logo (4).png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

export const Footer = () => {
  return (
    <>
    <section className='py-5 font-serif bg-[#101010] text-[#FFFFFF]'>
        <div className="container">
            <div className="row pb-5">
                <div className="col-lg-4">
                    <div>
                        <img className='pt-5' src={logo} alt="logo" />

                    <p className='footerDami pt-4'>At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati </p>

                    <span className='footerEmail pt-4 d-inline-block'>credesign@gmail.com</span>
                    </div>
                </div>
                <div className="col-lg-2">

                    <div className='pt-5 ps-2'>
                        <h4 className='explore'>Explore Link</h4>

                        <span className='footerLi py-2' >About</span> <br />
                        <span className='footerLi py-2' >Resume</span> <br />
                        <span className='footerLi py-2' >Portfolio</span> <br />
                        <span className='footerLi py-2' >Blog</span>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className='pt-5 ps-2'>
                        <h4 className='explore'>My Services</h4>

                        <span className='footerLi py-2' >UI/UX Design</span> <br />
                        <span className='footerLi py-2' >Mobile App</span> <br />
                        <span className='footerLi py-2' >Graphics Design</span> <br />
                        <span className='footerLi py-2' >Web Developer</span>
                    </div>
                </div>
                <div className="col-lg-4">

                    <div className='pt-5 ps-2'>
                        <h4 className='explore'>Follow me</h4>


                        <div className='d-flex pt-3'>
                            <div><span className='w-[42px] h-[42px] shadow-md rounded-md bg-[#FF6B00] d-inline-block d-flex text-2xl my-2 mx-2 hover:bg-white hover:text-black justify-center align-items-center text-[#FFFFFF]'><FaFacebookF /></span></div>
                            <div><span className='w-[42px] h-[42px] shadow-md rounded-md bg-[#FF6B00] d-inline-block d-flex text-2xl my-2 mx-2 hover:bg-white hover:text-black justify-center align-items-center text-[#FFFFFF]'><FaTwitter /></span></div>
                            <div><span className='w-[42px] h-[42px] shadow-md rounded-md bg-[#FF6B00] d-inline-block d-flex text-2xl my-2 mx-2 hover:bg-white hover:text-black justify-center align-items-center text-[#FFFFFF]'><FaBasketballBall /></span></div>
                            <div><span className='w-[42px] h-[42px] shadow-md rounded-md bg-[#FF6B00] d-inline-block d-flex text-2xl my-2 mx-2 hover:bg-white hover:text-black justify-center align-items-center text-[#FFFFFF]'><FaBehance /></span></div>
                        </div>

                        <div className='d-flex align-items-center pt-4'>
                            <div><span className='text-2xl text-[#FF6B00]'><IoLocationOutline /></span></div>
                            <div>
                                <span className='dog ps-2'>202 Dog Hill Lane Beloit, KS 67420</span>
                            </div>
                        </div>


                        <div className='d-flex align-items-center pt-4'>
                            <div><span className='text-2xl text-[#FF6B00]'><FiPhoneCall /></span></div>
                            <div>
                                <span className='dog ps-2'>1-800-915-6270</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
         </div>
         <hr />

         <div className="container pt-3">
            <div className='d-flex justify-between'>
                <div> <span className='lastDs'>All rights reserved
                2023 Credesign</span></div>

                <div className='d-flex gap-x-8'>
                    <div><span className='lastDs'>Terms & Condition</span></div>
                    <div><span className='lastDs'>Privacy policy</span></div>
                </div>
            </div>
         </div>
    </section>


    
    </>
  )
}
