import React from 'react'
import styles from '../../styles/common/navbar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.link}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/people">People</Link>
        <Link to="/hostels">Hostels</Link>
        <Link to="/gallery">Gallery</Link>
        </div>
    </div>
  )
}

export default NavBar