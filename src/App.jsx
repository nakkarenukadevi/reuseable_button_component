import { useEffect, useState } from 'react'

import './App.css'
import React from 'react';
// import Button from './Button';
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

return <div className='flex'><Table key={singleProduct.id} {...singleProduct}/></div>
    })}
    
    </div>
      {/* <h1>Reuseable Button  Component</h1>
     <div><Button style={{backgroundColor:"red",color:"white",padding:"10px",borderRadius:"5px",border:"none",cursor:"pointer"}}>
        redButton
      </Button></div> 
    <div> <Button style={{backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"5px",border:"none",cursor:"pointer"}}>
        blueButton
      </Button></div>  */}
    </>
  )
}

export default App
