import React, { useState, useEffect } from 'react';
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ExportItemsData from "../Components/ExportItems.json";
import { FiMail } from "react-icons/fi";
import { FaPhoneVolume } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import TesSlider from '../Components/TesSlider.json';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
import { Autoplay, FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaTractor, FaCog, FaBoxOpen, FaCheckCircle, FaTruck, FaSmile } from 'react-icons/fa';


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>yat-manufacturing</title>
            </Helmet>
            <Hero/>
        </div>
    )
}

export default Home;
