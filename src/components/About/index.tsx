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
						Sou uma profissional apaixonada por compartilhar conhecimento e
						transformar vidas. Goiana, com 30 anos de idade, venho de uma
						família humilde e trabalhadora – filha de uma professora e de um
						operário – o que me ensinou desde cedo a importância do aprendizado
						e da dedicação.
					</p>
					<p>
						Minha trajetória é marcada pelo foco no crescimento pessoal e
						profissional, sempre buscando formas de ajudar empresas, escolas e
						indivíduos a superarem desafios e alcançarem seus objetivos.
					</p>
					<p>
						Meu trabalho vai além do conteúdo técnico. Busco inspirar, engajar e
						transformar, criando soluções que realmente fazem a diferença na
						vida das pessoas. Seja no ambiente corporativo, escolar ou
						comunitário, meu propósito é ajudar cada cliente a alcançar um
						equilíbrio saudável entre produtividade e bem-estar.
					</p>
					<p>Vamos transformar juntos?</p>
				</div>
			</div>
		</section>
	);
};

export default About;
