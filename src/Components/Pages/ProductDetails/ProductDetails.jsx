import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product)
    return (
        <div>
            Product details
        </div>
    );
};

export default ProductDetails;