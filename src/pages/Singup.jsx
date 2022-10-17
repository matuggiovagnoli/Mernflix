import React, { useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import BackgroundImage from '../components/Background'
import { useNavigate } from 'react-router-dom'
import {firebaseAuth} from '../utils/firebase-config'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'


const Singup = () => {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)

    const [formValues, setFormValues] = useState({
        email:'',
        password:'', 
    })

    const changeGrid = (showPassword) =>{
        if(showPassword === true) {
            return '1fr 1fr'
        }else {
            return '2fr 1fr'
        }
    }

    const handleSingIn = async () =>{
        try {
            const { email, password } = formValues
            await createUserWithEmailAndPassword(firebaseAuth,email,password)
        } catch(err) {
            console.log(err)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate('/')
    })

  return (
    <div className={styles.singup_container}>
        <BackgroundImage/>
        <div className={styles.singup_content}>
            <Header login/>
            <div className={styles.singup_body}>
                <div className={styles.singup_titles}>
                    <h1 className={styles.singup_h1}>Unlimited movies, TV shows, series, documentals and more</h1>
                    <h4>Watch anywhere. Cancel anytime</h4>
                    <h6>Are you ready to Watch? Enter your E-mail to create o reset your membership</h6>
                </div>
                <div className={styles.singup_form} style={{gridTemplateColumns: changeGrid(showPassword) }} >
                    <input 
                        className={styles.singup_input} 
                        type="email" 
                        placeholder='Email Adress' 
                        name='email' 
                        value={formValues.email} 
                        onChange={(e) => setFormValues({
                            ...formValues,
                            [e.target.name]: e.target.value
                        })}/>
                    {
                        showPassword && (
                            <input 
                                className={styles.singup_input} 
                                type='password'
                                placeholder='password' 
                                name='password'
                                value={formValues.password}
                                onChange={(e)=> setFormValues({
                                    ...formValues,
                                    [e.target.name]: e.target.value
                                })}/>
                        )
                    }
                    {
                        !showPassword && (
                            <button onClick={() => setShowPassword(true)} className={styles.singup_button}> Get Started! </button>
                        )
                    }
                </div>
                <button className={styles.singup_button} onClick={() => handleSingIn()}> Sing Up </button>
            </div>
        </div>
    </div>
  )
}

export default Singup
