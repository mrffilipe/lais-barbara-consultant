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
					<div className={styles.enterprise}>
						<span>Empresa</span>
						<div>
							<strong>CNPJ</strong>
							<p>57.141.083/0001-56</p>
						</div>
						<div>
							<strong>Endereço:</strong>
							<p>Rua Jose Alexandre de Rezende, n06</p>
							<p>Bairro Santa Cecília</p>
							<p>Pires do Rio, GO - Brazil</p>
							<p>75.200-000</p>
						</div>
					</div>
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
