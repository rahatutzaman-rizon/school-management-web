import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/',
      subMenu:
      [
        { name: 'Vision, Mission and Values', path: '/' },
        { name: 'Why Choose Us', path: '/' },
        { name: 'Principal Message', path: '/' },
        { name: 'Our Team', path: '/' },
        { name: 'Curriculum', path: '/' },
        { name: 'History', path: '/' },
        { name: 'Campus', path: '/' }
      ],
    },
    {
      name: 'Admission',
      path: '/',
     subMenu: [
        { name: 'Brief Admission Procedure', path: '/' },
        { name: 'Scholarship', path: '/' },
        { name: 'School Fees', path: '/' },
        { name: 'Withdrawal Policy', path: '/' },
        { name: 'FAQ on Admissions', path: '/' },
        { name: 'How to Apply', path: '/' },
        { name: 'Apply Online', path: '/' },
        { name: 'Online Payment', path: '/' }
      ]
    },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Achievements', path: '/achievements' },
    {
      name: 'Key Information',
      path: '/key-information',
      subMenu: [
        { name: 'Notice', path: '/notice' },
        { name: 'Transport', path: '/transport' },
        { name: 'Cafeteria', path: '/cafeteria' },
        { name: 'Books', path: '/book' },
        { name: 'IELTS', path: '/ielts' },
        { name: 'Summer Camp', path: '/summer-camp' },
      ],
    },
    { name: 'Policies', path: 'policy' },
    { name: 'Facilities', path: '/' },
    { name: 'Request For A Tour', path: '/' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <header className="bg-white shadow-md">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://i.ibb.co/H2MH6dT/SCHOOL-OF-LIFE-1.png" alt="Logo" className="h-12" />
          <span className="ml-2 text-navy-600 text-sm font-semibold">School of Life</span>
        </div>
        <div className="flex items-center">
          <Link to="/erp-portal" className="bg-navy-600 text-white px-4 py-2 rounded mr-2 hover:bg-navy-700 transition duration-300">ERP PORTAL</Link>
          <Link to="/apply-now" className="bg-navy-600 text-white px-4 py-2 rounded mr-2 hover:bg-navy-700 transition duration-300">APPLY NOW</Link>
          <Link to="/visit-branch" className="bg-white text-navy-600 px-4 py-2 rounded border border-navy-600 hover:bg-navy-50 transition duration-300">VISIT BRANCH</Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-navy-600 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex">
              <button onClick={toggleDrawer} className="text-white p-4 focus:outline-none md:hidden">
                <FaBars />
              </button>
              <div className="hidden md:flex">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.subMenu ? (
                      <>
                        <button
                          onClick={() => toggleSubMenu(item.name)}
                          className="text-white px-3 py-4 hover:bg-navy-700 transition duration-300 flex items-center"
                        >
                          {item.name} <FaChevronDown className="ml-1" />
                        </button>
                        {openSubMenu === item.name && (
                          <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-lg z-50">
                            {item.subMenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-4 py-2 text-navy-600 hover:bg-navy-50 transition duration-300"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="text-white px-3 py-4 hover:bg-navy-700 transition duration-300 block"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Left side drawer */}
      <div className={`fixed z-50 inset-y-0 left-0 w-64 bg-white shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-navy-600">Menu</h2>
            <button onClick={toggleDrawer} className="text-navy-600 hover:text-navy-800 focus:outline-none">
              <FaTimes size={24} />
            </button>
          </div>
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.subMenu ? (
                <>
                  <button
                    onClick={() => toggleSubMenu(item.name)}
                    className="flex items-center justify-between w-full py-2 text-navy-600 hover:bg-navy-50 transition duration-300"
                  >
                    {item.name} <FaChevronDown />
                  </button>
                  {openSubMenu === item.name && (
                    <div className="pl-4">
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 text-navy-600 hover:bg-navy-50 transition duration-300"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block py-2 text-navy-600 hover:bg-navy-50 transition duration-300"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;