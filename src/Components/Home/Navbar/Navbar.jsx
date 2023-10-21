import { Link } from "react-router-dom";

const Navbar = () => {
  const navList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">projects</Link>
      </li>
      <li>
        <Link to="/skill">Skill</Link>
      </li>

      <li>
        <a href="https://drive.google.com/file/d/1pmA8o3RE1QACO7Kuy9w0zb7zLBgY-xcu/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#0000007d] px-0 md:px-16 text-white font-semibold fixed z-10" >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" > 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
        
     
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-[#0000007d] rounded-b-box w-52"
          >
            {navList}
          </ul>
        </div>
        <h2 className="text-xl font-semibold font">Fahim</h2>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="flex gap-6">{navList}</ul>
      </div>
    </div>
  );
};

export default Navbar;
