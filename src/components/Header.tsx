import styles from "./Header.module.scss";
import Socials from "../shared/ui/Socials";
import Logo from "@/shared/ui/Logo";
import Nav from "@/shared/ui/Nav";
import MenuIcon from "@/assets/MenuIcon";
import { useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenuClick = () => {
    setShowMobileMenu(showMobileMenu => !showMobileMenu);
  }


  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <Logo/>
        <div className={styles.right}>
          <Nav/>
          <Socials/>
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.mobileNav}>
          <button className={styles.mobileMenuButton} onClick={handleMobileMenuClick}>
            <MenuIcon/>
          </button>
          {showMobileMenu && 
            <nav className={styles.nav}>
              <ul>
                <li className={styles.item}><a href="#">Home</a></li>
                <li className={styles.item}><a href="#">Sobre</a></li>
                <li className={styles.item}><a href="#">Contato</a></li>
              </ul>
            </nav>
          }
        </div>
        <Logo/>
        <Socials/>
      </div>
    </header>
  )
}

export default Header;