import { FaFacebook, FaInstagram, FaSquareTwitter,  } from 'react-icons/fa6';
import './style.css'

const FindUs = () => {
    return (
        <div className="mt-20 ">
           <h2>Find Us on</h2> 
           <div className="grid grid-cols-1 gap-3 box  ">
  <div className='flex text-start'><button className="bg-slate-500 md:w-full h-12 hover:bg-emerald-400 justify-start  "><FaFacebook  />Facebook </button></div>
  <button className="bg-slate-500 md:w-full h-12 hover:bg-emerald-400 justify-start "><FaInstagram  />Facebook </button>
  <button className="bg-slate-500 md:w-full h-12 hover:bg-emerald-400 justify-start "><FaSquareTwitter />Facebook </button>

 
</div>
        </div>
    );
};

export default FindUs;