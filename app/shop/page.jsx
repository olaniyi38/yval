import Image from "next/image";
import Link from "next/link";
import FadeIn from "../components/FadeIn";

async function fetchProducts() {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URl + "/api/shop", {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}

		return res.json();
	} catch (err) {
		console.log(err);
	}
}

const ShopPage = async () => {
	const products = await fetchProducts();

	return (
		<section className="shop">
			<h1 className="shop__title">SHOP</h1>
			<div className="shop__grid">
				{products.map(({ thumbImg, name, price }) => (
					<FadeIn key={name}>
						<Link href={`http://localhost:5173/shop/${name.toLowerCase()}`}>
							<div className="card product">
								<div className="card__img img-noise">
									<Image fill src={thumbImg} alt="name" />
								</div>
								<div className="card__body">
									<h1 className="card__title">{name}</h1>
									<div className="product__price">
										<p className="card__text">
											${Number(price).toFixed(2)} USD
										</p>
										<s className="card__text strike-through">
											${Number(price + 20).toFixed(2)} USD
										</s>
									</div>
								</div>
							</div>
						</Link>
					</FadeIn>
				))}
			</div>
		</section>
	);
};

export default ShopPage;
