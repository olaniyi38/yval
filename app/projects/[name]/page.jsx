import FadeIn from "@/app/components/FadeIn";
import { fetchDocumentFromDb } from "@/app/utils/firebase.utils";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";

const ProjectPage = async ({ params }) => {
	const { name: projectName } = params;

	const projectData = await fetchDocumentFromDb(projectName, "projects");

	console.log(projectData);

	const {
		name,
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
					<div className="project-page__hero-text">
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
					</div>
				</div>
			</div>
			<FadeIn>
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
			</FadeIn>

			<FadeIn delay={0.4}>
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
			</FadeIn>

			<FadeIn delay={0.5}>
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
			</FadeIn>
		</section>
	);
};

export default ProjectPage;
