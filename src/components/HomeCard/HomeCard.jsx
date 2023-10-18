import { Link } from "react-router-dom";
import route from "../../routes/route.json";

const HomeCard = () => {
  return (
    <div>
      <div className="  card text-bg-dark text-dark border-0">
        <img
          src="./../images/card.avif"
          className="card-img"
          alt="backgroung-image"
          height="550px"
        />
        <div className=" col-md-6 card-img-overlay d-flex flex-column ">
          <div className="container">
            <h5 className="card-title text-left display-3 fw-bolder mb-0">
              New Arrivals
            </h5>
            <p className="card-text mt-3 fw-bolder">SHOP ANYTIME ANYWHERE</p>
            <p className="card-text fs-4">
              <small>Last updated 3 mins ago</small>
            </p>
            <Link className="btn btn-primary mt-3" to={route.PRODUCTS}>
              Start Shopping
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomeCard;
