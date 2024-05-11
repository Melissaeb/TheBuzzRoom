import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

import hamburgerIcon from "../assets/hamburger-icon.png";
import { useState } from "react";

export default function NavBar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoName}>
        <img
          className={styles.logo}
          // src="/logo-no-background.png"
          src="/edited-bee-no-background.png"
          alt="Marking Association New Zealand Logo"
        />
        <h1 className={styles.companyName}>
          The Buzz Room
          {/* Option: Marketing Association New Zealand */}
        </h1>
      </div>

      <div className={styles.menu}>
        <div className={styles.menuIconSection}>
          <img
            src={hamburgerIcon}
            alt="Menu icon"
            className={styles.menuIcon}
            onClick={toggleMenu}
          />
        </div>

        <div
          className={`${styles.navigation} ${
            hamburgerOpen ? styles.showNavigation : ""
          }  `}
        >
          <ul className={styles.navLinks}>
            <li className={styles.listItem}>
              <Link className={styles.link}>Industry</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link}>Member Resources</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.link}>About Us</Link>
            </li>
          </ul>
          <button className={styles.loginBtn}>Login</button>
        </div>
      </div>
    </nav>
  );
}
