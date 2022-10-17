import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Home.module.css'

const Header = (props) => {
    const navigate = useNavigate()

  return (
    <div className={styles.header_container}>
        <div>
            <h1 className={styles.header_logo}>MERNFLIX</h1>
        </div>
        <button className={styles.header_button} onClick={() => navigate(props.login? '/Login' : '/Singup')}>
            {props.login ? 'Login' : 'Singup'}
        </button>
    </div>
  )
}

export default Header