import React from 'react'
import { Link } from 'react-router-dom'
import blogimage2 from "/Images/blogimage2.jpg"
import blogimage1 from "/Images/blogimage1.jpg"
import blogimage3 from "/Images/blogimage3.jpg"
import blogimage4 from "/Images/bghero2.png"
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { FaCalendar } from 'react-icons/fa6'

const Blog = () => {
    const page = "Blogs"
    return (

        <div className={`bg-gray-100 min-h-screen `}>
            <Helmet>
                <title>Blog</title>
            </Helmet>

            <Header page={page}/>

            <div className="relative h-80 bg-cover " style={{ backgroundImage: "url('/Images/bghero3.jpg')" }}>
                <div className="bg-gradient-to-r absolute inset-0  from-indigo-900 via-indigo-800 to-indigo-300  opacity-65"></div>

                <div className="relative flex justify-center items-center h-full px-8">
                    <h1 className="text-4xl text-white font-bold">Blogs</h1>

                    <div className="absolute right-4 bottom-[-2rem] bg-white shadow-sm rounded-lg px-9 py-5 flex space-x-2 items-center">
                        <Link to="/" className="font-semibold text-lg text-gray-700 hover:text-indigo-800 hover:underline decoration-indigo-800">Home</Link>
                        <span className="text-gray-600">/</span>
                        <span className="font-semibold text-lg text-indigo-700">Blog</span>
                    </div>
                </div>

            </div>

            <div className="container mx-auto md:px-1 px-3 py-20 flex lg:flex-row flex-col-reverse lg:space-x-14 ">
                <div></div>
                <div className="lg:w-1/3 space-y-8">

                    <div className="bg-white border border-gray-300 rounded-sm p-6">
                        <h3 className="text-xl font-semibold text-gray-800 font-sans mb-8 text-left">Categories</h3>
                        <ul className="space-y-2 text-left">
                            <li className="text-lg text-gray-600 hover:text-indigo-800 font-normal cursor-pointer">Manufacturing</li>
                            <li className="text-lg font-normal text-gray-600 hover:text-indigo-800 cursor-pointer">Import</li>
                            <li className="text-lg font-normal text-gray-600 hover:text-indigo-800 cursor-pointer">Export</li>
                            <li className="text-lg font-normal text-gray-600 hover:text-indigo-800 cursor-pointer">Events</li>

                        </ul>
                    </div>

                    {/* Recent Posts Section */}
                    <div className="bg-white border border-gray-300 rounded-sm p-6">
                        <h3 className="text-xl font-semibold text-gray-800 font-sans mb-8 text-left">Recent Posts</h3>
                        <ul className="space-y-8">
                            <li className="flex items-center space-x-4">
                                <img src={blogimage1} alt="Recent Post" className=" w-20 h-20 object-cover rounded-md" />
                                <div>
                                    <h4 className="font-medium text-lg text-gray-800 text-left">Post Title</h4>
                                    <p className="text-gray-500 text-sm text-left">November 6, 2024 • 5 Comments</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-4">
                                <img src={blogimage2} alt="Recent Post" className="w-20 h-20 object-cover rounded-md" />
                                <div>
                                    <h4 className="font-medium text-lg text-left text-gray-800">Post Title</h4>
                                    <p className="text-gray-500 text-sm">November 6, 2024 • 5 Comments</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-4 ">
                                <img src={blogimage3} alt="Recent Post" className="w-20 h-20 object-cover rounded-md" />
                                <div>
                                    <h4 className="font-medium text-lg text-left text-gray-800">Post Title</h4>
                                    <p className="text-gray-500 text-sm">November 6, 2024 • 5 Comments</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-4 ">
                                <img src={blogimage4} alt="Recent Post" className="w-20 h-20 object-cover rounded-md" />
                                <div>
                                    <h4 className="font-medium text-lg text-left text-gray-800">Post Title</h4>
                                    <p className="text-gray-500 text-sm">November 6, 2024 • 5 Comments</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Tags Section */}
                    <div className="bg-white border border-gray-300 rounded-sm p-6">
                        <h3 className="text-xl font-semibold text-gray-800 font-sans mb-8 text-left">Tags</h3>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-gray-200 text-gray-700 px-3 py-1  hover:bg-indigo-800 hover:text-white transition duration-300 text-sm cursor-pointer">Manufacturing</span>
                            <span className="bg-gray-200 text-gray-700 px-3 py-1  hover:bg-indigo-800 hover:text-white transition duration-300 text-sm cursor-pointer">Import</span>
                            <span className="bg-gray-200 text-gray-700 px-3 py-1  hover:bg-indigo-800 hover:text-white transition duration-300 text-sm cursor-pointer">Export</span>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Area */}
                <div className="lg:w-1/2 space-y-8 mt-8 lg:mt-0">


                    <div className="bg-white shadow-sm  overflow-hidden">
                        <div className="aspect-w-16 aspect-h-12">
                            <img
                                src={blogimage2}
                                alt="Blog Post"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 text-sm mb-4 text-left">November 6, 2024 • 0 Comments</p>
                            <h2 className="text-2xl text-gray-800 font-bold mb-2 text-left">Blog Title Goes Here</h2>

                            <p className="text-gray-700 mb-4 text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quae
                                amet consectetur adipisicing elit Quisquam ipsum dolor sit amet consectetur
                                consectetur adipisicing elit Quisquam sit amet consectetur adipisicing.
                            </p>
                            <button className=" mt-2 border font-semibold border-gray-500 text-gray-900 px-4 py-2  hover:bg-indigo-700 hover:text-white hover:border-indigo-700 transition duration-300">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="bg-white shadow-sm overflow-hidden">
                        <div className="aspect-w-16 aspect-h-12">
                            <img
                                src={blogimage1}
                                alt="Blog Post"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 text-sm mb-4 text-left">November 6, 2024 • 0 Comments</p>
                            <h2 className="text-2xl text-gray-800 font-bold mb-2 text-left">Blog Title Goes Here</h2>

                            <p className="text-gray-700 mb-4 text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quae
                                amet consectetur adipisicing elit Quisquam ipsum dolor sit amet consectetur
                                consectetur adipisicing elit Quisquam sit amet consectetur adipisicing.
                            </p>
                            <button className=" mt-2 border font-semibold border-gray-500 text-gray-900 px-4 py-2  hover:bg-indigo-700 hover:text-white hover:border-indigo-700 transition duration-300">
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className="bg-white shadow-sm  overflow-hidden">
                        <div className="aspect-w-16 aspect-h-12">
                            <img
                                src={blogimage3}
                                alt="Blog Post"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 text-sm mb-4 text-left">November 6, 2024 • 0 Comments</p>
                            <h2 className="text-2xl text-gray-800 font-bold mb-2 text-left">Blog Title Goes Here</h2>

                            <p className="text-gray-700 mb-4 text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quae
                                amet consectetur adipisicing elit Quisquam ipsum dolor sit amet consectetur
                                consectetur adipisicing elit Quisquam sit amet consectetur adipisicing.
                            </p>
                            <button className=" mt-2 border font-semibold border-gray-500 text-gray-900 px-4 py-2  hover:bg-indigo-700 hover:text-white hover:border-indigo-700 transition duration-300">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog



