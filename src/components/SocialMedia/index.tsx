import { Email, Instagram, WhatsApp } from "@mui/icons-material";

import styles from "./styles.module.css";

const message = "Olá, estou interessado nos seus serviços!";
const encodedMessage = encodeURIComponent(message);
const url = `https://wa.me/5564992811932?text=${encodedMessage}`;

type Props = {
	className?: string;
};

const SocialMedia = ({ className }: Props) => {
	return (
		<div className={`${styles.social_media} ${className}`}>
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
			>
				<WhatsApp />
			</a>
			<a
				href="https://www.instagram.com/laisbarbara.consultora/"
				target="_blank"
				rel="noreferrer"
			>
				<Instagram />
			</a>
			<a href="mailto:laisbarbaraconsultora@gmail.com" rel="noreferrer">
				<Email />
			</a>
		</div>
	);
};

export default SocialMedia;
