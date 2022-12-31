import Navigation from "../components/navigation"
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"

import { cartContext } from "../App";
import { ProductData } from "../ProductData.js"
import { useForm } from "react-hook-form";
// import * as yup from "yup";


const Cart = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    console.log(errors);

    const [products, setProduct] = useState([]);

    const { cart, setCart } = useContext(cartContext);
    const newCart = { ...cart };

    const onSubmit = async (data) => {
        alert("Order Process Sucessfully");

        setProduct([]);
        setCart({});
        window.location.href = '/';
        // console.log(data);
        // const fields = { fields: data };
    };
    let grandTotal = 0;
    // setCart({});

    useEffect(() => {
        if (!cart.items) {
            return;
        }
        const findItems = ProductData.filter(obj => {


            return cart.items[obj.productId] > 0;


        });
        setProduct(findItems);

    }, [cart]);

    const getProductQuantity = (productId) => {
        return cart.items[productId];
    }

    const productQuantityIncrement = (productId) => {
        newCart.items[productId] = getProductQuantity(productId) + 1;
        newCart.totalItems += 1;
        setCart(newCart);
    }

    const productQuantityDecrement = (productId) => {
        newCart.items[productId] = getProductQuantity(productId) - 1;
        newCart.totalItems -= 1;
        setCart(newCart);
    }

    const deleteProduct = (productId) => {
        const newCart = { ...cart };
        newCart.totalItems -= getProductQuantity(productId);
        delete newCart.items[productId];
        // newCart.totalItems -= getProductQuantity(productId);
        setCart(newCart);
    }
    const totalProductAmount = (productId, productPrice) => {
        const total = productPrice * getProductQuantity(productId);
        grandTotal += total;
        return total;

    }

    return (
        <>
            <Navigation />
            {!products.length ?
                <div>
                    <div className="flex flex-col items-center text-center  md:pt-16">
                        <h1 className="flex text-red text-5xl font-extrabold">Cart is Empty</h1>
                    </div>
                    <div className="flex flex-col items-center flex-nowrap w-full  md:pt-5">
                        <h1 className="flex text-red text-xl ">Add Products From Cart</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/cheeseburger.webp" width={400} height={400} alt="empty cart" />
                    </div>
                    <div className="flex flex-col items-center text-center  md:pt-16">
                        <Link to="/products">
                            <p className="bg-red-500 rounded-full px-4 font-bold text-white"> Go To Product</p>
                        </Link>
                    </div>
                </div>
                :
                <div>
                    <div className="container mx-auto p-12">
                        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">

                            <div class="flex flex-col md:w-full">
                                <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                                </h2>
                                <form class="justify-center w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                                    <div class="">
                                        <div class="space-x-0 lg:flex lg:space-x-4">
                                            <div class="w-full lg:w-1/2">
                                                <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                                                    Name</label>
                                                <input name="firstName" id="firstName" type="text" placeholder="First Name"
                                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("firstName", { required: 'First Name is Required' })} />
                                                {errors.firstName && (
                                                    <div className="mb-3 text-normal text-red-500 ">{errors.firstName?.message}</div>
                                                )}
                                            </div>
                                            <div class="w-full lg:w-1/2 ">
                                                <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                                                    Name</label>
                                                <input name="lastName" type="text" placeholder="Last Name"
                                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("lastName", { required: 'Last Name is Required', })} />
                                                {errors.lastName && (
                                                    <div className="mb-3 text-normal text-red-500 ">{errors.lastName?.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <div class="w-full">
                                                <label for="Email"
                                                    class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                                <input name="email" type="text" placeholder="Email"
                                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("email", {
                                                        required: 'Email is Required', pattern: {
                                                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                            message: 'email should be example@example.com' // JS only: <p>error message</p> TS only support string
                                                        }
                                                    })} />
                                                {errors.email && (
                                                    <div className="mb-3 text-normal text-red-500 ">{errors.email?.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <div class="w-full">
                                                <label for="Address"
                                                    class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                                <textarea
                                                    class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                    name="Address" cols="20" rows="4" placeholder="Address" {...register("Address", { required: 'Address is Required' })}></textarea>
                                                {errors.Address && (
                                                    <div className="mb-3 text-normal text-red-500 ">{errors.Address?.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div class="space-x-0 lg:flex lg:space-x-4">
                                            <div class="w-full lg:w-1/2">
                                                <label for="city"
                                                    class="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                                <input name="city" type="text" placeholder="City"
                                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("city", { required: 'City is Required' })} />
                                                {errors.city && (
                                                    <div className="mb-3 text-normal text-red-500 ">{errors.city?.message}</div>
                                                )}
                                            </div>
                                            <div class="w-full lg:w-1/2 ">
                                                <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">
                                                    Postcode</label>
                                                <input name="postcode" type="text" placeholder="Post Code"
                                                    class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("postcode", { required: 'Postal code is Required' })} />
                                                {errors.postcode && (
                                                    <div className="mb-3 text-normal text-red-500 ">{errors.postcode?.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <button
                                                class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">Review & Process Order</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-5/5">
                                <h1 className="text-center font-bold">Cart Items</h1>
                                <ul>
                                    {
                                        products.map(product => (
                                            <li className="mb-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img className="h-16" src={"/images/" + product.productName + ".webp"} alt="cart"></img>
                                                        <span className="italic ml-4 w-48">{product.productName}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <button className="bg-red-400 rounded-full px-4 text-white font-bold" onClick={() => { productQuantityDecrement(product.productId) }}>-</button>
                                                        <span className="px-4">{getProductQuantity(product.productId)}</span>
                                                        <button className="bg-green-400 rounded-full px-4 text-white font-bold" onClick={() => { productQuantityIncrement(product.productId) }}>+</button>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="px-4 font-bold">INR {totalProductAmount(product.productId, product.productPrice)}</span>
                                                        <button className="bg-red-500 rounded-full px-4 font-bold text-white" onClick={() => { deleteProduct(product.productId) }}> Delete</button>
                                                    </div>
                                                </div>

                                            </li>
                                        ))
                                    }


                                </ul>
                                <hr />
                                <div className="text-right py-2 mt-5">
                                    Total Items: <b> {cart.totalItems}</b>
                                </div>
                                <div className="text-right py-2 mt-5">
                                    Total Amount: <b>INR {grandTotal}</b>
                                </div>
                                {/* <div className="text-center">
                            <button className="bg-orange-500 rounded-full px-4 font-extrabold text-white py-2 mt-10 leading-none ">Order Now</button>
                        </div> */}
                            </div>
                        </div >
                    </div>
                </div>
            }

        </>

    )
}

export default Cart