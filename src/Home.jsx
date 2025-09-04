import React from 'react';
import { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import Table from './Table';


const Home=()=>{
    let [product,setProduct]=useState([]);
     let handleAddProduct=async()=>{
let productData=await fetch("https://fakestoreapi.com/products")
let productJson=await productData.json();
setProduct(productJson);

 }
useEffect(()=>{
handleAddProduct()
},[])
let navigate=useNavigate()
const handleviewDetails=()=>{
  navigate("/product")

}
    return <>
    <div className='flex flex-wrap mx-16'>{product.map((singleProduct)=>{

return <div className='flex' key={singleProduct.id}><Table  {...singleProduct}  onViewDetails={handleviewDetails}/>
</div>
    })}
    
    </div>
    </>
}
export default Home