
import logo from "../../assets/logo.png"
import moment from 'moment';
const Header = () => {

// console.log(import.meta.env.VITE_a);
    return (


        <div className='flex flex-col  justify-center  items-center gap-2 '>
        <div className='logo'>
            <img className="w-[300px]" src={logo} alt="" />
           
        </div>
        <h1 className='text-gray-500'>Journalism Without Fear or Favour</h1>
        <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;