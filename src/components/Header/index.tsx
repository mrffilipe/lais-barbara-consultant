import { useState } from "react";

import styles from "./styles.module.css";

import LogoImg from "../../assets/img/logo.png";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);

		if (!isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img src={LogoImg} alt="Logo" />
				</div>
				<button className={styles.menu_button} onClick={toggleMenu}>
					☰
				</button>
				<div
					className={`${styles.overlay} ${isMenuOpen ? styles.visible : ""}`}
					onClick={toggleMenu}
				></div>
				<nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
					<button className={styles.close_button} onClick={toggleMenu}>
						X
					</button>
					<ul className={styles.menu_list}>
						<li>
							<a href="#intro">Início</a>
						</li>
						<li>
							<a href="#about">Sobre</a>
						</li>
						<li>
							<a href="#services">Serviços</a>
						</li>
						<li>
							<a href="#consulting">Consultorias</a>
						</li>
						<li>
							<a href="#testimonial">Depoimentos</a>
						</li>
						<li>
							<a href="#contact">Contato</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
