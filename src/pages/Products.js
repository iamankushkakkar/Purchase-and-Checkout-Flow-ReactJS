import Navigation from "../components/navigation"
import { ProductData } from "../ProductData.js"
import Product from "../components/Product";
const Products = () => {

    return (
        <>
            <Navigation />
            <div className="container mx-auto justify-between">
                <div className="grid grid-cols-3 my-8 gap-4 place-items-center">
                    {ProductData.map(data =>
                        <Product key={data.productId} productData={data} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Products