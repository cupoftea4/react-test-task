import Separator from "@/shared/ui/Separator";
import AccentButton from "@/shared/ui/AccentButton";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.root} id="contact">
      <div className={styles.container}>
        <img className={styles.shape} src="/images/contact.png" alt="Contact Shape"/>
        <h2 className={styles.title}>Ainda tem dúvidas? Fale conosco!</h2>
        <Separator />
        <div className={styles.formContainer}>
          <div className={styles.left}>
            <div className={styles.desc}>
              <p>
                Ofereça um meio de comunicação direto. Pode ser um <span className={styles.email}>contato@email.com.br</span>
              </p>
              <p>
                Ou crie um formulário ao lado que entrem em contato <span className="highlight-primary">o mais rápido possível!</span>
              </p>
              <div className={styles.whatsApp}>
                <img className={styles.icon} src="/images/whats-app.png" alt="WhatsApp Icon"/>
                <p>Hey! Estamos no whatsapp!</p>
              </div>
            </div>
          </div>        
          <div className={styles.right}>
            <form className={styles.form}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Nome Sobrenome"/>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="nome@email.com.br"/>
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" name="phone" placeholder="21 9988-7766"/>
              <AccentButton>Enviar!</AccentButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;