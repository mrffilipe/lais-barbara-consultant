import { Book, Business, People, School } from "@mui/icons-material";

import styles from "./styles.module.css";

const Services = () => {
	return (
		<section id="services" className={styles.services}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>Serviços</h1>

					<ul className={styles.services_list}>
						<li>
							<h3>
								<span>
									<Business />
								</span>
								Consultoria Empresarial
							</h3>
							<p>
								Oferecemos soluções personalizadas para melhorar o clima
								organizacional, promover o bem-estar dos colaboradores e
								aumentar a produtividade. Nossos serviços incluem diagnóstico de
								ambiente, programas de saúde mental, capacitação de líderes,
								desenvolvimento de equipes e consultoria em ergonomia para criar
								um ambiente de trabalho saudável e eficiente.
							</p>
						</li>
						<li>
							<h3>
								<span>
									<School />
								</span>
								Consultoria Educacional
							</h3>
							<p>
								Desenvolvemos soluções personalizadas para transformar o
								ambiente escolar, promovendo a saúde mental e o bem-estar de
								educadores e alunos. Oferecemos diagnóstico do clima escolar,
								capacitação de educadores em liderança e gestão emocional, e
								estratégias para prevenir o estresse e o burnout, criando um
								ambiente de aprendizado mais saudável e produtivo.
							</p>
						</li>
						<li>
							<h3>
								<span>
									<People />
								</span>
								Desenvolvimento Pessoal e Coaching
							</h3>
							<p>
								Oferecemos coaching executivo e pessoal para ajudar indivíduos e
								profissionais a definirem metas claras, superarem desafios e
								equilibrar sua vida pessoal e profissional. Além disso,
								fornecemos mentoria contínua para o desenvolvimento de
								habilidades de liderança, comunicação e autoconhecimento, com
								foco no crescimento sustentável.
							</p>
						</li>
						<li>
							<h3>
								<span>
									<Book />
								</span>
								Palestras e Workshops
							</h3>
							<p>
								Oferecemos palestras motivacionais e educativas sobre temas como
								saúde mental, prevenção de burnout, ergonomia e equilíbrio entre
								produtividade e bem-estar. Além disso, conduzimos workshops
								práticos e interativos, focados em melhorar a produtividade,
								gerenciar o estresse e desenvolver inteligência emocional para
								um desempenho sustentável e equilibrado.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Services;
