import { useLoaderData } from "react-router-dom";
import ProductsCard from "../../ProductsCard/ProductsCard";


const Products = () => {
    const {products} = useLoaderData();
    
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                products?.map(product => <ProductsCard key={product.id} product={product}></ProductsCard> )
            }
        </div>
    );
};

export default Products;