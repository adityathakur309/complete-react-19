import { useLoaderData } from "react-router-dom"
import { Card } from "../Ui/Card";
import "../Ui/productPage.css"

export const ProductPage = () => {
    let moviesData = useLoaderData();


    return (
        <section className="my-10">
            <h2 className="text-3xl text-center mb-6">our products</h2>

            <div className="flex flex-wrap gap-5 container product-container">
                {moviesData.map((product) => {
                    return <Card key={product.id} product={product} />
                })}
            </div>
        </section>

    )

}