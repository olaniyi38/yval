import HomeProject from "./HomeProject";

const projects = [
	{
		logo: "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fe78b8a705ea1a9a6_client-logo.svg",
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d15f3d8f74d76a8617d4da_project-02.webp",
		name: "fashion",
		tag:"identity"
	},
	{
		logo: "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d037709e815809b61d1053_client-logo-1.svg",
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d15f44a1b82fb1c8aa4ee2_project-03.webp",
		name: "noise",
		tag:"branding"
	},
	{
		logo: "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fc5cd4969c0713d1f_client-logo-3.svg",
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d15f513ad5ecfa6838003e_project-04.webp",
		name: "lawyers",
		tag:"identity"
	},
	{
		logo: "https://assets.website-files.com/63cffb7c16ab3347fc9734c8/63d0376fa91d3d48a1d77d6d_client-logo-6.svg",
		img: "https://assets.website-files.com/63cffb7c16ab33a28e9734f2/63d15ac4f646b6779ab57215_project-01.webp",
		name: "flowers",
		tag:"branding"
	},
];

const HomeProjects = () => {
	

	return (
		<section className="home-projects">
			<div>
				{projects.map((data) => (
					<HomeProject data={data} />
				))}
			</div>
		</section>
	);
};

export default HomeProjects;
