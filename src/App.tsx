import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
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
			<Contact />
			<Footer />
		</>
	);
};

export default App;
