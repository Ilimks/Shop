import React from 'react'
import styles from './SearchInput.module.scss'

const SearchInput = () => {
  return (
    <input type="text" className={styles.search_input} placeholder="Search for products..."/>
  )
}

export default SearchInput