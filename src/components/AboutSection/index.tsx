import styles from './styles.module.css';

const AboutSection = () => {
    return (
        <section id='about' className={styles.about_section}>
            <div className={styles.content}>
                <h2 className={styles.title}>Sobre Mim</h2>
                <p className={styles.description}>
                    Sou uma consultora dedicada a ajudar empresas a alcançarem seus objetivos por meio de estratégias eficientes e personalizadas. Com anos de experiência no mercado, eu ofereço soluções focadas em resultados e adaptadas às necessidades de cada cliente.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;