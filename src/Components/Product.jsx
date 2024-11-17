import React from 'react';
import './style.css';
import Products from "../Components/Product.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="container-fluid service overflow-hidden pt-5 mb-9 px-2 md:px-0">
            <div className=" py-5">
                <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h5 className="sub-title text-indigo-700 px-3">OUR PRODUCTS</h5>
                    </div>
                    <h1 className="display-5 text-indigo-700 mb-4">dolor sit amet consectetur </h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                </div>
                {/* Horizontal Scrolling Swiper with Autoplay */}

                <div className='w-full flex items-center justify-center mt-4 '>
                    <button className="hidden md:block mx-6 custom-swiper-button-prev bg-black opacity-80 text-gray-300 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-gray-950">
                        <FaChevronLeft size={24} />
                    </button>
                <Swiper
                        modules={[Navigation, Autoplay]}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{
                        prevEl: ".custom-swiper-button-prev",
                        nextEl: ".custom-swiper-button-next",
                    }}

                    // scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    speed={1000}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 10 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                >
                    {Products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="service-card" data-wow-delay="0.1s">
                                <div className="dddddd relative overflow-hidden">
                                    <div className="service-inner">
                                        <div className="service-img w-full h-[350px] overflow-hidden rounded-xl">
                                            <img src={product.image} className="w-full h-full rounded" alt="Product"/>
                                        </div>
                                        <div className="relative -mt-[30px] text-center duration-500">
                                            <div className="service-title-name">
                                                <div className="bg-indigo-800 text-center rounded p-4 mx-10 mb-4">
                                                    <a href="#" className="h-6 text-white mb-0">{product.title}</a>
                                                </div>
                                                <a className="inline-block bg-indigo-50 text-indigo-700 rounded-full py-3 px-5 mb-4" href="#">Explore More</a>
                                            </div>
                                            <div className="service-content absolute -bottom-full left-0 mx-5 text-center rounded-xl bg-indigo-100 opacity-0 pb-4" style={{transition:'0.5s'}}>
                                                <a href="#"><h4 className="text-indigo-700 mb-4 py-3">{product.title}</h4></a>
                                                <div className="px-4">
                                                    <p className="mb-4 text-indigo-700">{product.description}</p>
                                                    <a className="bg-indigo-700 hover:bg-transparent border-indigo-700 border-2 text-white hover:text-indigo-700 font-semibold rounded-full py-3 px-5" href="#">Explore More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                    <button className="hidden md:block mx-6 custom-swiper-button-next bg-black opacity-80 text-gray-300 p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-gray-950">
                        <FaChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
