import Footer from "../Footer";
import Header from "../Header";

import styles from "./styles.module.css";

type Props = {
	children: React.ReactNode;
};

const Layout = (props: Props) => {
	return (
		<>
			<Header />
			<main className={styles.main}>{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
