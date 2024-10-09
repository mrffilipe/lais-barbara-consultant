import styles from './styles.module.css';

const IntroSection = () => {
    return (
        <section id='intro' className={styles.intro_section}>
            <div className={styles.content}>
                <h1 className={styles.title}>Bem-vindo à Minha Consultoria</h1>
                <p className={styles.description}>
                    Aqui você encontrará soluções personalizadas para otimizar seus negócios e alcançar os melhores resultados.
                </p>
                <button className={styles.cta_button}>Saiba Mais</button>
            </div>
        </section>
    );
};

export default IntroSection;