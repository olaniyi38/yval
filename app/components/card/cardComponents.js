import Image from "next/image";

const CardHeader = ({ children }) => (
    <div className="card__header">{ children }</div>
);
const CardImage = ({ imgUrl, children }) => (
    <div className="card__img img-noise">
        <Image fill src={ imgUrl } alt="img" />
        { children }
    </div>
);
const CardTag = ({ children }) => <div className="card__tag">{ children }</div>;

const CardText = ({ children }) => <p className="card__text">{ children }</p>;

const CardSubtitle = ({ children }) => (
    <p className="card__subtitle">{ children }</p>
);

const CardTitle = ({ children }) => <p className="card__title">{ children }</p>;

const CardBody = ({ children }) => <div className="card__body">{ children }</div>;

const CardFooter = ({ children }) => (
    <div className="card__footer">{ children }</div>
);


export {
    CardBody, CardFooter, CardImage, CardTag, CardText, CardTitle, CardSubtitle, CardHeader

}