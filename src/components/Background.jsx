import React from 'react'
import Backgroundimg from '../assets/bgimg.jpg'
import styles from '../styles/Home.module.css'

const Background = () => {
  return (
    <div className={styles.background_container}>
        <img className={styles.background_img} src={Backgroundimg} alt='Backgrund'/>
    </div>
  )
}

export default Background