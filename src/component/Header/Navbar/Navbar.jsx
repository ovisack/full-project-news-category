

import { Link } from 'react-router-dom';
import userIcon from './user.png'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    return (
        <div className=' flex justify-between '>
         <div>{user&&user.name}</div>
         
        <div className="nav space-x-5 items-center"> 
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to ="/career">Career</Link>
        </div>
        <div onClick={logOut} className="login flex space-x-2 items-center">
<img src={userIcon} alt="" />
{
    user && user?.email?( <button className='bg-black text-white w-24'>Logout</button>) 
    :(<Link to='/auth/login' className='bg-black text-white w-24'>Login</Link>)
} 
        </div>
        </div>
    );
};

export default Navbar;