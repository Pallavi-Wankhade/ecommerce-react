import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageRoutes from "./routes/PageRoutes";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <div className="app">
            <PageRoutes />
          </div>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
