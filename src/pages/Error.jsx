import { Link, useNavigate } from "react-router-dom";
import route from "./../routes/route.json";
import { useEffect, useState } from "react";

const Error = () => {
  const [count, setCount] = useState(5);
  const navigation = useNavigate();

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      //redirect the user to home page.
      navigation(route.HOME);
    }
  }, [count, navigation]);

  return (
    <>
      <div className="text-center">
        <h1 className="mt-3 text-danger">Error:404 not found</h1>
        <p className="text-danger">
          Please, redirect to <Link to={route.HOME}>Home</Link>
        </p>
        <p>Auto redirect to home page in {count} sec.</p>
      </div>
    </>
  );
};

export default Error;
