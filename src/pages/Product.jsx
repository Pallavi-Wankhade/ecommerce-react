import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Loader from "../components/Loader/Loader";

const Product = () => {
  const { pid } = useParams(); // take data fron url
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");

  const { addToCart, message } = useContext(CartContext);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${pid}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  };

  // const Loading = () => {
  //   return <>Loading....</>;
  // };

  const ShowProducts = (index) => {
    return (
      <>
        <div className="col-md-6 my-5 " key={index}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            height="350px"
          />
        </div>
        <div className="col-md-6 p-3 my-5 text-left">
          <h3 className=" mb-2">{product.category}</h3>
          <h5 className=" mb-2">{product.title}</h5>
          <h3 className=" mb-2">$ {product.price}</h3>
          <p className="text-justify">{product.description}</p>
          {/* <Button onClick={() => navigate("/cart")}>Go to cart</Button> */}
          <Link
            className="btn btn-primary me-2"
            onClick={() => addToCart(product)}
          >
            Add to CART
          </Link>
          <p className="my-3 fw-bolder text-success fs-3">{message}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">{loading ? <Loader /> : <ShowProducts />}</div>
      </div>
    </>
  );
};

export default Product;
