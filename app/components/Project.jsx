import Image from "next/image";
import ArrowSvg from "./Arrow";
import Link from "next/link";

const Project = ({ projectData, index }) => {
	const { name, tag, thumbImgs, id } = projectData;
	const isEven = index % 2 === 0;

	return (
		<div className={`project ${isEven ? "row-reverse" : ""}`}>
			<div className="project__about">
				<Link href={`http://localhost:5173/projects/${id}`}>
					<div className="card">
						<div className="card__body">
							<div className="card__subtitle">{tag}</div>
							<div className="card__title">{name}</div>
						</div>
						<div className="card__footer">
							<ArrowSvg />
							<span>DISCOVER</span>
						</div>
					</div>
				</Link>
			</div>
			{/* <div className="project__images"> */}
			{thumbImgs.map((img, i) => (
				<div key={name} className="project__img img-noise" data-image={i + 1}>
					<Link href={`http://localhost:5173/projects/${id}`}>
						<Image fill src={img} alt={name} />
					</Link>
				</div>
			))}
			{/* </div> */}
		</div>
	);
};

export default Project;
