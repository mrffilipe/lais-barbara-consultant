import styles from "./styles.module.css";

const ContactSection = () => {
	return (
		<section id="contact" className={styles.contact_section}>
			<div className={styles.container}>
				<h3>Entre em Contato</h3>
				<div className={styles.contact_info}>
					<p>
						Email
						<a href="mailto:contato@consultoria.com">contato@consultoria.com</a>
					</p>
					<p>
						Telefone
						<a href="tel:+5511999999999">+55 11 99999-9999</a>
					</p>
				</div>
				<form className={styles.contact_form}>
					<label>
						Nome
						<input type="text" placeholder="João" required />
					</label>

					<label>
						E-mail
						<input type="email" placeholder="email@dominio.com" required />
					</label>

					<label>
						Mensagem
						<textarea placeholder="Escreva sua mensagem..." rows={5} required />
					</label>

					<button type="submit">Enviar</button>
				</form>
			</div>
		</section>
	);
};

export default ContactSection;
