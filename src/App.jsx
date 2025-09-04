import { useEffect, useState } from 'react'

import './App.css'
import React from 'react';
import Button from './Button';
import Table from './Table';
import Hearder from './Hearder';
function App() {
 let [product,setProduct]=useState([]);

 let handleAddProduct=async()=>{
let productData=await fetch("https://fakestoreapi.com/products")
let productJson=await productData.json();
setProduct(productJson);

 }
useEffect(()=>{
handleAddProduct()
},[])
  return (
    <>
    <Hearder/>
    <div className='flex flex-wrap'>{product.map((singleProduct)=>{

return <div className='flex' key={singleProduct.id}><Table  {...singleProduct}/>
</div>
    })}
    
    </div>
   
  
    </>
  )
}

export default App
