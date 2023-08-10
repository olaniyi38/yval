"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";

const fadeIn = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

const FadeIn = ({ children }) => {
	const containerRef = useRef();
	const inView = useInView(containerRef,{
		margin:"100px 0px 0px 0px"
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
				transition={{ delay: 0.2 }}
				className="fadeIn-el"
				ref={containerRef}
			>
				{children}
			</motion.div>
		</>
	);
};

export default FadeIn;
