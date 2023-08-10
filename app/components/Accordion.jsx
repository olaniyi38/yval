import { useState } from "react";
import { RxCross1, RxCrossCircled } from "react-icons/rx";

const Accordion = ({ question, answer }) => {
	const [isActive, setIsActive] = useState(false);

	function toggle() {
		setIsActive(!isActive);
	}
	return (
		<div className={`accordion  ${isActive ? "active" : ""}`} onClick={toggle}>
			<div className="accordion__title">
				<span>{question}</span>
				<RxCross1 />
			</div>
			<div className="accordion__content">{answer}</div>
		</div>
	);
};

export default Accordion;
