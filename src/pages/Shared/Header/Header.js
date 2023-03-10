import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import img from '../../../assets/images/img.png';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const menuItems = <>
    
        <li><Link className='font-bold' to="/home">Home</Link></li>
        <li><Link className='font-bold' to="/services">Services</Link></li>
        <li><Link className='font-bold' to="/blogs">Blogs</Link></li>
        {
            user?.uid ? 
                <>
                    <li><Link className='font-bold' to="/myreviews">My Reviews</Link></li>
                    <li><Link className='font-bold' to="/addservice">Add Service</Link></li>
                    <li><Link className='font-bold' onClick={logOut}>log out</Link></li>
                    <div className="tooltip tooltip-right" data-tip={user.displayName}>
                        <img width={40} height={40} className="rounded-full" src={user.photoURL} alt="" />  
                    </div>
                                
                </>
                :
                <li><Link className='font-bold' to="/login">Login</Link></li>
        }
       
       
        
    </>
        
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost"><img width={70} height={50} src={img} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                   {menuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Header;