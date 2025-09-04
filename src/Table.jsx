import './App.css'
import React from 'react';
import Button from './Button';
const Table=({id,image,title,category, price,rating,children})=>{
    
    return <>
 
<div className='flex p-10 flex-wrap '>
    
        
           <div className='border-gray-400 border-2 w-56 p-4 m-2 rounded-lg shadow-lg h-80 ' >
                <div>
                       <div className='h-30 flex justify-center item-center'> 
                        <img src={image} alt={title} style={{width:"100px",height:"100px"}}
                       className='hover:transform hover:scale-110 transition-transform duration-300'/>
                       </div>

            <div className='py-5'>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                
                <p>Rating: {rating.rate} ({rating.count} reviews)</p>
                <div className='flex justify-center item-center py-2'> <Button style={{backgroundColor:"blue",color:"white",padding:"10px",borderRadius:"5px",border:"none",cursor:"pointer"}}>Add to cart</Button></div>
                </div>
               
            </div>
            </div>
    
    
</div>
 
    </>
};
export default Table;
