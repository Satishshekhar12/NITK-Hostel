import React from 'react'
import styles from '../../styles/navbar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/people">People</Link>
      <Link to="/hostels">Hostels</Link>
    </div>
  )
}

export default NavBar