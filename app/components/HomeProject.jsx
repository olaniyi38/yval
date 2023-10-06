"use client";

import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";

const HomeProject = ({ data }) => {
	const { img, name, logo, tag } = data;

	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["center center", "end start"],
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

	return (
		<div ref={ref} className="home-projects__project">
			<motion.div
				style={{ y: backgroundY }}
				className="img-noise home-projects__project-img"
			>
				<Image fill src={img} alt="" />
			</motion.div>
			<div className="home-projects__project-about">
				<Image width={70} height={70} src={logo} alt="" />
				<h1>{name}</h1>
				<div>
					<Link
						className="home-projects__project-link"
						key={name}
						href={`projects/${name.toLowerCase()}`}
					>
						<span className="arrow">
							<GoArrowUpRight />
						</span>
						<span>discover project</span>
					</Link>
					<p>{tag}</p>
				</div>
			</div>
		</div>
	);
};

export default HomeProject;
