import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import ServicesSection from "./components/ServicesSection";

const App = () => {
	return (
		<>
			<Header />
			<IntroSection />
			<AboutSection />
			<ServicesSection />
			<ContactSection />
			<Footer />
		</>
	);
};

export default App;
