import styles from './styles.module.css';

const ContactSection = () => {
    return (
        <section id='contact' className={styles.contact_section}>
            <h2 className={styles.title}>Entre em Contato</h2>
            <div className={styles.contact_info}>
                <p>Email: <a href="mailto:contato@consultoria.com">contato@consultoria.com</a></p>
                <p>Telefone: <a href="tel:+5511999999999">+55 11 99999-9999</a></p>
                <p>Endereço: Rua Exemplo, 123, Cidade, Estado</p>
            </div>
            <form className={styles.contact_form}>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default ContactSection;