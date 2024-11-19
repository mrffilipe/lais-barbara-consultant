import Layout from "./components/Layout";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ConsultingSection from "./components/ConsultingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

const App = () => {
    return (
        <Layout>
            <IntroSection />
            <ServicesSection />
            <AboutSection />
            <ConsultingSection />
            <TestimonialsSection />
            <ContactSection />
        </Layout>
    );
};

export default App;