import './App.css'
import React from 'react';
const Table=({id,image,title,category, price,rating})=>{
    
    return <>
 
<div className='flex p-10 flex-wrap '>
    
        
           <div className='border-gray-400 border-2 w-56 p-4 m-2 rounded-lg shadow-lg h-68 ' >
                <div>
                       <div className='h-30 flex justify-center item-center'> 
                        <img src={image} alt={title} style={{width:"100px",height:"100px"}}
                       className='hover:transform hover:scale-110 transition-transform duration-300'/>
                       </div>

            <div className='py-5'>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                
                <p>Rating: {rating.rate} ({rating.count} reviews)</p>
                </div>
            </div>
            </div>
    
    
</div>
 
    </>
};
export default Table;
