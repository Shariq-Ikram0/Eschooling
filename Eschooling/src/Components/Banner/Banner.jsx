import React from 'react'
import styles from'./Banner.module.css'
const Banner = () => {
  return (
    <>
       <div className={styles.banner}>
                <table className={styles.tab}>
                    <tr  className={styles.succ}>
                        <td>Successfully <br/>Trained</td>
                        <td>Successfully <br/>Trained</td>
                        <td>Successfully <br/>Trained</td>
                        <td>Successfully <br/>Trained</td>
                    </tr>
                    <tr className={styles.numb}>
                        <td >1478</td>
                        <td >1586</td>
                        <td >1489</td>
                        <td >1868</td>
                    </tr>
                    <tr className={styles.enrol} >
                        <td >ENROLLED LEARNERS</td>
                        <td >ENROLLED LEARNERS</td>
                        <td >ENROLLED LEARNERS</td>
                        <td >ENROLLED LEARNERS</td>
                    </tr>


                </table>
            </div>
    </>
  )
}

export default Banner
