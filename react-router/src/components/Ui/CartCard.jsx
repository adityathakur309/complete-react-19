import { useNavigate } from "react-router-dom"

export const CartCard = ({ product }) => {
    let navigate = useNavigate()
    let { description, price, title, reviews, warrantyInformation, discountPercentage } = product
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap gap-8">

                {/* <!-- Product Image --> */}
                <div className="flex basis-80 grow shrink-0 justify-center">
                    <img src={`${product.images[0]}`} alt="Product Image" className="w-full h-auto object-cover object-center rounded-lg shadow-lg" />
                </div>

                {/* <!-- Product Information --> */}
                <div className="basis-80 grow shrink-0">
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-gray-600 mb-6">{description}</p>

                    <div className="mb-6 flex gap-2 flex-wrap">
                        <span className="text-3xl block font-bold text-green-600">{`price:${price}₹`}</span>
                        <span className="line-through block text-gray-400 ">{`discount:${discountPercentage
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
                        <button className="bg-blue-600  border-none text-lg cursor-pointer hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full" onClick={() => {
                            navigate("/products")
                        }}>
                            buy now
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}