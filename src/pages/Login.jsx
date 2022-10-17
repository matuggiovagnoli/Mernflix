import React, { useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import BackgroundImage from '../components/Background'
import { useNavigate } from 'react-router-dom'
import {firebaseAuth} from '../utils/firebase-config'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
      email:'',
      password:'', 
  })

  const handleLogIn = async () =>{
      try {
          const { email, password } = formValues
          await signInWithEmailAndPassword(firebaseAuth,email,password)
      } catch(err) {
          console.log(err)
      }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate('/')
  })
  
  return (
    <div className={styles.loginContainer}>
      <BackgroundImage/>
      <div className={styles.loginContent}>
        <Header/>
        <div className={styles.loginFormContainer}>
          <div className={styles.loginForm}>
            <div className={styles.LoginTitle}>
              <h3 className={styles.loginH3}> Welcome Back!! </h3>
            </div>
            <div className={styles.loginForm}>
              <input 
                type='email' 
                className={styles.loginInputs} 
                placeholder='Email Adress' 
                name='email' 
                value={formValues.email} 
                onChange={(e) => setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value
                })}
              />
              <input 
                className={styles.loginInputs} 
                type='password'
                placeholder='password' 
                name='password'
                value={formValues.password}
                onChange={(e)=> setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value
                })}
              />
              <button className={styles.loginButton} onClick={() => handleLogIn()}> Log In! </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login