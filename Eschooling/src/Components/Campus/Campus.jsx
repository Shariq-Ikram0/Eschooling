import React from 'react'
import styles from './Campus.module.css'
import pencil from '../../assets/pencil.svg'
import analist from '../../assets/analist.svg'
import system from '../../assets/system.svg'
import left_img from '../../assets/leftimg.png'


const Campus = () => {
  return (
    <>
      <div className={styles.SecondMain2}>
            <div className={styles.Rightside}>
                
                <h3 className={styles.pencil}> <img src={pencil} alt="" /> Do More, Stress Less</h3>
                <p className={styles.pencilP}>Why I say old chap that is spiffing he legged<br/>
                it in my flat easy peasy.</p>
               <hr/>
                <h3 className={styles.analist}>  <img src={analist} alt="" /> The Business Intelligence</h3>
                <p className={styles.analistP}>Why I say old chap that is spiffing he legged<br/>
                it in my flat easy peasy.</p>
                <hr/>
                <h3 className={styles.system}> <img src={system} alt="" /> System Administration</h3>
                <p className={styles.systemP}>Why I say old chap that is spiffing he legged<br/>
                it in my flat easy peasy.</p>
            </div>
            <div className={styles.Leftside}>
                <img src={left_img} alt="" />
            </div>


        </div>
    </>
  )
}

export default Campus
