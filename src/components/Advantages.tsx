import PlusIcon from "@/assets/PlusIcon";
import Separator from "@/shared/ui/Separator";
import styles from "./Advantages.module.scss";

const Advantages = () => {
  return (
    <section className={styles.root} id="advantages">
      <div className={styles.container}>
        <div className={styles.top}>
         <h2>Um subtítulo para quem rolou até aqui!</h2>
          <Separator />
          <p className={styles.desc}>
            Aproveite esta seção para destacar os benefícios do seu produto ou serviço. Palavras-chave ajudam no SEO.
          </p> 
        </div>
        
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.icon} src="/images/target.png" alt="Advantage Icon"/>
            <h3 className={styles.title}>Rápido</h3>
            <p className={styles.desc}>
              Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
            </p>
            <div className={styles.plus}>
              <button><PlusIcon /></button>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.icon} src="/images/coin.png" alt="Advantage Icon"/>
            <h3 className={styles.title}>Do seu jeito</h3>
            <p className={styles.desc}>
              Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
            </p>
            <div className={styles.plus}>
              <button><PlusIcon /></button>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.icon} src="/images/cards.png" alt="Advantage Icon"/>
            <h3 className={styles.title}>Como você queria</h3>
            <p className={styles.desc}>
              Aproveite esta seção para destacar os benefícios do seu produto ou serviço.
            </p>
            <div className={styles.plus}>
              <button><PlusIcon /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages;