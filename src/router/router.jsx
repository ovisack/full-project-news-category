import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layouts/Layout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivetRouter from "./PrivetRouter";


const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'',
                element:<Navigate to={"category/01"}></Navigate>


            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id || '02'}`),
                
            },
        
        ],
        },
            
        
    
    {
        path:'/news/:id',
        element:<PrivetRouter>
            <NewsDetails></NewsDetails>
        </PrivetRouter>,
        loader:({params})=> fetch(` https://openapi.programming-hero.com/api/news/${params.id}`)

        
    
},

{
    path:"/auth",
    element:<AuthLayout></AuthLayout>,
    children:[
        {
            path:'/auth/login',
            element:<Login></Login>
         
        },
        {
            path:'/auth/register',
            element:<Register></Register>
         
        }
    ]
},
{
    path:'*',
    element:<h1> ERROR pge</h1>
}


])


export default router;