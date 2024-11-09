import React, { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaChevronDown, FaBars, FaTimes, FaSearch, FaSearchPlus, FaLocationArrow, FaPhone, FaPhoneSquare, FaPhoneAlt, FaTelegram } from 'react-icons/fa';
import yatlogo from "/Images/yatlogo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { FaLocationDot, FaPhoneFlip } from 'react-icons/fa6';


const Header = ({ page }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showTopBar, setShowTopBar] = useState(true);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();



    const handleContactClick = () => {
        setShowDropdown(false);
        handleMenuClick();
        if (location.pathname === '/') {
            const contactSection = document.getElementById('contact_us');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            sessionStorage.setItem('scrollToContact', 'true');
        }
    };

    useEffect(() => {

        if (location.pathname === '/' && sessionStorage.getItem('scrollToContact')) {
            const contactSection = document.getElementById('contact_us');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
            sessionStorage.removeItem('scrollToContact');
        }
    }, [location]);


    const dropdownRef = useRef(null);

    const handleMenuLogin = () => {
        setShowMenu(false);
    };


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 50);
            setShowTopBar(offset === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setShowMenu(false);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={` ${showTopBar ? 'pb-24' : 'pb-20'}`}>
            {/* {showTopBar && <TopBar />} */}
            <header className={`fixed top-0 w-full z-50 transition-all mb-24 duration-300 ${isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-white'} `}>
                {showTopBar && (
                    <div className="bg-indigo-700 text-white flex justify-between items-center px-4 py-2 md:px-8  transition duration-300">

                        {/* <div className="flex items-center space-x-2 py-2">
                            <FaLocationDot className="text-white" />
                            <span>Yobek Building, Addis Ababa, Ethiopia</span>
                        </div> */}
                        <div className="flex items-center space-x-2 py-2 ">
                            <FaPhoneAlt className="text-white hover:text-gray-300" />
                            <a href="tel:+251911362741" className="text-white hover:text-gray-300 transform transition-all duration-300 ease-in-out">+251-911-362-741</a>
                        </div>
                        <div className="hidden md:flex items-center space-x-2 py-2">
                            <FiMail className="text-white" />
                            <a href="mailto:yatagro@gmail.com" className="text-white hover:text-gray-200  transform transition-all duration-300 ease-in-out"> yatagro@gmail.com</a>
                        </div>


                        <div className="flex space-x-3">
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaFacebook size={20} /></a>
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaTelegram size={20} /></a>
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaInstagram size={20} /></a>
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaLinkedin size={20} /></a>
                            <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaTwitter size={20} /></a>
                        </div>
                    </div>
                )}
                <nav className="container xl:mx-auto sm:mx-9 p-4 flex justify-between items-center">
                    <div className=" text-xl font-bold text-blue-900 w-60">
                        <Link to="#"><img src={yatlogo} alt="Yat" className='w-full h-full object-contain' /></Link>
                    </div>

                    <div className="hidden md:flex lg:space-x-12 space-x-4">
                        <div className="relative">
                            <Link
                               to="#"
                                onMouseEnter={() => setShowDropdown(false)}
                                onClick={() => setShowDropdown(false)}
                                className={`text-lg font-semibold  hover:text-indigo-800 cursor-pointer  ${page === 'Manufacturing' ? 'text-indigo-700 ' : 'text-gray-700 font-semibold'}`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}
                            >
                                Manufacturing
                            </Link>
                        </div>
                        <div className="relative">
                            <Link
                                onMouseEnter={() => setShowDropdown(false)}
                                onClick={() => setShowDropdown(false)}
                                to="/Exports"
                                className={` text-lg font-semibold text-gray-700 hover:text-indigo-800 cursor-pointer ${page === 'Export' ? 'text-indigo-700 ' : 'text-gray-700 font-semibold'}`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}
                            >
                                Export
                            </Link>
                        </div>
                        <div className="relative">
                            <Link
                                onMouseEnter={() => setShowDropdown(false)}
                                onClick={() => setShowDropdown(false)}
                                to="#"
                                className={`text-lg font-semibold text-gray-700 hover:text-indigo-800 cursor-pointer'}`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}
                            >
                                Import
                            </Link>
                        </div>

                        <div className="relative">
                            <a
                                href="#"
                                onMouseEnter={() => setShowDropdown(false)}
                                onClick={() => setShowDropdown(false)}
                                className={`text-lg font-semibold text-gray-600 hover:text-indigo-800 cursor-pointer`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}
                            >
                                About
                            </a>
                        </div>

                        <div className="relative" ref={dropdownRef}>
                            <button
                                onMouseEnter={() => setShowDropdown(!showDropdown)}
                                // onMouseLeave={() => setShowDropdown(!showDropdown)}
                                className={`text-lg font-semibold text-gray-600 hover:text-indigo-800 cursor-pointer`}
                                style={{ display: 'inline-block', transformOrigin: 'center' }}>
                                <div className="flex space-x-1 items-center">
                                    <span>More</span>
                                    <FaChevronDown />
                                </div>
                            </button>
                            {showDropdown && (
                                <div className={`absolute top-10 left-0 mt-3 w-48  shadow-lg border  rounded-b-md ${isScrolled ? 'bg-gray-100 shadow-lg' : 'bg-white'}`}>
                                    <ul className="py-1">

                                        <li className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isScrolled ? 'hover:bg-gray-200' : 'hover:bg-gray-100'}`}>
                                            <Link to="/"
                                                onClick={() => setShowDropdown(!showDropdown)}
                                                className="text-gray-700">
                                                Blogs
                                            </Link>
                                        </li>
                                        <li className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isScrolled ? 'hover:bg-gray-200' : 'hover:bg-gray-100'}`}>
                                            <a href="#" className="text-gray-700">Contact Us</a>
                                        </li>

                                        {/* <li className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${isScrolled ? 'hover:bg-gray-200' : 'hover:bg-gray-100'}`}>
                                            <button onClick={handleContactClick} className="text-gray-700">Contact us</button>
                                        </li> */}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className=" md:flex space-x-4">
                        <p><FaSearch className='text-lg' /></p>
                    </div>

                    <div className="md:hidden">
                        <button onClick={handleMenuClick} className="text-2xl text-blue-950 focus:outline-none">
                            {showMenu ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </nav>

                {showMenu && (
                    <div className="xl:hidden bg-gray-100 shadow-lg">
                        <div className="space-y-4 py-4 px-4">
                            <div className="relative">
                                <Link
                                    to="#"
                                    className="text-gray-700 hover:text-blue-900 hover:font-bold transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-105"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}
                                >
                                    Manufacturing
                                </Link>
                            </div>
                            <div className="relative">
                                <Link
                                    to="#"
                                    className="text-gray-700 hover:text-blue-950 transform hover:font-bold transition-transform duration-300"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}>
                                    Import
                                </Link>
                            </div>
                            <div className="relative">
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-950 hover:font-bold transform transition-transform duration-300"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}
                                >
                                    Import
                                </a>
                            </div>
                            <div className="relative">
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-950 hover:font-bold transform transition-transform duration-300"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}
                                >
                                    About
                                </a>
                            </div>
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="text-gray-700 hover:text-blue-950 hover:font-bold transform transition-transform duration-300"
                                    style={{ display: 'inline-block', transformOrigin: 'center' }}
                                >
                                    <div className="flex space-x-2 items-center">
                                        <span>More</span>
                                        <FaChevronDown />
                                    </div>
                                </button>
                                {showDropdown && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md">
                                        <ul className="py-1">
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <Link to='/'
                                                    onClick={() => setShowDropdown(!showDropdown)}
                                                    className="text-gray-700 hover:scale-125">
                                                    Blogs
                                                </Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <Link to='' className="text-gray-700 hover:scale-125">Contact Us</Link>
                                            </li>


                                            {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <button onClick={handleContactClick} className="text-gray-700">Contact us</button>
                                            </li> */}
                                        </ul>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                )}


            </header>
        </div>
    );
};

export default Header;