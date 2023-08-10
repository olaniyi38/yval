import Link from "next/link";
import {
	AiOutlineBehance,
	AiOutlineInstagram,
	AiOutlineTwitter,
} from "react-icons/ai";

const pages = ["home", "services", "projects", "about"];

const Footer = () => {
	return (
		<footer className="footer">
		
			<div className="footer__socials">
				<h1>YVAl</h1>
				<div>
					<Link href="">
						<AiOutlineTwitter />
					</Link>
					<Link href="">
						<AiOutlineInstagram />
					</Link>
					<Link href="">
						<AiOutlineBehance />
					</Link>
				</div>
			</div>
			<div className="footer__nav">
				<h1>Pages</h1>
				<div>
					{pages.map((title) => (
						<Link href="">{title}</Link>
					))}
				</div>
			</div>
			<div className="footer__copy">
				<p>© MADE BY SODIQ- POWERED BY JS</p>
			</div>
		</footer>
	);
};

export default Footer;
