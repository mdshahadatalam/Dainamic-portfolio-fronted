import React from 'react'
import { Home } from './Component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Navbar} from './Component/Navbar';
import { FaBeer } from 'react-icons/fa';
import { About } from './Component/About';
import { Services } from './Component/Services';
import { Resume } from './Component/Resume';
import { Portfolio } from './Component/Portfolio';
import { Testimonial } from './Component/Testimonial';
import { Blog } from './Component/Blog';
import { Contact } from './Component/Contact';
import { Footer } from './Component/Footer';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
  <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Resume/>
    <Portfolio/>
    <Testimonial/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  )
}
