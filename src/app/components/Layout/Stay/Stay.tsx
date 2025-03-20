import React from 'react'
import styles from './Stay.module.scss'
import EmailInput from '@/app/shared/EmailInput/EmailInput'
import LetterInput from '@/app/shared/LetterInput/LetterInput'
const Stay = () => {
  return (
    <section className={styles.content}>
        <div className="container">
            <div className={styles.description}>
         <div className={styles.top}>
            <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
         </div>
         <div className={styles.bottom}>
           <EmailInput/>
           <LetterInput/>
         </div>
         </div>
         </div>
    </section>
  )
}

export default Stay
