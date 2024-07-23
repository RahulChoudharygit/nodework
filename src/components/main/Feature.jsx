import React from 'react'
import "./Feature.css"
import { useQuery } from 'react-query'
import { TailSpin } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

const fetchCategory = async () => {
    const response = await fetch('http://localhost:2000/api/category/find-category');
    if (!response.ok) {
        throw new Error("Network response was not ok !");
    } else {
        return response.json();
    }
}

const Feature = (props) => {

    const { isLoading, error, data } = useQuery(['getCategory'], fetchCategory)


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
        <section>
            <div className="container">
                <div className="sell_products">
                    {
                        data.data.map((element, index) => (
                            <div className="feature-product" key={index}>
                                <div className="pro_image">
                                    <img src={element.image} alt="" />
                                </div>
                                <div className="pro_name">
                                    <h4>{element.category}</h4>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Feature
