"use client";

import Button, { BTN_TYPES } from "@/app/components/Button";
import Loader from "@/app/loading";
import Image from "next/image";
import faqs from "@/app/faqs";
import Accordion from "@/app/components/Accordion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, setCartActive } from "@/app/features/shop/shopSlice";
import generateRandomId from "@/app/helpers/uuid";
import { toast } from "react-toastify";
import { fetchDocumentFromDb } from "@/app/utils/firebase.utils";

const ProductPage = ({ params }) => {
	const { name: productName } = params;

	const dispatch = useDispatch();

	const [size, setSize] = useState(null);
	const [qty, setQty] = useState(1);
	const [product, setProduct] = useState(null);

	useEffect(() => {
		async function fetchProduct() {
			try {
				const data = await fetchDocumentFromDb(productName, "products");
				setProduct(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchProduct();
		window.scrollTo({
			behavior: "smooth",
			top: 0,
		});
	}, [productName]);

	if (!product) {
		return <Loader />;
	}

	const { name, price, desc, sizes, images, features, thumbImg, id } = product;

	function addItemToCart() {
		if (size === null && qty > 0) {
			toast.warning("Please select a size");
			return;
		}
		if (qty === 0) {
			toast.warning("Quantity can't be zero");
			return;
		}
		const cartItem = {
			id: generateRandomId(name, size),
			name,
			price,
			thumbImg,
			qty: qty,
			size: size,
		};

		dispatch(addItem(cartItem));
		dispatch(setCartActive(true));
	}

	return (
		<section className="product-page">
			<h1></h1>
			<div className="product">
				<div className="product__info">
					<div className="product__price">
						<p>$ {Number(price).toFixed(2)} USD</p>
						<s>$ {Number(price + 20).toFixed(2)} USD</s>
					</div>
					<div className="product__name">
						<h1>{name}</h1>
						<p>
							The epitome of style and comfort, a wardrobe staple that
							effortlessly complements any outfit.
						</p>
					</div>
					<div className="product__options">
						<div className="product__qty">
							<input
								type="number"
								pattern="^[0-9]+$"
								inputmode="numeric"
								name="qty"
								min="1"
								value={qty}
								onChange={(e) => setQty(Number(e.target.value))}
							/>
						</div>
						<div className="product__sizes">
							{sizes.map((s) => (
								<button
									key={s}
									onClick={() => setSize(s.toLowerCase())}
									className={`size ${size === s ? "active" : ""}`}
								>
									<span>{s}</span>
								</button>
							))}
						</div>
					</div>
					<Button onClick={addItemToCart} variant={BTN_TYPES.yellow}>
						add to cart
					</Button>
					<div className="product__desc">{desc}</div>
					<div className="product__features">
						<ul>
							{features.map((f, i) => (
								<li key={i}>{f}</li>
							))}
						</ul>
					</div>
				</div>
				<div className="product__images">
					{images.map((url) => (
						<div key={url} className="product__img">
							<Image alt={name} src={url} fill />
						</div>
					))}
				</div>
			</div>
			<div className="product-page__faqs">
				<hgroup>
					<h3>FAQ</h3>
					<h1>common questions</h1>
				</hgroup>
				<div className="faqs">
					{faqs.map(({ q, a }) => (
						<Accordion key={q} question={q} answer={a} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductPage;
