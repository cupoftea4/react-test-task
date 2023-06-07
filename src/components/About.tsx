import AccentButton from "@/shared/ui/AccentButton";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.root} id="about">
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.hashtag}>#contecomagente</p>
          <h2 className={styles.title}>
            Simples, rápido e do seu jeito.
          </h2>
          <p className={styles.desc}>
            Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário que está lendo. Gerar identificação é a chave para <span className="highlight-primary"> conquistar seu cliente.</span>
          </p>
          <AccentButton>Eu quero!</AccentButton>
        </div>
        <div className={styles.right}>
          <div className={styles.aboutImage}>
            <img className={styles.shape} src="/images/burger-shape.png" alt="Burger Shape"/>
            <img className={styles.shape} src="/images/burger-shape.png" alt="Burger Shape"/>
            <img className={styles.shape} src="/images/burger-shape.png" alt="Burger Shape"/>
            <img className={styles.shape} src="/images/burger-shape.png" alt="Burger Shape"/>
            <img className={styles.man} src="/images/man.png" alt="About"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;