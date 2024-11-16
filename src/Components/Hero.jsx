import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const data = [
    {
        id: 1,
        image: "/Images/coffee_bean1.png",
        img: "/Images/coffeeslider1.jpg",
        title: "COFFEE",
        items: ["Yirgacheffe", "Sidama", "Kochere"],
    },
    {
        id: 2,
        image: "/Images/teaimg.png",
        img: "/Images/teaca4.jpg",
        title: "TEA",
        items: ["Black teas", "Green teas", "Herbal teas"],
    },
    {
        id: 3,
        image: "/Images/red-beans.png",
        img: "/Images/pulses.png",
        title: "PULSES & CEREALS",
        items: ["Chick Pea", "Soya Beans", "Lentils"],
    },
    {
        id: 4,
        image: "/Images/oilseeds.png",
        img: "/Images/oilseedca2.jpg",
        title: "OIL SEEDS",
        items: ["Sesame Seeds", "Castor Seeds", "Niger Nugs", "Nuts"],
    },
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    // Navigate to the next slide
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    // Navigate to the previous slide
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden text-white">
            {/* Sliding Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{
                    backgroundImage: `url(${data[currentIndex].img})`,
                }}
            ></div>

            {/* Color Overlay with Blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-md"></div>

            {/* Content */}
            <div className="relative text-center px-6 z-10">
                {/* Welcome Section */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fadeIn">
                        Welcome to <span className="text-indigo-700">Your Dream App</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn delay-300">
                        Discover limitless possibilities with our modern, beautifully crafted, and highly interactive solutions.
                    </p>
                    <div className="mt-6 animate-fadeIn delay-500">
                        <button className="bg-indigo-700 hover:bg-transparent border-indigo-700 border-2 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                            Get Started
                        </button>
                        <button className="ml-4 bg-transparent border-2 border-indigo-700 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Sliding Data Section */}
                <div
                    key={currentIndex} // Forces re-render for animation
                    className="animate-slideUp"
                >
                    <img
                        src={data[currentIndex].image}
                        alt={data[currentIndex].title}
                        className="w-24 h-24 mx-auto mb-4"
                    />
                    <h2 className="text-4xl font-semibold">{data[currentIndex].title}</h2>
                    <ul className="mt-2 text-lg">
                        {data[currentIndex].items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Manual Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-3 rounded-full shadow-lg z-20 transition duration-300"
            >
                <FaChevronLeft size={24} />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-3 rounded-full shadow-lg z-20 transition duration-300"
            >
                <FaChevronRight size={24} />
            </button>
        </div>
    );
};

export default Hero;



<div className="mt-6 animate-fadeIn delay-500">
    <button className="bg-indigo-700 hover:bg-transparent border-indigo-700 border-2 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
        Get Started
    </button>
    <button className="ml-4 bg-transparent border-2 border-indigo-700 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
        Learn More
    </button>
</div>
