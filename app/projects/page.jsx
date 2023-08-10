import React from "react";
import Project from "../components/Project";
import fetchProducts from "../helpers/fetchProducts";
import FadeIn from "../components/FadeIn";

const ProjectsPage = async () => {
	const products = await fetchProducts();

	return (
		<section className="projects">
			<header className="projects__header">
				<hgroup>
					<h3>projects</h3>
					<h1>From Concept to Creation</h1>
				</hgroup>
				<p>
					Examining our track record of developing successful and impactful
					fashion brands.
				</p>
			</header>

			<div className="projects__items">
				{products.map((d,i) => (
					<FadeIn>
						<Project data-index={i} projectData={d} />
					</FadeIn>
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
