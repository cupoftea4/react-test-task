import styles from "./Header.module.scss";
import Socials from "../shared/ui/Socials";
import Logo from "@/shared/ui/Logo";
import Nav from "@/shared/ui/Nav";
import MenuIcon from "@/assets/MenuIcon";
import { useState } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navRef = useOnClickOutside<HTMLDivElement>(() => setShowMobileMenu(false));

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
        <div className={styles.mobileNav} ref={navRef}>
          <button className={styles.mobileMenuButton} onClick={handleMobileMenuClick}>
            <MenuIcon/>
          </button>
          {showMobileMenu && 
            <nav className={styles.nav}>
              <ul>
                <li className={styles.item}><a href="#advantages">o que fazemos</a></li>
                <li className={styles.item}><a href="#about">como te ajudamos</a></li>
                <li className={styles.item}><a href="#contact">fale conosco</a></li>
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