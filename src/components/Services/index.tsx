import styles from "./styles.module.css";

const Services = () => {
	return (
		<section id="services" className={styles.services}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>Serviços</h1>

					<ul className={styles.services_list}>
						<li>
							<h3>Consultoria de Negócios</h3>
							<p>
								Consultoria para otimizar resultados, melhorar processos e
								aumentar a lucratividade com soluções eficazes.
							</p>
						</li>
						<li>
							<h3>Consultoria Financeira</h3>
							<p>
								Consultoria em finanças e marketing para otimizar resultados,
								fortalecer sua marca e garantir crescimento sustentável.
							</p>
						</li>
						<li>
							<h3>Palestras</h3>
							<p>
								Palestras e consultorias focadas no bem-estar, produtividade e
								sucesso profissional, com abordagem prática e baseada em
								ciência.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Services;
