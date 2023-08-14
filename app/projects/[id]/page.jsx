import Image from "next/image";
import { GoArrowDown } from "react-icons/go";

async function fetchProject(id) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_API_URl + `/api/projects/${id}`,
			{
				cache: "no-store",
			}
		);

		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}

		return res.json();
	} catch (err) {
		console.log(err);
	}
}

const ProjectPage = async ({ params }) => {
	const { id } = params;

	const projectData = await fetchProject(id);

	const {
		name,
		tag,
		thumbImgs,
		gallery,
		client,
		timeline,
		services,
		website,
		process,
	} = projectData;

	return (
		<section className="project-page">
			<div className="project-page__hero">
				<div className="project-page__hero-img  img-noise">
					<Image src={thumbImgs[0]} fill />
				</div>
				<div>
					<h1 className="project-page__hero-title">{name}</h1>
					<p className="project-page__hero-text">
						<p>
							Bringing Your Fashion Brand&apos;s Unique Identity to Life Through
							Strategic Marketing and Advertising
						</p>
						<span className="discover">
							<span className="arrow">
								<GoArrowDown />
							</span>
							<span>Discover</span>
						</span>
					</p>
				</div>
			</div>
			<div className="project-page__about">
				<div className="project-page__about-item">
					<h3>clients</h3>
					<p>{client}</p>
				</div>
				<div className="project-page__about-item">
					<h3>timeline</h3>
					<p>{timeline}</p>
				</div>
				<div className="project-page__about-item">
					<h3>service</h3>
					<p>{services}</p>
				</div>
				<div className="project-page__about-item">
					<h3>website</h3>
					<p>{website}</p>
				</div>
			</div>

			<div className="project-page__process">
				{Object.entries(process).map(([title, about]) => (
					<div key={title} className="card">
						<div className="card__header">
							<div className="card__subtitle">{title}</div>
						</div>
						<div className="card__body">
							<div className="card__title">{about.name}</div>
							<p className="card__text">{about.text}</p>
						</div>
					</div>
				))}
			</div>

			<div className="project-page__gallery">
				<h1>gallery</h1>
				<div className="project-page__gallery-imgs">
					{gallery.map((url) => (
						<div key={name} className="project-page__gallery-img">
							<Image src={url} fill alt={name} priority />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectPage;
