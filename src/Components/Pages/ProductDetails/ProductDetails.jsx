import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product)
    const { 
        thumbnail
        , price, description
,        title} = product || {}
    return (
        <div className="flex justify-center">
            
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={
thumbnail
} />
    <div className="flex flex-col justify-between p-4 leading-normal space-y-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description
        }</p>
        <div className="flex justify-end">
        <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 outline-none">Add to cart</button>
        </div>
    </div>
</a>

        </div>
    );
};

export default ProductDetails;