import { cartContext } from "../App";
import { useContext, useState } from "react";

const Product = (props) => {
    const [isAddded, setAdded] = useState(false);
    const { cart, setCart } = useContext(cartContext);
    const addToCart = (e, productData) => {
        let _cart = { ...cart };
        if (!_cart.items) {
            _cart.items = {}

        }
        if (_cart.items[productData.productId]) {
            _cart.items[productData.productId] += 1;
        } else {
            _cart.items[productData.productId] = 1;
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;

        setCart(_cart);
        setAdded(true);
    }
    return (
        <div>
            <div key={props.productData.productId}>
                <img className="text-center" style={{ height: '250px' }} src={"/images/" + props.productData.productName + ".png"} alt="cart"></img>
                <h2 className="text-lg font-bold py-2 text-center">{props.productData.productName}</h2>
                <div className="flex justify-between items-center mt-4">
                    <span>INR {props.productData.productPrice}</span>
                    <button disabled={isAddded} className={`${isAddded ? 'bg-red-500' : 'bg-green-500'} rounded-full px-4 py-1 text-white font-bold`} onClick={(e) => { addToCart(e, props.productData) }}>{isAddded ? 'Added' : 'Add'}</button>
                </div>
            </div>
        </div>
    )
}

export default Product