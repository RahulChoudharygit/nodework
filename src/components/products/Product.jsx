import React from 'react'
import "./Product.css";
import { Link } from "react-router-dom"
import { useQuery } from 'react-query'
import { TailSpin } from 'react-loader-spinner'

const fetchProduct = async () => {
    const response = await fetch('http://localhost:2000/api/products/find-Products');
    if (!response.ok) {
        throw new Error("Network response was not ok !");
    } else {
        return response.json();
    }
}

const Product = () => {

    const { isLoading, error, data } = useQuery(['getProducts'], fetchProduct)

    // console.log(data);

    if (isLoading) return <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />;

    if (error) {
        return (
            <div>
                Error: {error.message}
            </div>
        )
    }

    return (
        <section id="produtPage">
            <div className="container">

                <div className="Product_heading">
                    <h1>Feature your own favoured and Choose your be-loved <i className="fa-regular fa-face-kiss-wink-heart"></i></h1>
                </div>


                <div className="produtFlex">
                    {data && data.product.map((element, index) => (
                        <div className="product">
                            <div className="produtImage">
                                <img src={element.image} alt="" />
                            </div>
                            <div className="produtData">
                                <h1>{element.product_name}</h1>
                                <h2>${element.price}</h2>
                                <Link to="/details"><i className="fa-solid fa-cart-shopping"></i> Buy Now</Link>
                            </div>
                        </div>
                        
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Product
