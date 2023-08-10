import {
	AiOutlineBehance,
	AiOutlineDribbble,
	AiOutlineInstagram,
} from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { PiTwitterLogo } from "react-icons/pi";

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
					<div key={name} className="card ">
						<div className="card__header">
							{logo}
							<span className="arrow">
								<GoArrowUpRight />
							</span>
						</div>
						<div className="card__body">
							<div className="card__title">{name}</div>
							<div className="card__text">{desc}</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeSocials;
