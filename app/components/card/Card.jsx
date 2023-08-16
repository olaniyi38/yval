import Image from "next/image";
import React from "react";
import {
	CardBody,
	CardFooter,
	CardImage,
	CardText,
	CardTitle,
	CardTag,
	CardSubtitle,
	CardHeader,
} from "./cardComponents";

const Card = ({ children }) => {
	return <div className="card">{children}</div>;
};

Card.Header = CardHeader;
Card.Image = CardImage;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
Card.Tag = CardTag;

export default Card;
