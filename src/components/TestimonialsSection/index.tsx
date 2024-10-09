import styles from './styles.module.css';

const testimonials = [
    {
        id: 1,
        name: "Ana Silva",
        occupation: "Empresária",
        comment: "Excelente consultoria! Minha empresa cresceu exponencialmente após as estratégias sugeridas.",
    },
    {
        id: 2,
        name: "Carlos Pereira",
        occupation: "Diretor Financeiro",
        comment: "Profissionalismo e competência, ajudaram muito a organizar nossas finanças.",
    },
    {
        id: 3,
        name: "Juliana Souza",
        occupation: "CEO de Startup",
        comment: "A consultoria de marketing foi essencial para alcançarmos novos clientes.",
    },
];

const TestimonialsSection = () => {
    return (
        <section className={styles.testimonials_section}>
            <h2 className={styles.title}>Depoimentos</h2>
            <div className={styles.testimonial_list}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className={styles.testimonial_card}>
                        <p className={styles.comment}>"{testimonial.comment}"</p>
                        <p className={styles.name}>{testimonial.name}</p>
                        <p className={styles.occupation}>{testimonial.occupation}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;