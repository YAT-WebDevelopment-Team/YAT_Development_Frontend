import React from 'react';
import Hero from '../Components/Hero'
import { Helmet } from 'react-helmet'
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
import Product from '../Components/Product';


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>yat-manufacturing</title>
            </Helmet>
            <Hero/>
            <Product/>
        </div>
    )
}

export default Home;
