import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div>
      <Spinner className="my-5" animation="border" variant="secondary" />
    </div>
  );
};

export default Loader;
