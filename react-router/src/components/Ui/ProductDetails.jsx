import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom"

export const ProductDetails = () => {


    let initialProduct = JSON.parse(localStorage.getItem("cartProduct")) || [];
    // state for cart product
    const [products, setProducts] = useState(initialProduct)
    // end 


    let productData = useLoaderData();
    let navigate = useNavigate()
    let { productId } = useParams();

    
    let updateId = Number(productId)

    let findProduct = productData.find((product) => {
        return product.id === updateId
    })



    let { title, description, price, discountPercentage, reviews,
        warrantyInformation } = findProduct;

    // add to cart functonality
    const handleAddToCartButton = () => {
        if (products) {
            let existingProd = products.find((prod) => {
                return prod.id === updateId;
            })

            if (existingProd) {
                alert("product existing")

            }
            else {
                let newProduct = { ...findProduct };
                setProducts((prev) => [...prev, newProduct])

                localStorage.setItem("cartProduct", JSON.stringify([...products, newProduct]))
                navigate(`/products/${updateId}/success`)

            }



        }



    }
    // end 

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* <!-- Product Image --> */}
                <div className="flex justify-center">
                    <img src={`${findProduct.images[0]}`} alt="Product Image" className="w-full h-auto rounded-lg shadow-md" />
                </div>

                {/* <!-- Product Information --> */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-gray-600 mb-6">{description}</p>

                    <div className="mb-6">
                        <span className="text-3xl font-bold text-green-600">{`price:${price}₹`}</span>
                        <span className="line-through text-gray-400 ml-3">{`discount:${discountPercentage
                            }%`}</span>
                    </div>



                    {/* <!-- Product Rating --> */}
                    <div className="flex flex-wrap gap-4">
                        {reviews.map((curr, index) => {
                            return <div key={`${curr.rating}${Math.random()}`} className="flex flex-col basis-36 grow">
                                <p className="text-gray-600 mb-6">{`rating:${curr.rating}`}</p>
                                <p className="text-gray-600 mb-6">{`comment:${curr.comment}`}</p>


                            </div>
                        })}
                    </div>

                    <div className="flex my-3 justify-between gap-4">
                        <p className="text-gray-600 mb-6">{`warranty:${warrantyInformation}`}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button className="bg-blue-600  border-none text-lg cursor-pointer hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full" onClick={handleAddToCartButton}>
                            Add to Cart
                        </button>
                        <button className="bg-blue-600 border-none text-lg  cursor-pointer hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full" onClick={() => {
                            navigate(-1)
                        }}>
                            go back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}