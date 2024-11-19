import styles from './styles.module.css';

const IntroSection = () => {
    return (
        <section id="intro" className={styles.intro_section}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Bem-vindo(a) à sua melhor escolha!</h1>
                    <p className={styles.description}>
                        Com habilidades de comunicação, ofereço palestras que fornecem as ferramentas necessárias para o seu sucesso. Palestras a empresas, escolas, workshops e seminários regularmente voltados para aqueles que desejam desenvolver seu pleno potencial e de toda sua equipe.
                    </p>
                    <a href='#intro' className={styles.cta_button}>Saiba Mais</a>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;