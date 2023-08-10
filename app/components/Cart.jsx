"use client";

import { useDispatch, useSelector } from "react-redux";
import {
	selectCartActive,
	selectCartItems,
	selectCartTotal,
} from "../features/shop/shopSelector";
import CartItem from "./CartItem";
import Button, { BTN_TYPES } from "./Button";
import { setCartActive } from "../features/shop/shopSlice";

const Cart = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = Number(useSelector(selectCartTotal)).toFixed(2);
	const cartActive = useSelector(selectCartActive);
	const dispatch = useDispatch();

	function toggleCart() {
		dispatch(setCartActive(false));
	}

	return (
		<div className={`cart-wrapper ${cartActive ? "active" : ""}`}>
			<div onClick={toggleCart} className="dark-bg"></div>
			<div className="cart">
				<div className="cart__header">
					<h1>cart</h1>
					<button onClick={toggleCart}>close</button>
				</div>
				<div className="cart__items">
					{cartItems.length > 0 ? (
						cartItems.map((item) => {
							console.log(item.qty);
							return <CartItem cartItem={item} />;
						})
					) : (
						<h1 className="cart__empty">No items here...</h1>
					)}
				</div>
				<div className="cart__total">
					<span>subtotal</span>
					<span className="value">$ {cartTotal} usd</span>
				</div>
				<Button variant={BTN_TYPES.yellow}>continue to checkout</Button>
			</div>
		</div>
	);
};

export default Cart;
