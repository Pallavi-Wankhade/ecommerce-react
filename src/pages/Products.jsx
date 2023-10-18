import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setLoading] = useState(false);

  // calling api to fetch data.
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setfilter(data);
        setLoading(false);
        console.log(data);
        // console.log(filter);
      });
  };

  // const Loading = () => {
  //   return <>Loading....</>;
  // };

  const filterProduct = (category) => {
    const newData = data.filter((x) => x.category === category);
    setfilter(newData);
  };

  const ShowProducts = (id) => {
    return (
      <>
        <div className="justify-content-center text-center mb-3 " key={id}>
          <button
            className="btn btn-primary m-2 "
            onClick={() => setfilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-primary m-2 "
            onClick={() => filterProduct("men's clothing")}
          >
            Mens
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jwellery
          </button>
          <button
            className="btn btn-primary m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        {/* create array of product ny using map. */}
        {filter.map((product, index) => {
          return (
            <>
              <div className="col-md-3 mb-4 ">
                <div className="card h-100 text-center mt-2 p-4" key={index}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="300px"
                  />
                  <div className="">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 20)}
                    </h5>
                    <p className="card-text fw-bold">${product.price}</p>
                    <Link className="btn btn-primary" to={`${product.id}`}>
                      Buy now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  // returning product Array.
  return (
    <>
      <div>
        <div className="container my-2 py-2">
          <div className="row">
            <div className="col-12">
              <p className="display-6 fw-bold text-center">
                Collection of designs
              </p>
            </div>
          </div>
          <div className="row">{loading ? <Loader /> : <ShowProducts />}</div>
        </div>
      </div>
    </>
  );
};

export default Products;
