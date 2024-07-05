import React from 'react'
import './Navbar.css'
import image_logo from '../../assets/logoo.png'
import search_img from '../../assets/vector5.svg'
// import call_logo from '../../assets/vector4.svg'
// import email_logo from '../../assets/vector2.svg'


const Navbar = () => {
  return (
    
    <div className='navbar'>
        {/* <div className='header'>
            <img src={call_logo} alt="" className="call" />
            <span>+923700153404</span>
            <img src={email_logo} alt="" className="email" />
            <span className="mail">shariqikram@gmail.com</span>
        </div> */}
    
<img className='logo' src={image_logo} alt="" />

     <ul>
        <li>Home</li>
        <li>Pages</li>
        <li>Course</li>
        <li>Blog</li>
        <li>Contact</li>
     </ul>
     <div className='Search-box'>
        <input type="text" placeholder='Search' />
        <img src={search_img} alt="" />
     </div>
     <div className="main-image">
     </div>
    </div>
  )
}

export default Navbar
