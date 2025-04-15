import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'


 const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  },[]);

  return (
    <nav className={`container_box ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/> 
        {/*This is the logo I got it from dm DesignMantic website for free link "https://www.designmantic.com/logo-design/create?design=172854"*/}
        <ul>
            <li><Link to="/" className='btn'>Home</Link></li>
            <li><Link to="/about_me" className='btn'>About Me</Link></li>
            <li><Link to="/faq" className='btn'>FAQ</Link></li>
            <li><Link to="/updates" className='btn'>Updates</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
