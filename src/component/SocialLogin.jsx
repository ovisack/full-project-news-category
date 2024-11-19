import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";


const SocialLogin = () => {
    return (
        <>
        <div className="" >
         <h1 className="font-semibold mb-3 ">Login with</h1> 
  
        </div> 
        <div className=" md:flex w-screen md:gap-4  "> 
   <button className="bg-slate-400 w-[150px]  rounded hover:bg-orange-400 " ><BsGoogle/><p>Login with Google</p></button>  
   <button className="bg-slate-400 w-[150px] rounded hover:bg-orange-400 " ><FaGithub/><p>Login with gitHub</p></button></div>
   </> 
    );
};

export default SocialLogin;