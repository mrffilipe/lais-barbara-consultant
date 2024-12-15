import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import IntroSection from "./components/IntroSection";
import Layout from "./components/Layout";
import ServicesSection from "./components/ServicesSection";

const App = () => {
	return (
		<Layout>
			<IntroSection />
			<AboutSection />
			<ServicesSection />
			<ContactSection />
		</Layout>
	);
};

export default App;
