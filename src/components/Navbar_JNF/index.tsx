import React from 'react'
import styles from './Navbar_JNF.module.scss'
import logo from '../../assets/img/clg_logo.jpg'

export default function NavbarJNF() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="college logo" />
      </div>
      <div className={styles.heading}>NIT Hamirpur Placement Website</div>
    </div>
  )
}
