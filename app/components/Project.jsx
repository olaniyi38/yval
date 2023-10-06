import Image from "next/image";
import ArrowSvg from "./Arrow";
import Link from "next/link";
import Card from "./card/Card";
import { GoArrowUpRight } from "react-icons/go";

const Project = ({ projectData, index }) => {
	const { name, tag, thumbImgs, id } = projectData;
	const isEven = index % 2 === 0;

	return (
		<div className={`project ${isEven ? "row-reverse" : ""}`}>
			<div className="project__about">
				<Link href={`/projects/${name}`}>
					<Card>
						<Card.Body>
							<Card.Subtitle>{tag}</Card.Subtitle>
							<Card.Title>{name}</Card.Title>
						</Card.Body>
						<Card.Footer>
							<ArrowSvg>
								<GoArrowUpRight />
							</ArrowSvg>
							<span>DISCOVER</span>
						</Card.Footer>
					</Card>
				</Link>
			</div>

			{thumbImgs.map((img, i) => (
				<div key={name} className="project__img img-noise" data-image={i + 1}>
					<Link href={`/projects/${name}`}>
						<Image fill src={img} alt={name} />
					</Link>
				</div>
			))}
		</div>
	);
};

export default Project;
