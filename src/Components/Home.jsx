import React, { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import ExportItemsData from "./ExportItems.json";
import HeroData from "./Hero.json";
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
import "./Hero.css"
import 'swiper/css/scrollbar';
import { Autoplay, FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaTractor, FaCog, FaBoxOpen, FaCheckCircle, FaTruck, FaSmile } from 'react-icons/fa';

const Home = () => {

  const page = "Home"
  const [isHovered, setIsHovered] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

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


  return (
    <div className="bg-gray-100 min-h-screen">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Header page={page} />



      {/* Hero Section */}
      <section className={`mx-2 relative w-full `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Swiper
          spaceBetween={5}
          centeredSlides={true}
          loop={true}
          modules={[FreeMode, Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          className="h-[600px] w-full relative"
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          speed={1000}

          freeMode={true}
          pagination={{ clickable: true }}
        >
          {HeroData.map((slider, index) => (
            <SwiperSlide key={slider.id} className={`relative group h-full overflow-hidden custom-slide-effect-${index}`}>
              <div className="w-full h-full flex items-center justify-center bg-gray-100 transition-all duration-500">
                <img
                  src={slider.img}
                  alt={slider.title}
                  className="object-cover w-full h-full max-w-full max-h-full transition-transform duration-1000 delay-75 transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">

                <p
                  className={`text-white text-3xl font-bold transition-all duration-700 transform ${isHovered
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-10 opacity-0"
                    }`}
                >
                  {slider.title}
                </p>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

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
      </section>

      {/* Sectors we are Engaged */}
      <section>

      </section>


      <Footer />
    </div>
  )
}

export default Home
