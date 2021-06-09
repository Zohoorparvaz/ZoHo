import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Newborn from "../Pages/Newborn";
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Landscape from '../Pages/Landscape'
import styles from './NavBar.module.css'


const Menu = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul className={styles["list-no-decoration"]}>
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/landscape">Landscape</Link>
              </li>
              <li>
                <Link to="/newborn">Newborn</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/men">
              <Men />
            </Route>
            <Route path="/women">
              <Women />
            </Route>
            <Route path="/landscape">
              <Landscape />
            </Route>
            <Route path="/newborn">
              <Newborn />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Menu
