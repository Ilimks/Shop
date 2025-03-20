import React from 'react'
import styles from './EmailInput.module.scss'
const EmailInput = () => {
  return (
    <div>
        <input type="text" className={styles.email} placeholder="Enter your email address"/>
    </div>
  )
}

export default EmailInput
