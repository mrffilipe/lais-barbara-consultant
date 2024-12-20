import styles from "./styles.module.css";

import Logo from "../Logo";
import SocialMedia from "../SocialMedia";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.links}>
					<Logo />
					<nav className={styles.navigation}>
						<span>Links úteis</span>
						<a href="#about" className={styles.link}>
							Sobre Mim
						</a>
						<a href="#services" className={styles.link}>
							Serviços
						</a>
						<a href="#contact" className={styles.link}>
							Contato
						</a>
					</nav>
					<div className={styles.my_networks}>
						<span>Minhas redes</span>
						<SocialMedia className={styles.social_media} />
					</div>
				</div>
				<div className={styles.copyright}>
					<p>&copy; 2024 Laís. Todos os direitos reservados.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
