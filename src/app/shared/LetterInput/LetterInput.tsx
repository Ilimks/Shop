import React from 'react'
import styles from './LetterInput.module.scss'

const LetterInput = () => {
  return (
    <div>       
       <input type="text" className={styles.letter} placeholder="Subscribe to Newsletter"/>
    </div>
  )
}

export default LetterInput



