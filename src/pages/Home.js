import { Link } from "react-router-dom"
import Navigation from "../components/navigation"
const Home = () => {

    return (
        <>
            <Navigation />
            <div>
                <div className="flex flex-col items-center text-center  md:pt-16">
                    <h1 className="flex text-red text-5xl font-extrabold">Demo Assesment</h1>
                </div>
                <div className="flex flex-col items-center flex-nowrap w-full  md:pt-5">
                    <h1 className="flex text-red text-xl ">Product Purchase and Checkout Flow</h1>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <img src={"/images/cheeseburger.png"} width={400} height={400} alt="header" />
            </div>
            <div className="flex flex-col items-center text-center  md:pt-16">
                <Link to="/products">
                    <p className="bg-red-500 rounded-full px-4 font-bold text-white"> Go To Product</p>
                </Link>
            </div>
        </>
    )
}

export default Home
