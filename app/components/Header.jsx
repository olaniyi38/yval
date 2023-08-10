"use client";

import Link from "next/link";
import Button from "./Button";

import { HiBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount } from "../features/shop/shopSelector";
import { setCartActive } from "../features/shop/shopSlice";
import { useState } from "react";
/**
 * projects
 * shop
 * cart
 * services??
 */
const Header = () => {
	const cartCount = useSelector(selectCartCount);
	const dispatch = useDispatch();
	console.log(cartCount)

	const [mobileNavActive, setMobileNavActive] = useState(false);

	function toggleCart() {
		dispatch(setCartActive(true));
	}

	function toggleMobileNav() {
		setMobileNavActive(!mobileNavActive);
	}

	return (
		<>
			<header className="header">
				<div className="header__logo">
					<Link href="/">YVAL</Link>
				</div>
				<div className="header__nav">
					<Link className="button button--yellow" href="/shop">
						Shop
					</Link>
					<Link className="button" href="/projects">
						Projects
					</Link>
				</div>
				<div className="header__buttons">
					<Button onClick={toggleCart}>
						<span>Cart</span>
						<span className="cart-count">
							<span>{cartCount}</span>
						</span>
					</Button>

					<button onClick={toggleMobileNav} className="header__toggle">
						<HiBars3 />
					</button>
				</div>
				<div className={`mobile-nav ${mobileNavActive ? "active" : ""}`}>
					<Link href="/shop" className="mobile-nav__link">
						Shop
					</Link>
					<Link href="/projects" className="mobile-nav__link">
						Projects
					</Link>
				</div>
			</header>
		</>
	);
};

export default Header;
