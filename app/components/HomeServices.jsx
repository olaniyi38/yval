"use client";

import Link from "next/link";

import { GoArrowUpRight } from "react-icons/go";
import Card from "./card/Card";

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
						<Card>
							<Card.Body>
								<Card.Title>{data.name}</Card.Title>
								<Card.Text>{data.desc}</Card.Text>
							</Card.Body>
							<Card.Footer>
								<Link href="#">
									<span className="arrow">
										<GoArrowUpRight />
									</span>
									<span>about {data.name}</span>
								</Link>
							</Card.Footer>
						</Card>
					);
				})}
			</div>
		</section>
	);
};

export default HomeServices;
