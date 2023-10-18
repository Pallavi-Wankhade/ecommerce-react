import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    decrementHandler,
    incrementHandler,
    cartTotal,
  } = useContext(CartContext);

  console.log("added item is", cartItems);

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="container">
          <h3 className="my-3 ">Your Cart</h3>
          <div className="px-4  bg-light rounded-3 ">
            <div className="container mt-2 card">
              <div className="">
                {cartItems.map((item) => (
                  <div
                    className=" d-flex justify-between my-3 items-center"
                    key={item.id}
                  >
                    <div className="col-md-4 ">
                      <img
                        src={item.image}
                        alt=""
                        height="100px"
                        width="100px"
                      />
                      <h5>{item.title.slice(0, 18)}</h5>
                      <hr />
                    </div>
                    <div className=" d-flex justify-content-between col-md-8 my-3 ">
                      {/* <h5 className="mx-4">{item.category}</h5> */}
                      <div>
                        <h5>Quantity </h5>
                        <div className="d-flex">
                          <div
                            className="d-flex
    "
                          >
                            <Button
                              variant="light"
                              onClick={() => decrementHandler(item)}
                            >
                              -
                            </Button>
                            <h5 className="mx-2">{item.quantity}</h5>
                            <Button
                              variant="light"
                              onClick={() => incrementHandler(item)}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5>Price</h5>
                        <h5 className="mx-4">$ {item.price}</h5>
                      </div>
                      <div>
                        <h5>Total</h5>
                        <h5 className="mx-4">${item.price * item.quantity}</h5>
                      </div>
                      <div>
                        <Button
                          variant="secondary"
                          onClick={() => removeFromCart(item)}
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-right d-flex justify-content-between border border-light">
                <div className=""></div>
                <div className="d-flex">
                  <h5> Grand Total $ </h5>
                  <h4> {cartTotal}</h4>
                </div>
              </div>
            </div>
            <div className="d-flex  text-center justify-content-center mx-4 my-4">
              <Button className="primary mx-3">Proceed to checkout</Button>
              <Button onClick={() => clearCart()}>Clear cart</Button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-lg my-5 font-bold">Your cart is empty</h1>
      )}
    </>
  );
};

export default Cart;
