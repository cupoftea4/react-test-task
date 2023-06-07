import Logo from "@/shared/ui/Logo";
import Nav from "@/shared/ui/Nav";
import Socials from "@/shared/ui/Socials";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
   <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <Logo light/>
          <div className={styles.right}>
            <Nav/>
            <Socials light/>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <h3 className={styles.title}>Receba as novidades do nice</h3>
            <div>
              <input className={styles.input} type="email" placeholder="nome@email.com"/>
              <button className={styles.button}>Inscrever</button>
            </div>
          </form>
        </div>
        <span className={styles.separator}></span>
        <div className={styles.bottom}>
          <p className={styles.copy}>© 2023 - Amy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;