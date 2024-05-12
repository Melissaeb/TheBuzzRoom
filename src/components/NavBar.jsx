import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";

// Image imports
import hamburgerIcon from "../assets/hamburger-icon.png";

export default function NavBar() {
  // State to be used to open menu in small screen
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // Sets state to true or not true, depending on the last state
  const toggleMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className={styles.navBar}>

      {/* Logo and Name section on left side of screen */}
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

      {/* Menu icon, navigational links and login on right side of screen */}
      <div className={styles.menu}>

        {/* Hamburger menu icon shows instead of navlinks and login, if screen is small */}
        <div className={styles.menuIconSection}>
          <img
            src={hamburgerIcon}
            alt="Menu icon"
            className={styles.menuIcon}
            onClick={toggleMenu}
            // When clicked, toggles hamburgerOpen to true or false depending on what its last state was.
          />
        </div>

        {/* Navigational links and login button */}
        <div
          // has className of showNavigation if hamburgerOpen is true
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
