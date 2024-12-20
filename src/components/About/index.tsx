import styles from "./styles.module.css";

import Profile from "../../assets/img/profile.jpeg";

const About = () => {
	return (
		<section id="about" className={styles.about}>
			<div className={styles.container}>
				<div className={styles.profile}>
					<img src={Profile} alt="Foto de Laís" draggable={false} />
				</div>
				<div className={styles.content}>
					<h1>Sobre Mim</h1>
					<p>
						Filha de uma professora e de um operário, sempre busquei crescimento
						pessoal e profissional. Sou casada e tenho como propósito
						compartilhar conhecimento, ajudando pessoas a se desenvolverem. Com
						experiência em saúde ocupacional, ergonomia e bem-estar, ofereço
						palestras personalizadas focadas no desenvolvimento pessoal e
						profissional. Ensino técnicas para gerenciar o estresse e
						transformar desafios em oportunidades, promovendo clareza e
						automotivação.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
