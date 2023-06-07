import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.root}>
      <a href="#">o que fazemos</a>
      <a href="#">como te ajudamos</a>
      <a href="#">fale conosco</a>
    </nav>
  )
}

export default Nav