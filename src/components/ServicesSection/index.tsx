import styles from './styles.module.css';

const services = [
    {
        id: 1,
        title: "Consultoria Estratégica",
        description: "Ajudo sua empresa a definir estratégias eficazes e alcançar os resultados desejados.",
    },
    {
        id: 2,
        title: "Planejamento Financeiro",
        description: "Ofereço serviços de planejamento financeiro para otimizar suas finanças e melhorar a rentabilidade.",
    },
    {
        id: 3,
        title: "Desenvolvimento de Negócios",
        description: "Identifico oportunidades de crescimento e crio estratégias para expandir seus negócios.",
    },
];

const ServicesSection = () => {
    return (
        <section className={styles.services_section}>
            <h2 className={styles.title}>Serviços</h2>
            <div className={styles.services_list}>
                {services.map((service) => (
                    <div key={service.id} className={styles.service_card}>
                        <h3 className={styles.service_title}>{service.title}</h3>
                        <p className={styles.service_description}>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;