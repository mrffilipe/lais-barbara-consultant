import styles from "./styles.module.css";

import ProfileImg from "../../assets/img/profile.jpg";

const AboutSection = () => {
	return (
		<section id="about" className={styles.about_section}>
			<div className={styles.content}>
				<h1>Sobre Mim</h1>
				<p>
					Filha de uma professora e de um operário, sempre busquei crescimento
					pessoal e profissional. Sou casada e tenho como propósito compartilhar
					conhecimento, ajudando pessoas a se desenvolverem. Com experiência em
					saúde ocupacional, ergonomia e bem-estar, ofereço palestras
					personalizadas focadas no desenvolvimento pessoal e profissional.
					Ensino técnicas para gerenciar o estresse e transformar desafios em
					oportunidades, promovendo clareza e automotivação.
				</p>
			</div>
			<img
				className={styles.profile}
				src={ProfileImg}
				alt="Foto de Laís"
				draggable={false}
			/>
		</section>
	);
};

export default AboutSection;
