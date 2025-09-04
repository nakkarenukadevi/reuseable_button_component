
import React from "react"
import './App.css'
import Hearder from './Hearder';

import { Outlet, useNavigate } from 'react-router-dom';
function App() {
 


  return (
    <>
    <Hearder/>
    <Outlet/>
    
   
  
    </>
  )
}

export default App
