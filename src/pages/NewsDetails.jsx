import { Link, useLoaderData } from "react-router-dom";
import Header from "../component/Header/Header";
import Right from "../component/Layout_component/Right";


const NewsDetails = () => {
const data=useLoaderData();
const news =data.data[0];




    return (
        <div>
           <header>
            <Header></Header>
           </header>
           <main className="w-11/12 mx-auto grid grid-cols-12 gep-5">
           
           <section className="col-span-9"><h2 className="font-semibold mb-3">Dragon News </h2>
           <div className="card bg-base-100 w-full shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={news?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{news.title}</h2>
    <p>{news.details}</p>
    <div className="card-actions">
      <Link to={`/category/${news?.category_id}`} className="btn btn-primary" >Back to category</Link >
    </div>
  </div>
</div>
           </section>
           <aside className="col-span-3">
            <Right></Right>
           </aside>
           
           </main>
        </div>
    );
};

export default NewsDetails;