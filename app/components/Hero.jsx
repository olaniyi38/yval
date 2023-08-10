"use client";

import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";

const fadeIn = {
	hidden: {
		opacity: 0,
		x: -20,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
};

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__img img-noise">
				<Image
					src="https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d2279606000f5f8a92b792_home-hero.webp"
					fill
					alt="img"
				/>
			</div>
			<div className="hero__content">
				<hgroup>
					<motion.h1 
					variants={fadeIn}
					initial="hidden"
					animate="visible"
					>
						fashion
					</motion.h1>
					<motion.h4
						variants={fadeIn}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.5 }}
					>
						& branding
					</motion.h4>
				</hgroup>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
				>
					Bringing Your Fashion Brand's Unique Identity to Life Through
					Strategic Marketing and Advertising.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					className="more"
				>
					<AiOutlineArrowDown className="arrow" />
					<span>learn more</span>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
