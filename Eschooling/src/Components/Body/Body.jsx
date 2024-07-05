import React from 'react'
import styles from './Body.module.css'
import side_Img from '../../assets/sideimage.png'
import side_logo from '../../assets/logo.png'
import arr from '../../assets/vector.svg'
import message from '../../assets/message.png'

const Body = () => {
  return (
    <div className={styles.side}>
        <img src={side_logo} alt="" className={styles.side_logo} />
      <img src={side_Img} alt="" className={styles.side_img} />
      <div className={styles.side_text}>
        <h1>Welcome to Echooling LMS Platform</h1>
        
        <br/>
        <p className={styles.side_p1} >Education is both the act of teaching knowledge to others and<br/> the act of receiving knowledge from someone else.<br/><br/> <sub>Have questions? <a href="">Get Free Guide</a></sub></p>
        <br/><br/><br/><hr/><br/><br/>
        <p>
        Education also refers to the knowledge received through schooling instruction<br/> and to the institution of teaching as a whole. The main purpose of education<br/> is the integral development of a person.
        
        </p>
        <button className={styles.btn}>Read More   <img src={arr} alt="" /> </button>
        <div className={styles.btn2}>  <img src={message} alt="" /> <strong>Get support@react.com</strong>   </div>
        </div>
      
    </div>
  )
}

export default Body
