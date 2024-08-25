import { Link, NavLink } from "react-router-dom";
import userPic from '../../assets/user.svg';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
  }


  const navPage = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li className={!user && 'hidden'}><NavLink to='/marked'>Marked</NavLink></li>
    <li className={!user && 'hidden'}><NavLink to='/contact'>Contact</NavLink></li>
    <li className={!user && 'hidden'}><NavLink to='/about'>About Us</NavLink></li>
    <li className={user && 'hidden'}><NavLink to='/login'>Login</NavLink></li>
    <li className={user && 'hidden'}><NavLink to='/register'>Register</NavLink></li>
  </>

  return (
    <div className="bg-[#f3f3f3]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow activeNav">
              {navPage}
            </ul>
          </div>
          <span className="flex items-center">
            <img className="h-16 w-16 hidden sm:block" src="https://i.postimg.cc/prKPzWmL/real-estate-logo.png" alt="" />
            <a className="btn btn-ghost text-2xl md:text-3xl font-bold md:font-extrabold text-[#1c1c1c]">Build Craft</a>
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="lg:flex gap-5 px-1 text-lg font-semibold activeNav">
            {navPage}
          </ul>
        </div>
        <div className="navbar-end">

          {
            user? <img className="w-10 h-10 rounded-full mr-2" src={`${user.photoURL}`} alt="" /> : <img className="w-10 h-10 rounded-full mr-2" src={userPic} alt="" />
          }

          {
            user? <button onClick={handleLogOut} className="btn btn-md bg-[#23BE0A] text-white font-semibold">Sign Out</button> : <Link to='/login'><button className="btn btn-md bg-[#23BE0A] text-white font-semibold">Sign In</button></Link>
          }
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {

};

export default Navbar;