import styles from "./styles.module.css";

import LogoImg from "../../assets/img/logo.png";

const Logo = () => {
	return (
		<div className={styles.logo}>
			<img src={LogoImg} alt="Laís Bárbara Consultora" />
		</div>
	);
};

export default Logo;
