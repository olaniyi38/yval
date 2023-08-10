"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PiArrowRightLight } from "react-icons/pi";

const tabImgs = [
	"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d4f8f8d353ff2654a07ebd_home-tabs-01.webp",
	"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d4f8f9f7e09b04fc227496_home-tabs-02.webp",
	"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d4f8f854f67c510a3099bd_home-tabs-03.webp",
	"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d4f8f81c71e0d55fe940cc_home-tabs-04.webp",
];

const tabMenus = [
	"video production",
	"branding & identity",
	"online marketing",
	"e-commerce",
];

const HomeAbout = () => {
	const [imgIndex, setImgIndex] = useState(0);
	console.log(tabImgs[imgIndex]);

	return (
		<section className="home-about">
			<div className="home-about__top">
				<div className="home-about__top-img img-noise">
					<Image
						fill
						src="https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d3bfeb533099399bbe18fb_home-about.webp"
						alt=""
					/>
				</div>
				<div className="home-about__top-about">
					<h3 className="home-about__top-title">About</h3>
					<div className="home-about__top-content">
						<h1>Bringing Fashion Brands to life</h1>
						<p>
							At our agency, we are passionate about bringing fashion brands to
							life. With a combination of creative vision, strategic thinking,
							and industry expertise. We help our clients transform their ideas
							into vibrant realities that resonate with their target audience,
							leaving a lasting impact in the fashion industry.
						</p>
					</div>
				</div>
			</div>
			<div className="home-about__tabs">
				<div className="home-about__tabs-content img-noise">
					<Image fill src={tabImgs[imgIndex]} alt="" />
				</div>
				<div className="home-about__tabs-menu">
					{tabMenus.map((title, index) => (
						<div key={index} onClick={() => setImgIndex(index)}>
							<span>{title}</span>
							<PiArrowRightLight />
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
								dolorum totam nulla quod corrupti repudiandae?
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeAbout;
