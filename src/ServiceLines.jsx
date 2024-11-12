import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

import med1 from './images/med1.png';
import med2 from './images/med2.png';
import med3 from './images/med3.jpg';
import tra1 from './images/tra1.jpg';
import tra2 from './images/tra4.jpeg';
import tra3 from './images/tra5.jpeg';
import trac1 from './images/trac1.jpg';
import trac2 from './images/trac2.jpeg';
import trac3 from './images/trac3.jpeg';

const ServiceLines = () => {
    const [selectedService, setSelectedService] = useState('Import');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const importImages = [med1, med2, med3];
    const exportImages = [tra1, tra2, tra3];
    const manufacturingImages = [trac1, trac2, trac3];

    useEffect(() => {
        let currentImages = [];
        switch (selectedService) {
            case 'Import':
                currentImages = importImages;
                break;
            case 'Export':
                currentImages = exportImages;
                break;
            case 'Manufacturing':
                currentImages = manufacturingImages;
                break;
            default:
                currentImages = [];
        }
        const imageChangeInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
        }, 3000);

        return () => clearInterval(imageChangeInterval);
    }, [selectedService]);

    const handleChange = (service) => {
        setSelectedService(service);
        setCurrentImageIndex(0); // Reset image index on service change
    };

    const getServiceDescription = (service) => {
        switch (service) {
            case 'Import':
                return (<div><h className="text-xl">Bicycles</h><p>Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quae amet consectetur adipisicing elit Quisquam ipsum dolor sit amet consectetur consectetur adipisicing elit Quisquam sit amet consectetur adipisicing.</p></div>);
            case 'Export':
                return (<div><h className="text-xl">Bicycles</h><p>Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quae amet consectetur adipisicing elit Quisquam ipsum dolor sit amet consectetur consectetur adipisicing elit Quisquam sit amet consectetur adipisicing.</p></div>);
            case 'Manufacturing':
                return (<div><h className="text-xl">Bicycles</h><p>Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quae amet consectetur adipisicing elit Quisquam ipsum dolor sit amet consectetur consectetur adipisicing elit Quisquam sit amet consectetur adipisicing.</p></div>);
            default:
                return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quae amet consectetur adipisicing elit Quisquam ipsum dolor sit amet consectetu consectetur adipisicing elit Quisquam sit amet consectetur adipisicing.</p>;
        }
    };

    const renderContent = (alignment) => {
        let currentImages = [];
        switch (selectedService) {
            case 'Import':
                currentImages = importImages;
                break;
            case 'Export':
                currentImages = exportImages;
                break;
            case 'Manufacturing':
                currentImages = manufacturingImages;
                break;
            default:
                currentImages = [];
        }

        return (
            <div className="flex justify-start items-start w-full box-border m-0 p-2.5">
                {alignment === 'left' && (
                    <div className="flex-1 w-[30%] mt-5 mx-5 mx-0 p-0">
                        <img src={currentImages[currentImageIndex]} className="w-full max-w-[500px] h-[400px] mx-0 rounded-[5px]" alt={`${selectedService} service`} />
                    </div>
                )}
                <div className="flex-1 w-[70%] h-auto mt-5 mx-0 p-0">
                    <p>{getServiceDescription(selectedService)}</p>
                    <button onClick={() => window.location.href = '/view-more'} className="block bg-[#007bff] text-[white] cursor-pointer mt-5 px-5 py-2.5 rounded-[5px] border-[none] hover:bg-[#0056b3]">View More</button>
                </div>
                {alignment === 'right' && (
                    <div className="flex-1 w-[30%] mt-5 mx-5 mx-0 p-0">
                        <img src={currentImages[currentImageIndex]} className="w-full max-w-[500px] h-[400px] mx-0 rounded-[5px]" alt={`${selectedService} service`} />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex flex-col p-[5px]">
           <h> <Header /> </h>
            <div className="flex justify-between bg-[#f0f4f8] shadow-[0_4px_8px_rgba(0,0,0,0.1)] mb-5 p-5 rounded-[10px]">
                <div className="text-[40px] font-[bold] text-[#007bff] uppercase tracking-[1px] m-0">Service Lines</div>
                <div className="flex">
                    <a href="#" className={`px-4 py-2 text-[25px] text-[#007bff] font-[bold] hover:text-[#0056b3] transition duration-300 ${selectedService === 'Import' }`} onClick={() => handleChange('Import')}>Import</a>
                    <a href="#" className={`px-4 py-2 text-[25px] text-[#007bff] font-[bold] hover:text-[#0056b3] transition duration-300 ${selectedService === 'Export' }`} onClick={() => handleChange('Export')}>Export</a>
                    <a href="#" className={`px-4 py-2 text-[25px] text-[#007bff] font-[bold] hover:text-[#0056b3] transition duration-300 ${selectedService === 'Manufacturing'}`} onClick={() => handleChange('Manufacturing')}>Manufacturing</a>
                </div>
            </div>
            <button className="text-lg px-8 py-3 bg-[#61dafb] bg-gradient-to-b from-[#61dafb] to-[#21a1f1] text-white shadow-md rounded-lg hover:bg-[#17a589] hover:translate-x-[-3px] transition duration-300 self-end align-content:end" onClick={() => window.location.href = '/contact-us'} > Contact Us </button>
            {renderContent('left')}
            {renderContent('right')}
            {renderContent('left')}
            <Footer />
        </div>
    );
};

export default ServiceLines;
