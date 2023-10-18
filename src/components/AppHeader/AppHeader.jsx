import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import route from "./../../routes/route.json";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

const AppHeader = () => {
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const {
    isUserAuth,
    logoutHandler,
    userData: { username },
  } = useContext(AuthContext);

  const activeClasses = ({ isActive }) =>
    isActive
      ? "text-white text-decoration-none fw-bold"
      : "text-white text-decoration-none";

  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>GoShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* link mapping.. */}
            <Nav.Link>
              <NavLink className={activeClasses} to={route.HOME}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={activeClasses} to={route.PRODUCTS}>
                Products
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink className={activeClasses} to={route.PRODUCTS}>
                Categories
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={activeClasses} to={route.CONTACT}>
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link>
              <NavLink className={activeClasses} to={route.HOME}>
                City
              </NavLink>
            </Nav.Link> */}

            {username && (
              <Nav.Link>
                <Button variant="primary " style={{ cursor: "default" }}>
                  <i className="bi bi-person-fill">
                    <span className="ms-2">{username}</span>
                  </i>
                </Button>
              </Nav.Link>
            )}
            <Nav.Link>
              <NavLink to={route.CART}>
                <Button variant="primary">
                  <i className="bi bi-cart3"></i>
                  {cartCount > 0 && (
                    <Badge pill bg="danger">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              {!isUserAuth && (
                <Button variant="light" onClick={() => navigate(route.LOGIN)}>
                  Login
                </Button>
              )}
              {isUserAuth && (
                <Button variant="primary" onClick={logoutHandler}>
                  Logout
                </Button>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default AppHeader;
