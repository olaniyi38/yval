"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeItem, updateItemQuantity } from "../features/shop/shopSlice";


const CartItem = ({ cartItem }) => {
	const { id, name, price, qty, size, thumbImg } = cartItem;
	const dispatch = useDispatch();


	function removeItemFromCart() {
		dispatch(removeItem({ id, size }));
	}

	function updateItemQty(e) {
			dispatch(updateItemQuantity({ id, value: Number(e.target.value) }));
	}

	return (
		<div className="cart-item">
			<div className="cart-item__img">
				<Image width={50} height={50} src={thumbImg} alt={name} />
			</div>
			<div className="cart-item__info">
				<p className="cart-item__name">{name}</p>
				<div className="cart-item__price">
					<p>$ {Number(price).toFixed(2)} USD</p>
					<s>$ {Number(price + 20).toFixed(2)} USD</s>
				</div>
				<p className="cart-item__size">
					size: <span>{size}</span>
				</p>
				<button onClick={removeItemFromCart} className="cart-item__remove">
					remove
				</button>
			</div>
			<div className="cart-item__qty">
				<input
					type="number"
					pattern="^[0-9]+$"
					inputmode="numeric"
					name="qty"
					min="1"
					value={qty}
					onChange={updateItemQty}
					onBlur={(e) => {
						if (Number(e.target.value) === 0) {
							removeItemFromCart();
						}
					}}
				/>
			</div>
		</div>
	);
};

export default CartItem;
