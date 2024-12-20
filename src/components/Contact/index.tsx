import styles from "./styles.module.css";

import SocialMedia from "../SocialMedia";

const Contact = () => {
	return (
		<section id="contact" className={styles.contact}>
			<div className={styles.container}>
				<h2 className={styles.title}>Entre em Contato</h2>
				<p className={styles.subtitle}>
					Vamos trabalhar juntos? Entre em contato
					pelas redes sociais.
				</p>
				<SocialMedia className={styles.social_media} />
			</div>
		</section>
	);
};

export default Contact;
