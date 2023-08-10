import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const projects = [
	{
		logo: "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fe78b8a705ea1a9a6_client-logo.svg",
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d15f3d8f74d76a8617d4da_project-02.webp",
		name: "fashion",
	},
	{
		logo: "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d037709e815809b61d1053_client-logo-1.svg",
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d15f44a1b82fb1c8aa4ee2_project-03.webp",
		name: "noise",
	},
	{
		logo: "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fc5cd4969c0713d1f_client-logo-3.svg",
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d15f513ad5ecfa6838003e_project-04.webp",
		name: "lawyers",
	},
	{
		logo: "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fa91d3d48a1d77d6d_client-logo-6.svg",
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d15ac4f646b6779ab57215_project-01.webp",
		name: "flowers",
	},
];

const HomeProjects = () => {
	return (
		<section className="home-projects">
			<div>
				{projects.map(({ logo, img, name }) => (
					<Link href={"#"}>
						<div className="home-projects__project">
							<div
								style={{
									backgroundImage: `url(${img})`,
								}}
								className="img-noise home-projects__project-img"
							>
								{/* <Image fill src={img} alt="img" /> */}
							</div>
							<div className="home-projects__project-about">
								<Image width={70} height={70} src={logo} />
								<h1>{name}</h1>
								<div>
									<span className="arrow">
										<GoArrowUpRight />
									</span>
									<span>discover project</span>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default HomeProjects;
