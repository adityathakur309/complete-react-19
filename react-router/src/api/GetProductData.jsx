export const getProducts = async () => {

    try {
        let res = await fetch('https://dummyjson.com/products/?limit=10');
        let data = await res.json();
        let products = await data.products;

        return products;




    } catch (error) {
        console.log(error);

    }


}