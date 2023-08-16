import {
	AiOutlineBehance,
	AiOutlineDribbble,
	AiOutlineInstagram,
} from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { PiTwitterLogo } from "react-icons/pi";
import Card from "./card/Card";

const socials = [
	{
		logo: <AiOutlineInstagram className="logo" />,
		name: "Instagram",
		desc: `Captivating visuals that showcase our fashion brand's unique style
        and story.`,
	},
	{
		logo: <PiTwitterLogo className="logo" />,
		name: "twitter",
		desc: `Captivating visuals that showcase our fashion brand's unique style
        and story.`,
	},
	{
		logo: <AiOutlineBehance className="logo" />,
		name: "behance",
		desc: `Captivating visuals that showcase our fashion brand's unique style
        and story.`,
	},
	{
		logo: <AiOutlineDribbble className="logo" />,
		name: "dribble",
		desc: `Captivating visuals that showcase our fashion brand's unique style
        and story.`,
	},
];

const HomeSocials = () => {
	return (
		<section className="home-socials">
			<marquee behavior="l" direction="left">
				<span>* Follow us on social media *</span>
				<span>* Follow us on social media *</span>
				<span>* Follow us on social media *</span>
				<span>* Follow us on social media *</span>
				<span>* Follow us on social media *</span>
				<span>* Follow us on social media *</span>
			</marquee>

			<div className="home-socials__cards">
				{socials.map(({ name, desc, logo }) => (
					<Card>
						<Card.Header>
							{logo}
							<span className="arrow">
								<GoArrowUpRight />
							</span>
						</Card.Header>
						<Card.Body>
							<Card.Title>{name}</Card.Title>
							<Card.Text>{desc}</Card.Text>
						</Card.Body>
					</Card>
				))}
			</div>
		</section>
	);
};

export default HomeSocials;
