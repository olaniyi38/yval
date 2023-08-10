export const BTN_TYPES = {
	yellow: "yellow",
};

const Button = ({ variant, children, ...otherProps }) => {
	return (
		<button
			className={`button ${variant ? `button--${variant}` : ""}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
