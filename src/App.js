import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { useEffect, useState, createContext } from "react";
import Cart from "./pages/Cart";

export const cartContext = createContext(null);

const App = () => {
    const [cart, setCart] = useState({});

    useEffect(() => {
        const cart = window.localStorage.getItem('cart');
        setCart(JSON.parse(cart));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <Router>
                <cartContext.Provider value={{ cart, setCart }}>
                    <Routes>
                        <Route path="/" element={<Home />} exact></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/products" element={<Products />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                    </Routes>
                </cartContext.Provider>
            </Router>
        </>
    )
}

export default App;