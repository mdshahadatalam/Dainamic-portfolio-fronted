import React from 'react'
import logo from '../assets/images/Logo (4).png'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


export const Navbar = () => {
  
  const [list,setList] = useState([])
  const [ButtonText,setButtonText] = useState ("")
  const [buttonShow,setButtonShow] = useState (false)

  useEffect(()=>{
    async function fetchData(){
      let data = await axios.get('http://localhost:3000/navItem')
        setList(data.data.menu.split(","))
        setButtonText(data.data.buttonText)
        setButtonShow(data.data.showButton)
        console.log(data);
        
    }
    fetchData()
  },[])
  return (
    <>
        


<nav className="navbar navbar-expand-lg ">
     <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" 
    type="button"
    data-bs-toggle="offcanvas"
    href="#offcanvasExample"
    role="button"
    aria-controls="offcanvasExample">
      {/* <span className="navbar-toggler-icon"></span> */}
      <span><HiMiniBars3BottomRight /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center text-lg">



        {
          list.map((item)=>(
            <li className="nav-item">
            <a className="nav-link  font-serif " href="#homeSection">{item}</a>
          </li>
          ))
        }

     

        
      
      {/* <li className="nav-item">
          <a className="nav-link  font-serif " href="#aboutSection">About</a>
        </li> */}
      

        
      {/* <li className="nav-item">
          <a className="nav-link  font-serif " href="#serviceSection">Services</a>
        </li> */}
      




      
      {/* <li className="nav-item">
          <a className="nav-link font-serif " href="#resumeSection">Resume</a>
        </li> */}
     

       
       {/* <li className="nav-item">
          <a className="nav-link  font-serif" href="#portfolioSection">Portfolio</a>
        </li> */}

        
       {/* <li className="nav-item">
          <a className="nav-link  font-serif " href="#testimonialSec">Testimonial</a>
        </li> */}

        
       {/* <li className="nav-item">
          <a className="nav-link  font-serif " href="#blog">Blog</a>
        </li> */}

        
      </ul>

      <div>
         {
          buttonShow && 
          <button className='w-[90%] h-10 shadow-md hover:bg-black hover:text-white rounded-md tracking-wide bg-[#FF6B00] font-serif text-white m-2'> {ButtonText} </button>
         }


      </div>

     
     
    </div>
  </div>
</nav>



{/* offcanbas  */}


{/* <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"> <img src={logo} className='img-fluid' alt="" /> </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <div class="dropdown mt-3">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center text-lg">

      <li data-bs-dismiss="offcanvas" className="nav-item">
          <a className="nav-link  font-serif " href="#homeSection">Home</a>
        </li>
     

        
      
      <li data-bs-dismiss="offcanvas" className="nav-item">
          <a className="nav-link  font-serif " href="#aboutSection">About</a>
        </li>
      

        
      <li data-bs-dismiss="offcanvas" className="nav-item">
          <a className="nav-link  font-serif " href="#serviceSection">Services</a>
        </li>
      




      
      <li data-bs-dismiss="offcanvas" className="nav-item">
          <a className="nav-link font-serif " href="#resumeSection">Resume</a>
        </li>
     

       
       <li data-bs-dismiss="offcanvas" className="nav-item">
          <a className="nav-link  font-serif " href="#portfolioSection">Portfolio</a>
        </li>

        
       <li data-bs-dismiss="offcanvas" className="nav-item">
          <a className="nav-link  font-serif " href="#testimonialSec">Testimonial</a>
        </li>

        
       <li data-bs-dismiss="offcanvas" className="nav-item">
          <a className="nav-link  font-serif " href="#blog">Blog</a>
        </li>

        
      </ul>
      <div>
      <a href="#contact"> <button data-bs-dismiss="offcanvas" className='w-24 h-10  hover:bg-black hover:text-white rounded-md tracking-wide
        bg-[#FF6B00] font-serif text-white m-2'>Contact</button></a>
      </div>

    </div>
  </div>
</div> */}

<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
      <img src={logo} className='img-fluid' alt="" />
    </h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div className="dropdown mt-3">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center text-lg">
        <li className="nav-item" data-bs-dismiss="offcanvas">
          <a className="nav-link font-serif" href="#homeSection">Home</a>
        </li>
        <li className="nav-item" data-bs-dismiss="offcanvas">
          <a className="nav-link font-serif" href="#aboutSection">About</a>
        </li>
        <li className="nav-item" data-bs-dismiss="offcanvas">
          <a className="nav-link font-serif" href="#serviceSection">Services</a>
        </li>
        <li className="nav-item" data-bs-dismiss="offcanvas">
          <a className="nav-link font-serif" href="#resumeSection">Resume</a>
        </li>
        <li className="nav-item" data-bs-dismiss="offcanvas">
          <a className="nav-link font-serif" href="#portfolioSection">Portfolio</a>
        </li>
        <li className="nav-item" data-bs-dismiss="offcanvas">
          <a className="nav-link font-serif" href="#testimonialSec">Testimonial</a>
        </li>
        <li className="nav-item" data-bs-dismiss="offcanvas">
          <a className="nav-link font-serif" href="#blog">Blog</a>
        </li>
      </ul>
      <div>
        <a href="#contact">
          <button data-bs-dismiss="offcanvas" className='w-24 h-10 hover:bg-black hover:text-white rounded-md tracking-wide bg-[#FF6B00] font-serif text-white m-2'>
            Contact
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
