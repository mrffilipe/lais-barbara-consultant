import Layout from "./components/Layout";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

const App = () => {
    return (
        <Layout>
            <IntroSection />
            <AboutSection />
            <ServicesSection />
            {/* <ContactSection /> */}
        </Layout>
    );
};

export default App;