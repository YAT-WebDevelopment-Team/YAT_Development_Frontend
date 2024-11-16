import React, { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ImportItemsData from "./ImportItems.json";
import { FiMail } from "react-icons/fi";
import { FaPhoneVolume } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import TesSlider from './TesSlider.json';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
import { Autoplay, FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaTractor, FaCog, FaBoxOpen, FaCheckCircle, FaTruck, FaSmile } from 'react-icons/fa';

const Imports = () => {
    const page = "Import"
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="bg-gray-50 min-h-screen overflow-x-hidden">
            <Helmet>
                <title>Import</title>
            </Helmet>

            <Header page={page} />

            <div className="h-[450px] fixed top-0 w-full z-0 bg-cover mt-10" style={{ backgroundImage: "url('/Images/Hero_Imports4.png')" }}>
                <div className="bg-gradient-to-r absolute inset-0 from-gray-950 via-gray-900 to-gray-600 opacity-80"></div>
                <div className="relative flex justify-center items-center h-full px-8">
                    <h1 className="text-4xl text-white font-bold">IMPORT</h1>
                    <div className="absolute right-4 bottom-[-2rem] bg-white shadow-sm rounded-lg px-9 py-5 flex space-x-2 items-center">
                        <Link to="/" className="font-semibold text-lg text-gray-700 hover:text-indigo-800 hover:underline decoration-indigo-800">Home</Link>
                        <span className="text-gray-600">/</span>
                        <span className="font-semibold text-lg text-indigo-700">Import</span>
                    </div>
                </div>
            </div>

            <section className="w-full relative z-10 bg-gray-50 flex flex-col lg:flex-row items-center md:items-start gap-8  p-8 lg:px-28 sm:px-11 px-5  mt-[450px] space-x-4 justify-center">
                <div className="lg:w-1/2 w-full flex flex-col items-center text-center bg-gray-200 shadow-lg rounded-md p-10 space-y-8 transform transition-transform duration-200 delay-100 ">
                    <p className="text-3xl font-bold text-gray-700 font-sans">Please don't hesitate to reach out </p>
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-indigo-700 opacity-20 animate-ping"></div>
                        <div className="absolute inset-0 rounded-full bg-indigo-700 opacity-30 animate-ping delay-100"></div>
                        <div className="p-4 rounded-full bg-indigo-900 text-white relative z-10">
                            <FaPhone className="text-2xl" />
                        </div>
                    </div>


                    <div className="flex flex-col space-y-2">
                        <p className="text-lg font-semibold text-gray-700">Call Anytime</p>
                        <a href='tel:+251911362741' className="text-xl font-bold text-gray-800">+251 911 362 741</a>
                        <button className="mt- border font-semibold border-indigo-700 bg-indigo-700 text-white  rounded-2xl px-3 py-2  hover:bg-gray-200 hover:text-gray-800 hover:border-gray-800  transition duration-300">
                            Contact us
                        </button>
                    </div>
                </div>

                <div className="relative lg:w-8/12 w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <Swiper

                        spaceBetween={0}
                        centeredSlides={true}
                        loop={true}
                        modules={[FreeMode, Autoplay, Navigation]}
                        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        className="h-[540px] w-full relative rounded-md"


                        navigation={{
                            prevEl: ".custom-swiper-button-prev",
                            nextEl: ".custom-swiper-button-next",
                        }}
                        speed={1000}
                        breakpoints={{
                            340: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            700: {
                                slidesPerView: 1,
                                spaceBetween: 80,
                            },
                        }}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}>

                        {ImportItemsData.map((slider) => (
                            <SwiperSlide key={slider.id} className="relative group h-full overflow-hidden">

                                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                    <img src={slider.img} alt={slider.title} className="object-cover w-full h-full max-w-full max-h-full" />
                                </div>

                                <div className="absolute  inset-0 bg-gray-950 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col items-center justify-center space-y-2">
                                    <p className="text-white text-3xl font-bold opacity-0 group-hover:opacity-100  transition-opacity duration-300">
                                        {slider.title}
                                    </p>

                                    <p className="text-white text-lg font-medium  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {slider.type}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className={`custom-swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 ${isHovered ? "opacity-100 z-40 " : "opacity-0"} duration-300`}>
                            <button className="bg-black opacity-80 text-gray-300 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-gray-950">
                                <FaChevronLeft size={24} />
                            </button>
                        </div>
                        <div className={`custom-swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 ${isHovered ? "opacity-100 z-40 " : "opacity-0"} duration-300`}>
                            <button className="bg-black opacity-80 text-gray-300 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-gray-950">
                                <FaChevronRight size={24} />
                            </button>
                        </div>

                    </Swiper>
                </div>
            </section>
            <section className="relative z-10 bg-gray-50 py-8 md:py-20">
                {/* <h2 className="text-3xl font-bold mb-6 text-indigo-700 px-3 text-center pb-12 md:pl-44">Our Export Items</h2> */}
                <div className="container  grid grid-cols-1 sm:grid-cols-2  items-center gap-8 px-10 md:px-0  md:mx-10 lg:mx-20">
                    {ImportItemsData.map((category) => (
                        <div key={category.id} className="rounded-lg p-6 flex space-x-5">

                            <div className="flex flex-col space-y-7 items-center w-full">

                                <div className="w-full h-52 mb-4">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="object-contain w-full h-full" />
                                </div>

                                <h2 className="text-2xl font-bold text-indigo-800 mb-2 text-center">
                                    {category.title}
                                </h2>


                                <button className="w-32 px-4 py-2 rounded-full bg-white bg-opacity-10 backdrop-blur-md border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white hover:border-white  shadow-md   hover:text-gray transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300">
                                    View More
                                </button>




                            </div>

                            <ul className="text-left text-gray-700 space-y-3 font-semibold w-full">
                                {category.items.map((item, index) => (
                                    <li key={index}>{item}
                                        {index < category.items.length - 1 && (
                                            <hr className="w-28 border-t border-dashed border-gray-300 mt-2" />
                                        )}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Imports
