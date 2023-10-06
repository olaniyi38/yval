"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";

const fadeIn = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: (i = 0.2) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i,
			duration: 0.4,
		},
	}),
};

const FadeIn = ({ children, delay = 0.2 }) => {
	const containerRef = useRef();
	const inView = useInView(containerRef, {
		margin: "100px 0px 0px 0px",
		once: true,
	});
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [inView, controls]);

	return (
		<>
			<motion.div
				initial={"hidden"}
				animate={controls}
				variants={fadeIn}
				custom={delay}
				className="fadeIn-el"
				ref={containerRef}
			>
				{children}
			</motion.div>
		</>
	);
};

export default FadeIn;
