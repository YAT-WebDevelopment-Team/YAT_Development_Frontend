import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import yatlogo from "/Images/yatlogo.png"
const Header = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown, setDropdown] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setDropdown((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setDropdown((prev) => ({ ...prev, [menu]: false }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false);
        setIsScrolled(true);
      } else {
        setShowTopBar(true);
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 pb-11">
      {/* Top Green Bar */}
      {showTopBar && (
        <div className="bg-indigo-800 text-white flex justify-between items-center px-4 py-2 md:px-8">
          <span>Pecan Building, Addis Ababa, Ethiopia</span>
          <span>info@dejenexport.com</span>
          <div className="flex space-x-2">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
            <FaTwitter />
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="xl:text-2xl text-xl font-bold text-blue-900 pr-1">
            <Link to="/">Dejen Export</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex lg:space-x-12 space-x-4">
            {/* Links with dropdowns */}
            {["Home", "Export", "Import", "Manufacturing", "About", "More"].map((link, index) => (
              <div key={index} className="relative" onMouseEnter={() => handleMouseEnter(link)} onMouseLeave={() => handleMouseLeave(link)}>
                <button className="hover:text-blue-900 text-gray-600 font-semibold">
                  {link} {["Export", "Import", "Manufacturing", "About", "More"].includes(link) && <FaChevronDown />}
                </button>
                {dropdown[link] && (
                  <div className="absolute top-10 mt-2 w-48 bg-indigo-800 text-white shadow-lg rounded-md">
                    {/* Specific links for each dropdown */}
                    {link === "About" && (
                      <>
                        <Link to="/about/company-profile" className="block px-4 py-2 hover:bg-indigo-900">Company Profile</Link>
                        <Link to="/about/why-choose-us" className="block px-4 py-2 hover:bg-indigo-900">Why Choose Us</Link>
                        <Link to="/about/awards" className="block px-4 py-2 hover:bg-indigo-900">Awards</Link>
                        <Link to="/about/our-team" className="block px-4 py-2 hover:bg-indigo-900">Our Team</Link>
                        <Link to="/about/gallery" className="block px-4 py-2 hover:bg-indigo-900">Gallery</Link>
                      </>
                    )}
                    {link === "More" && (
                      <>
                        <Link to="/blog" className="block px-4 py-2 hover:bg-indigo-900">Blog</Link>
                        <Link to="/contact" className="block px-4 py-2 hover:bg-indigo-900">Contact Us</Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600 text-2xl">
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="bg-white shadow-md py-4 px-4 md:hidden">
            <div className="space-y-4">
              <Link to="/home" className="block text-gray-600 font-semibold hover:text-blue-900">Home</Link>

              {/* Export dropdown */}
              <div>
                <button onClick={() => setDropdown((prev) => ({ ...prev, export: !prev.export }))} className="text-gray-600 font-semibold hover:text-blue-900 flex items-center">
                  Export <FaChevronDown className="ml-1" />
                </button>
                {dropdown.export && (
                  <div className="pl-4 pt-2">
                    <Link to="/export/item1" className="block text-gray-600 hover:text-indigo-800">Item 1</Link>
                    <Link to="/export/item2" className="block text-gray-600 hover:text-indigo-800">Item 2</Link>
                  </div>
                )}
              </div>

              {/* Import dropdown */}
              <div>
                <button onClick={() => setDropdown((prev) => ({ ...prev, import: !prev.import }))} className="text-gray-600 font-semibold hover:text-blue-900 flex items-center">
                  Import <FaChevronDown className="ml-1" />
                </button>
                {dropdown.import && (
                  <div className="pl-4 pt-2">
                    <Link to="/import/item1" className="block text-gray-600 hover:text-indigo-800">Item 1</Link>
                    <Link to="/import/item2" className="block text-gray-600 hover:text-indigo-800">Item 2</Link>
                  </div>
                )}
              </div>

              {/* Manufacturing dropdown */}
              <div>
                <button onClick={() => setDropdown((prev) => ({ ...prev, manufacturing: !prev.manufacturing }))} className="text-gray-600 font-semibold hover:text-blue-900 flex items-center">
                  Manufacturing <FaChevronDown className="ml-1" />
                </button>
                {dropdown.manufacturing && (
                  <div className="pl-4 pt-2">
                    <Link to="/manufacturing/item1" className="block text-gray-600 hover:text-indigo-800">Item 1</Link>
                    <Link to="/manufacturing/item2" className="block text-gray-600 hover:text-indigo-800">Item 2</Link>
                  </div>
                )}
              </div>

              {/* About dropdown */}
              <div>
                <button onClick={() => setDropdown((prev) => ({ ...prev, about: !prev.about }))} className="text-gray-600 font-semibold hover:text-blue-900 flex items-center">
                  About <FaChevronDown className="ml-1" />
                </button>
                {dropdown.about && (
                  <div className="pl-4 pt-2">
                    <Link to="/about/company-profile" className="block text-gray-600 hover:text-indigo-800">Company Profile</Link>
                    <Link to="/about/why-choose-us" className="block text-gray-600 hover:text-indigo-800">Why Choose Us</Link>
                    <Link to="/about/awards" className="block text-gray-600 hover:text-indigo-800">Awards</Link>
                    <Link to="/about/our-team" className="block text-gray-600 hover:text-indigo-800">Our Team</Link>
                    <Link to="/about/gallery" className="block text-gray-600 hover:text-indigo-800">Gallery</Link>
                  </div>
                )}
              </div>

              {/* More dropdown */}
              <div>
                <button onClick={() => setDropdown((prev) => ({ ...prev, more: !prev.more }))} className="text-gray-600 font-semibold hover:text-blue-900 flex items-center">
                  More <FaChevronDown className="ml-1" />
                </button>
                {dropdown.more && (
                  <div className="pl-4 pt-2">
                    <Link to="/blog" className="block text-gray-600 hover:text-indigo-800">Blog</Link>
                    <Link to="/contact" className="block text-gray-600 hover:text-indigo-800">Contact Us</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
                           {/* <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{ delay: 5000, }}
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                        modules={[Autoplay, Navigation]}
                        className="h-[500px] w-full relative rounded-md"

                    >
                        {ExportItemsData.map((slider) => (
                            <SwiperSlide key={slider.id} className="relative group h-full overflow-hidden">

                                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                    <img src={slider.img} alt={slider.title} className="object-cover w-full h-full max-w-full max-h-full" />
                                </div>


                                <div className="absolute inset-0 bg-indigo-800 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                    <p className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {slider.title}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}


                        <div className="swiper-button-next text-white hover:text-indigo-900 p-2 rounded-full transition-all duration-200">

                        </div>
                        <div className="swiper-button-prev text-white hover:text-indigo-900 p-2 rounded-full transition-all duration-200">

                        </div>
                    </Swiper>  */}
    </header>
    
  );
};

export default Header;
