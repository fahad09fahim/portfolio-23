const Navbar = () => {
  const navList = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Skill</a>
      </li>
      <li>
        <a>Resume</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#f8f9fa31] px-0 md:px-16 text-black font-semibold fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-600 rounded-box w-52"
          >
            {navList}
          </ul>
        </div>
        <h2 className="text-xl font-semibold font">Fahim</h2>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
    </div>
  );
};

export default Navbar;
