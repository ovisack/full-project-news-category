
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewCart = ({news}) => {
    return (
        <>
        <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200 bg-white">
            <h1 className="text-black font-bold text-2xl">{news.title}</h1>
       <img
        className=" w-screen h-48object-cover"
        src={news?.thumbnail_url || "https://via.placeholder.com/300"}
        
      />

      <div>
        <Link className="text-primary"  to={`/news/${news._id}`}>Read More</Link>
      {/* <p className="text-gray-700 text-sm mb-4">{news?.details || "No details available."}</p> */}
      <FaStar />
     
      <p className="text-sm text-gray-500">{news?.views || 0} views</p> 
      </div>
    </div>
    
    
        </div>
        </>
    );
};

export default NewCart;





















