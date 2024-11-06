import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaPhoneAlt, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaLocationDot, FaPhone, FaPhoneFlip } from 'react-icons/fa6';
import yatlogo from "/Images/yatlogo.png"
import yatlogo2 from "/Images/yatlogo2.png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <section className="mx-5 md:mx-10">
                <div className="bg-gradient-to-br from-indigo-800  to-indigo-500 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-full mx-auto mt-10">
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="text-gray-200 text-lg">Start working with us</span>
                            <br />
                            <span className="text-gray-200 text-4xl font-semibold">YAT Trading PLC</span>
                        </div>
                        <button className="mt-2 border font-semibold border-white w-fit text-white px-4 py-2 rounded-xl hover:bg-indigo-800 hover:text-white hover:border-indigo-800 transition duration-300">
                            Contact Us
                        </button>
                    </div>
                    <div>
                        <img src={yatlogo2} className='w-20 h-20' alt="" />
                    </div>
                </div>
            </section>
            {/* Main Footer */}
            <div className="bg-gray-200 shadow-2xl text-indigo-800 py-12 mt-10 p-3">
                <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">

                    <div>
                        <div className=" text-xl font-bold text-blue-800 w-60">
                            <Link to="/"><img src={yatlogo} alt="Yat" className='w-full h-full object-contain' /></Link>
                        </div>
                        <div className="flex items-center space-x-2 py-2">
                            <FaLocationDot className="text-gray-500" />
                            <span className='text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out'>Yobek Building, Addis Ababa, Ethiopia</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-indigo-700 mb-5">Information</h4>
                        <ul>
                            <li className="pb-2">
                                <Link to='#' className="text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out">Manufacturing</Link>
                            </li>
                            <li className="pb-2">
                                <Link to='#' className="text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out">Import</Link>
                            </li>
                            <li className="pb-2">
                                <a href="#" className="text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out">Export</a>
                            </li>
                            <li className="pb-2">
                                <a href="#" className="text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out">Blog</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-indigo-700 mb-5">Helpful Links</h4>
                        <ul>
                            <li className="pb-2">
                                <a href="#" className="text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out"> About Us</a>
                            </li>
                            <li className="pb-2">
                                <a href="#" className="text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out">FAQ</a>
                            </li>
                            <li className="pb-2">
                                <a href="#" className="text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out"> Help & Support</a>
                            </li>
                            <li className="pb-2">
                                <a href="#" className="text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out"> Terms & Conditions </a>
                            </li>
                            <li className="pb-2">
                                <a href="#" className="text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out"> Privacy Policy </a>
                            </li>
                            <li className="pb-2">
                                <a href="#" className="text-gray-500 hover:text-indigo-800  transform transition-all duration-300 ease-in-out"> Contact Us </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-indigo-700 mb-5">Contact Us</h4>

                        <div className="flex items-center space-x-2 py-2 text-gray-500">
                            <FaPhone className="text-indigo-800" />
                            <a href="tel:+251911362741" className="text-gray-500 hover:text-indigo-800 transform transition-all duration-300 ease-in-out">+251 911 362 741</a>
                        </div>

                        <div className="flex items-center space-x-2 py-2 text-gray-500">
                            <FiMail className="text-indigo-800" />
                            <a href="mailto:yatagro@gmail.com" className="text-gray-500 hover:text-indigo-800 transform transition-all duration-300 ease-in-out">yatagro@gmail.com</a>
                        </div>

                        <div className="mt-4 flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button className="p-2 bg-indigo-700 text-white rounded-r-md hover:bg-indigo-700 transition-all duration-300 ease-in-out">
                                Subscribe
                            </button>
                        </div>
                    </div>


                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-indigo-800 text-white py-6">
                <div className="container mx-4 sm:flex justify-between items-center ">
                    <p>&copy; 2024 YAT Int Trading PLC. All rights reserved.</p>
                    <div className="flex space-x-3">
                           <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaFacebook size={20} /></a>
                           <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaTelegram size={20} /></a>
                           <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaInstagram size={20} /></a>
                           <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaLinkedin  size={20} /></a>
                           <a href="#" className="text-white hover:text-gray-300 transition duration-300"><FaTwitter  size={20} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
