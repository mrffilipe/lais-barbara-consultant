import styles from './styles.module.css';

const consultingServices = [
    {
        id: 1,
        title: "Consultoria de Negócios",
        description: "Apoio na análise de processos e estratégias para otimizar os resultados do seu negócio.",
        icon: "📊", // Um ícone representando o tipo de consultoria (pode ser substituído por ícones gráficos)
    },
    {
        id: 2,
        title: "Consultoria Financeira",
        description: "Ajudo a organizar as finanças da sua empresa, garantindo maior estabilidade e crescimento.",
        icon: "💰",
    },
    {
        id: 3,
        title: "Consultoria de Marketing",
        description: "Estratégias personalizadas de marketing para atrair mais clientes e expandir sua marca.",
        icon: "📈",
    },
];

const ConsultingSection = () => {
    return (
        <section id='consulting' className={styles.consulting_section}>
            <h2 className={styles.title}>Consultorias</h2>
            <div className={styles.consulting_list}>
                {consultingServices.map((service) => (
                    <div key={service.id} className={styles.consulting_card}>
                        <div className={styles.icon}>{service.icon}</div>
                        <h3 className={styles.service_title}>{service.title}</h3>
                        <p className={styles.service_description}>{service.description}</p>
                        <button className={styles.cta_button}>Saiba mais</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ConsultingSection;