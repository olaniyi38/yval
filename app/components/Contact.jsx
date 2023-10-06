import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {
	return (
		<section className="contact">
			<h4>contact</h4>
			<div>
				<p>Let&apos;s make your fashion brand shine</p>
				<button>
					<span>get in touch</span>
					<span className="arrow">
						<GoArrowUpRight />
					</span>
				</button>
			</div>
		</section>
	);
};

export default Contact;
