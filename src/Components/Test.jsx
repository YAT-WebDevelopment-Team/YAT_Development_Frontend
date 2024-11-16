import React, { useState } from 'react';

const Product = ({ productNumber, description, imageUrl }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-72 h-48 overflow-hidden border border-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={imageUrl}
                alt={`Product ${productNumber}`}
                className="w-full h-full object-cover"
            />
            <div className={`absolute bottom-0 w-full p-4 transition duration-300 ease-in-out ${isHovered ? 'bg-black bg-opacity-80 text-white' : 'bg-black bg-opacity-50 text-white'}`}>
                <h2 className="text-xl">Product {productNumber}</h2>
                {isHovered && <p>{description}</p>}
                {isHovered && <button className="mt-2 bg-purple-700 hover:bg-purple-900 text-white py-2 px-4 rounded">Explore More</button>}
            </div>
        </div>
    );
};

export default Product;
