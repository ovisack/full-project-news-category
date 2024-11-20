import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";




const Register = () => {

const {createNewUser,setUser,updateUserProfile}=useContext(AuthContext)

const navigate=useNavigate()


const [error,setError]=useState({});


const handleSubmit = (e)=>{
  e.preventDefault();
const form=new FormData(e.target);
const photo=form.get('photo');
const name=form.get('name');
if(name.length<5){
  setError({...error, name:"mast be mor then 5 character login"});
  return;
}

const email=form.get('email');
const password=form.get('password');


// console.log({photo,name,email,password});
createNewUser(email,password)
.then((result)=>{
  const  user= result.user;
  setUser(user);
  updateUserProfile({displayname:name,photoURL:
    photo})


    .then(()=>{
      navigate("/")
    })
.catch(err=>{
  console.log(err);
})
  
})

.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorCode,errorMessage);
  // ..
})

}


    return (
        <div className="flex justify-center ">
        <div className="card bg-base-100 w-full  max-w-lg shrink-0 shadow-2xl py-10">
           <h2 className=" flex justify-center  font-bold text-4xl">Login your account</h2>
 <form onSubmit={handleSubmit} className="card-body">
   <div className="form-control">
   
     <label className="label">
       <span className="label-text font-bold">Your name</span>
     </label>
     <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
   </div>
   {error.name&&(
     <label className="label">
     <span className="label-text font-bold text-red-400">{error.name}</span>
   </label>
   )}
   <div className="form-control">
     <label className="label">
       <span className="label-text font-bold">photo URL</span>
     </label>
     <input type="text" name="photo" placeholder="Enter your photo" className="input input-bordered" required />
   </div>
   <div className="form-control">
     <label className="label">
       <span className="label-text font-bold">Email</span>
     </label>
     <input type="email" name="email" placeholder="email" className="input input-bordered" required />
   </div>
   
   <div className="form-control">
     <label className="label">
       <span className="label-text font-bold">Password</span>
     </label>
     <input type="password" name="password" placeholder="password" className="input input-bordered" required />
     <label className="label">
       <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
     </label>
   </div>
   <div className=" flex justify-center mt-6">
     <button className="btn bg-fuchsia-500 text-white md:w-64 sm:w-44">Register</button>
   </div>
 </form>
 <p className="flex justify-center font-semibold">AllReady Have  Account ? {''} <Link to='/auth/login' className="text-red-400">Login</Link></p>

</div>
   </div>
    );
};

export default Register;