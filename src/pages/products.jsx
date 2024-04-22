import Button from "../components/Button/Index";
import CardProducts from "../components/Fragments/CardProducts";
import { useEffect, useState } from "react";
import { getDataProduct } from "../services/product.service";
import { useLogin } from "../Hooks/useLogin";

// const products = [
//   {
//     id: 1,
//     name: "Kaos",
//     price: 1000000,
//     image: "/images/baju-1.jpg",
//     desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
//   inventore, iusto tenetur praesentium perspiciatis commodi at?
//   Laboriosam ad hic veritatis.`,
//   },
//   {
//     id: 2,
//     name: "Sepeda",
//     price: 2500000,
//     image: "/images/sepeda-2.jpg",
//     desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. `,
//   },
//   {
//     id: 3,
//     name: "Sepeda Bekas",
//     price: 2000000,
//     image: "/images/sepeda-2.jpg",
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi nostrum architecto sit? Dolorum tenetur quidem quisquam quas saepe? A ratione sapiente soluta illo eum aperiam labore eveniet iusto suscipit. `,
//   },
//   {
//     id: 4,
//     name: "Kaos bekas",
//     price: 500000,
//     image: "/images/baju-1.jpg",
//     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.1`,
//   },
// ];

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getDataProduct((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const total = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(total);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("fullname");
    // localStorage.removeItem("confirm");
    window.location.href = "/login";
  };
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };
  return (
    <>
      <div className="flex justify-end items-center h-16 bg-blue-500 px-10 text-white">
        {username}
        <Button classname=" bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 ">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header image={product.image} id={product.id} />
                <CardProducts.Body name={product.title.substring(0, 10)}>
                  {product.description.substring(0, 70)}
                </CardProducts.Body>
                <CardProducts.Footer
                  handleAddToCart={handleAddToCart}
                  id={product.id}
                >
                  {product.price}
                </CardProducts.Footer>
              </CardProducts>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-500 ml-5 mb-5">Cart</h1>
          <table className="text-left border-separate border-spacing-x-5 table-auto ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}</td>
                      <td>
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td className="text-center">{item.qty}</td>
                      <td>
                        {(product.price * item.qty).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
