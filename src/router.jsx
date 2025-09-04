import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ViewProductDetails from "./ViewProductDetails";
import Hearder from "./Hearder";
import React from "react"
import Home from "./Home";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/header",
                element:<Hearder/>

            },
       
            {
                path:"/product",
                element:<ViewProductDetails/>
            }
        ]
    }



]);
export default router;