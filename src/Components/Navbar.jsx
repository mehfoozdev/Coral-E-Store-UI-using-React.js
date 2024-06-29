import React, { useState } from 'react'
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../public/logo.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {title: 'Jewelery & Accessories', path: "/"},
        {title: 'Clothing & Shoes', path: "/"},
        {title: 'Home & Living', path: "/"},
        {title: 'Wedding & Party', path: "/"},
        {title: 'Arts & Collectibles', path: "/"},
        {title: 'Toys & Entertainment', path: "/"},
        {title: 'Craft Supplies & Tools', path: "/"},
    ];
    console.log(navItems)


    return (
        <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
            {/* Top Nav */}
            <nav className="flex justify-between container md:py-4 pt-6 pb-3">
                <FaSearch className='text-gray-800 hover:text-black cursor-pointer w-5 h-5 hidden md:block' />

                {/* Logo */}
                <a href=""><img src={logo} alt="" /></a>

                {/* Account and shopping button */}
                <div className='text-lg  sm:flex items-center gap-4 hidden'>
                    <a href="" className='flex items-center gap-2 text-gray-800 hover:text-black'><FaUser />Account</a>
                    <a href="" className='flex items-center gap-2 text-gray-800 hover:text-black'><FaShoppingCart />Shopping</a>
                </div>

                {/* Navbar for mobile devices */}
                <div className="sm:hidden" >
                    <button onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaTimes className='w-5 h-5 text-gray-800'/> : <FaBars className='w-5 h-5 text-gray-800'/>
                        }
                    </button>
                </div>

            </nav>

            <br />

            {/* Bottom */}
            <div className='pt-4'>
                <ul className='lg:flex items-center justify-between hidden'>
                    {navItems.map(({ title, path }) => (
                        <li key={title} className='text-gray-800 hover:text-orange-600'>
                        <Link to={path}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Only mobile menu items */}
            <div className=''>
                <ul className={`bg-gray-800 text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden" }`}>
                    {navItems.map(({ title, path }) => (
                        <li key={title} className='hover:text-orange-600 my-3 cursor-pointer'>
                        <Link to={path}>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>           
    

        </header>
    )
}

export default Navbar