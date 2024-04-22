import { Link } from "react-router-dom";
import Button from "../Button/Index";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-3 flex flex-col">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/detail/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, name, id } = props;
  return (
    <div className="px-5 pb-3 py-4 h-full">
      <a href="http://">
        <h5 className="text-xl font-semibold tracking-tight text-white mb-2">
          {name} {id}
        </h5>
        <p className="text-s text-white text-s">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { children, handleAddToCart, id } = props;
  return (
    <div className="flex justify-between px-5 pb-5 items-center">
      <span className="text-xl font-bold text-white">
        {children.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to Card
      </Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;
export default CardProducts;
