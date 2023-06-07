import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.root}>
      <a href="#advantages">o que fazemos</a>
      <a href="#about">como te ajudamos</a>
      <a href="#contact">fale conosco</a>
    </nav>
  )
}

export default Nav