import React from 'react'
import zohobw from '../images/ZOHOBW.svg'
import styles from './NavBar.module.css'
import Menu from '../Components/Menu'


function NavBar() {
  return (
    <div className={styles["main-container"]}>
      <Menu className={styles.menu} />
      <img className={styles.image} src={zohobw} alt="ZoHo logo" width="100" height="100" />
    </div>
  )
}

export default NavBar