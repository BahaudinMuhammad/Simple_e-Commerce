import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

const DetailProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  const handleBack = (e) => {
    e.preventDefault();
    window.location.href = "/products";
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex font-sans max-w-xl">
        <div className="flex-none w-48 relative">
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {product.title}
            </h1>
            <div className="text-lg font-semibold text-slate-500">
              ${product.price}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              <p>{product.description}</p>
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-700">{product.category}</p>
        </form>
      </div>
    </div>
  );
};

export default DetailProductPage;
