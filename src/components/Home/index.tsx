import styles from "./styles.module.css";

import IntroBackground from "../../assets/img/intro_bg.jpg";

const Home = () => {
	return (
		<section id="intro" className={styles.home}>
			<div className={styles.container}>
				<div className={styles.overlay}>
					<div className={styles.content}>
						<h1 className={styles.title}>Bem-vindo(a)!</h1>
						<p className={styles.description}>
							Ofereço palestras, workshops e seminários com ferramentas
							essenciais para o desenvolvimento pessoal e profissional.
						</p>
						<a href="#contact" className={styles.cta_button}>
							Saiba Mais
						</a>
					</div>
				</div>
				<div className={styles.image}>
					<img src={IntroBackground} alt="Laís Bárbara" />
				</div>
			</div>
		</section>
	);
};

export default Home;
