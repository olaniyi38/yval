"use client";

import Image from "next/image";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

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
];

const HomeNews = () => {
	const [cood, setCood] = useState({
		top: 50,
		left: 50,
	});

	// function handleImgHover(e) {
	// 	const rect = e.target.getBoundingClientRect();
	// 	setCood({
	// 		y: e.clientY - rect.top,
	// 		x: e.clientX - rect.left,
	// 	});
	// }

	return (
		<section className="home-news">
			<h1 className="home-news__title">latest news</h1>
			<div className="home-news__list">
				{news.map(({ img, title, desc, tag }) => (
					<div key={title} className="card">
						<div className="card__img img-noise">
							<span
								
								className="arrow"
							>
								<GoArrowUpRight />
							</span>
							<Image fill src={img} alt="img" />
							<span className="card__tag">{tag}</span>
						</div>
						<div className="card__body">
							<div className="card__title">{title}</div>
							<div className="card__text">{desc}</div>
						</div>
						<div className="card__footer">
							<span className="arrow">
								<GoArrowUpRight />
							</span>
							<span>read more</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeNews;
