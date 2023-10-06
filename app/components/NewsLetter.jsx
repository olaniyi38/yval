import Image from "next/image";
import React from "react";
import Button, { BTN_TYPES } from "./Button";

const NewsLetter = () => {
	return (
		<section className="home-newsletter">
			<div className="home-newsletter__img img-noise">
				<Image
					fill
					src="https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d630b9f7e09b4b1337bbe2_newsletter.webp"
					alt="da"
				/>
			</div>
			<div className="home-newsletter__body">
				<div>
					<h4>newsletter</h4>
					<h1>get insights behind the scenes</h1>
				</div>
				<form>
					<input placeholder="YOUR EMAIL" type="text" name="" id="" />
					<Button variant={BTN_TYPES.yellow}>subscribe</Button>
				</form>
			</div>
		</section>
	);
};

export default NewsLetter;
