import Image from "next/image";
import Hero from "./components/Hero";
import HomeServices from "./components/HomeServices";
import HomeAbout from "./components/HomeAbout";
import HomeProjects from "./components/HomeProjects";
import { GoArrowUpRight } from "react-icons/go";
import HomeSocials from "./components/HomeSocials";
import HomeNews from "./components/HomeNews";
import Button, { BTN_TYPES } from "./components/Button";
import FadeIn from "./components/FadeIn";

const clientLogos = [
	"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fe78b8a705ea1a9a6_client-logo.svg",
	"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d037709e815809b61d1053_client-logo-1.svg",
	"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376f58c89d8156db0448_client-logo-2.svg",
	"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fc5cd4969c0713d1f_client-logo-3.svg",
	"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d03770e78b8a40c0a1a9a7_client-logo-5.svg",
	"https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fa91d3d48a1d77d6d_client-logo-6.svg",
];

const HomePage = () => {
	return (
		<main className="home">
			<div className="anim"></div>
				<Hero />
			<FadeIn>
				<HomeServices />
				<section className="home-client-logos">
					<div>
						{clientLogos.map((url) => (
							<Image key={url} width={100} height={100} src={url}  alt=""/>
						))}
					</div>
				</section>
				<HomeAbout />
				<HomeProjects />
				
				<HomeSocials />
				<HomeNews />
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
			</FadeIn>
		</main>
	);
};

export default HomePage;
