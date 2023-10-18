import { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import route from "./../../routes/route.json";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const { isUserAuth, userLoginHandler, setUserDataHandler } =
    useContext(AuthContext);

  const resetHandler = () => {
    setUsername("");
    setPassword("");
    setErrorMsg("");
  };

  const showError = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => setErrorMsg(""), 2000);
  };

  const loginHandler = () => {
    //validate
    if (!(username && password)) {
      showError("Please enter valid username and password");
      return;
    }
    //Here we can call the api
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      if (username === password) {
        //user login
        userLoginHandler();
        setUserDataHandler({ username });
      } else {
        showError("Incorrect username and password");
      }
    }, 2000);
  };

  return (
    <>
      {isUserAuth && <Navigate to={route.HOME} />}
      {loader && <Loader />}
      {!loader && (
        <>
          <div className="container card justify-content-center w-50 mt-5">
            <Row className="m-2">
              <Col>
                <label htmlFor="username">UserName :</label>
              </Col>
              <Col>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="m-2">
              <Col>
                <label htmlFor="pwd">Password : </label>
              </Col>
              <Col>
                <input
                  type="password"
                  id="pwd"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="m-2">
              <Col>
                <Button variant="primary" onClick={loginHandler}>
                  Login
                </Button>
              </Col>
              <Col>
                <Button variant="link" onClick={resetHandler}>
                  Reset
                </Button>
              </Col>
            </Row>
            <Row className="m-2">
              <p className="text-danger fw-bold"> {errorMsg}</p>
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default LoginForm;
