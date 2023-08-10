"use client";

import React from "react";
import { ColorRing, TailSpin } from "react-loader-spinner";

const Loader = () => {
	return (
		<div className="loader">
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loader;
