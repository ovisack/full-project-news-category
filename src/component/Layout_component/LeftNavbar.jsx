import { builtin } from "globals";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
const [categories,setCategories]=useState([],

    useEffect(()=>{
fetch('https://openapi.programming-hero.com/api/news/categories')
.then((res)=> res.json())
.then((data)=> setCategories(data.data.news_category))

    },[])
)

    return (
        <div className=""> 
            <h2 className="font-semibold">All Caterogy {categories.length}</h2>
            <div className="flex  flex-col gap-2 w-52 mt-7 ">
            {
              categories.map((category) => <NavLink to={`/category/${category.category_id}`}
            className="bg-slate-400  h-14 rounded-full hover:bg-green-600 text-center" 
            key={category.category_id} >{category.category_name}</NavLink>)
            }
            </div>
        </div>

    );
};

export default LeftNavbar;