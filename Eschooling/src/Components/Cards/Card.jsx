import React from 'react'
import styles from './Card.module.css'

const Card = ({imgCard,title,dic, Arrow}) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={imgCard} alt="" />
        <div className={styles.card_text}>
        <h2>{title}</h2>
        <p>{dic}</p>
        </div>
    </div>
  )
}

export default Card
