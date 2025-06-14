import React from 'react'
import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.navbarLogo}>
        <h1>NITK Hostels</h1>
      </div> */}
      {/* <div className={styles.navbarLinks}> */}
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/">Something</Link>
    <Link to="/">Something Else</Link>
      {/* </div> */}
    </div>
  )
}

export default NavBar