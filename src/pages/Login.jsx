import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";











const Login = () => {

const { userLogin, setUser}=useContext(AuthContext)

const LoginSubmit = (p) =>{

p.preventDefault();
const from=p.target;
const email=from.email.value;
const password=from.password.value;
console.log({email,password});
userLogin(email,password)
.then(result=>{
  const user=result.user;
  setUser(user)
})
.catch((error) => {
alert(error.code)
});
}
    return (
        <div className="flex justify-center mt-32">
             <div className="card bg-base-100 w-full  max-w-lg shrink-0 shadow-2xl py-10">
                <h2 className=" flex justify-center  font-bold text-4xl">Login your account</h2>
      <form onSubmit={LoginSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className=" flex justify-center mt-6">
          <button className="btn bg-slate-900 text-white md:w-64 sm:w-44">Login</button>
        </div>
      </form>
      <p className="flex justify-center font-semibold">Dont't Have An Account ? <Link to='/auth/register' className="text-red-400">Register</Link> </p>
    </div>
        </div>
    );
};

export default Login;