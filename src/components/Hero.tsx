import AccentButton from "@/shared/ui/AccentButton";
import styles from "./Hero.module.scss";
import SecondaryButton from "@/shared/ui/SecondaryButton";

const Hero = () => {
  return (
    <section className={styles.root} id="hero">
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>Um slogan chamativo aqui.</h1>
          <p className={styles.desc}>
            Um texto sobre o seu produto ou serviço. Explique  
            <span className="highlight-accent"> porque ele é valioso</span> e direcione o usuário ao próximo objetivo.
          </p>
          <div className={styles.buttons}>
            <AccentButton>Eu quero!</AccentButton>
            <SecondaryButton>Conhecer mais</SecondaryButton>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.heroImage}>
            <img className={styles.man} src="/images/hero-image.png" alt="Hero"/>
            <img className={styles.shape} src="/images/burger-shape.png" alt="Burger Shape"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;