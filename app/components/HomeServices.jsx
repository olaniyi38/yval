"use client";

import Link from "next/link";

import { GoArrowUpRight } from "react-icons/go";

const services = [
	{
		name: "branding",
		desc: "develop a strong, recognizable fashion brand identity",
	},
	{
		name: "identity",
		desc: "develop a strong, recognizable fashion brand identity",
	},
	{
		name: "marketing",
		desc: "develop a strong, recognizable fashion brand identity",
	},
	{
		name: "e-commerce",
		desc: "develop a strong, recognizable fashion brand identity",
	},
];

const HomeServices = () => {
	return (
		<section className="home-services">
			<div className="services">
				{services.map((data) => {
					return (
						<Link key={data.name} href={"#"}>
							<div className="card">
								<div className="card__body">
									<h1 className="card__title">{data.name}</h1>
									<p className="card__text">{data.desc}</p>
								</div>
								<div className="card__footer">
									<span className="arrow">
										<GoArrowUpRight />
									</span>
									<span>about {data.name}</span>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default HomeServices;
