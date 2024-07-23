import React from 'react'
import "./ProductDetails.css";
import { useQuery } from 'react-query'
import { TailSpin } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'

const fetchCategory = async (id) => {
    const response = await fetch(`http://localhost:2000/api/category/find-category/${id}`);
    if (!response.ok) {
        throw new Error("Network response was not ok !");
    } else {
        return response.json();
    }
}
const ProductDetails = () => {

    
    const {id} =  useParams();

    const { isLoading, error, data } = useQuery(['getCategory'], ()=>fetchCategory(id))


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
    <div>
      product-details
    </div>
  )
}

export default ProductDetails
