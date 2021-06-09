import React, { useState } from 'react'
import zohobw from '../images/ZOHOBW.svg'
import Menu from './Menu';
import styles from './NavBar.module.css'

function NavBar() {
  const [isActive, setActive] = useState("true");
  const [menu, setMenu] = useState()

  const handleMenuClick = () => {
    setActive((activity) => !activity);
    setMenu(<Menu />)
  }
  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["menu-btn-container"]} onClick={handleMenuClick}>
          <div className={isActive ? styles.bar1 : styles.changebar1}></div>
          <div className={isActive ? styles.bar2 : styles.changebar2}></div>
          <div className={isActive ? styles.bar3 : styles.changebar3}></div>
        </div>
        <img className={styles.image} src={zohobw} alt="ZoHo logo" width="100" height="100" />
      </div>
      <div>
        {!isActive && menu}
      </div>
    </>
  )
}

export default NavBar