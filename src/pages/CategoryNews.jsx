import { useLoaderData } from "react-router-dom";
import NewCart from "../component/NewCart";


const CategoryNews = () => {
    const {data:news}=useLoaderData();

    return (
        <div>
         <h2 className="font-semibold mb-3">Dragon News Home</h2>
 <p className="text-gray-400 text-sm">{news.length} News font the category</p>

 <div>

 </div>
 {
  news.map(singLeNews =><NewCart key={singLeNews._id} news={singLeNews}></NewCart>)
 }
 
        </div>
    );
};

export default CategoryNews;


































// import { useLoaderData } from "react-router-dom";

// const CategoryNews = () => {
//     const { data } = useLoaderData() || {}; 
//     if (!data || data.length === 0) {
//         return <p>Loading or no news available in this category.</p>;
//     }

//     return (
//         <div>
//             <h2 className="font-semibold mb-3">Dragon News Home</h2>
//             <p className="text-gray-400 text-sm">{data.length} News found in the category</p>
//         </div>
//     );
// };

// export default CategoryNews;