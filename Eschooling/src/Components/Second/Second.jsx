import React from 'react'
import curve_line from '../../assets/curveline.png'
import styles from './Second.module.css' 

const Second = ({text}) => {
  return (
    <>
      <div className={styles.SecondMain}>
        <h1>{text}</h1>
        <img src={curve_line} alt="" className={styles.curve} />
        </div>
        
    </>
  )
}

export default Second
