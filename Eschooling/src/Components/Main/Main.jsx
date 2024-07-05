import React from 'react'
import './Main.css'
import main_img from '../../assets/Image1.jpg'
import curve_line from '../../assets/curveline.png'


const Main = () => {
  return (
    <div>
        <img src={main_img} alt="" className="page_img" />  
        <div className="main_end"><h1>Academics
        </h1>
        <img src={curve_line} alt="" className="curve" />
        </div>
    </div>
  )
}

export default Main
