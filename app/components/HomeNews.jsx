import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Card from "./card/Card";

const news = [
	{
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d2c45adaae9cb3aaa80bca_post-01-thumb.webp",
		title: "the power of the influencer marketing",
		desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam id, optio temporibus nisi consectetur!",
		tag: "marketing",
	},
	{
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d2c47ab614ee0a9e9a0def_post-02-thumb.webp",
		title: "effective advertising stragies for fashion",
		desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam id, optio temporibus nisi consectetur!",
		tag: "branding",
	},
	{
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d2c4afb614eeb32b9a0f0c_post-03-thumb.webp",
		title: "Role of Public Relations in Building a Fashion Brand",
		desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laboriosam id, optio temporibus nisi consectetur!",
		tag: "identity",
	},
];

const HomeNews = () => {

	return (
		<section className="home-news">
			<h1 className="home-news__title">latest news</h1>
			<div className="home-news__list">
				{news.map(({ img, title, desc, tag }) => (
					<Card key={title}>
						<Card.Image imgUrl={img}>
							<span className="arrow">
								<GoArrowUpRight />
							</span>
							<Image fill src={img} alt="img" />
							<Card.Tag>{tag}</Card.Tag>
						</Card.Image>
						<Card.Body>
							<Card.Title>{title}</Card.Title>
							<Card.Text>{desc}</Card.Text>
						</Card.Body>
						<Card.Footer>
							<span className="arrow">
								<GoArrowUpRight />
							</span>
							<span>read more</span>
						</Card.Footer>
					</Card>
				))}
			</div>
		</section>
	);
};

export default HomeNews;
