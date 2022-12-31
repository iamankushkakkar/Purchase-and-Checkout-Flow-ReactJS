import { Link } from "react-router-dom";
import { cartContext } from "../App";
import { useContext } from "react";

const Navigation = () => {
    const { cart } = useContext(cartContext);

    return (
        <nav className="container mx-auto flex items-center justify-between py-2">
            <img style={{ height: '75px' }} src="/images/logo.svg" alt="site-logo"></img>
            <ul className="flex items-center">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li className="ml-4">
                    <Link to="/products">Products</Link>
                </li>
                <li className="ml-4" >
                    <Link to="/cart">
                        <div className="rounded-full flex text-white p-3 bg-red-600">
                            <span>{cart.totalItems ? cart.totalItems : 0}</span>
                            <img className="ml-2" style={{ height: '25px' }} src="/images/cart.png" alt="cart"></img>
                        </div>
                    </Link>


                </li>
            </ul >
        </nav >
    )
}

export default Navigation