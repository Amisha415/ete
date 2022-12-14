import React, { useState } from "react";
import {
    Link
} from 'react-router-dom';

export default function Index() {
    return (
        <div className="">
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center space-y-2">
                            <p className="text-xl leading-5 text-gray-600">ACCORDING TO  2022 TREND</p>
                            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">E COMMERCE SITE</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full">
                            <Link to="/women" className="relative group flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-full w-full" src="https://images.unsplash.com/photo-1532969200589-57f1fe57aaab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=414&q=80" alt="girl-image" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4  absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </Link>
                            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                <Link to="/shoes" className="relative group flex justify-center items-center h-full w-full">
                                    <img className="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/345415/pexels-photo-345415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="shoe-image" />
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4  absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Shoes</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </Link>
                                <Link to="/watches" className="relative group flex justify-center items-center h-full w-full">
                                    <img className="object-center object-cover h-full w-full" src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="watch-image" />
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4  absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Watches</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                                </Link>
                            </div>
                            <Link to="/men" className="relative group justify-center items-center h-full w-full hidden lg:flex">
                                <img className="object-center object-cover h-full w-full" src="https://images.unsplash.com/photo-1555421689-43cad7100750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="girl-image" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4  absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Men</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </Link>
                            <Link to="/men" className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                                <img className="object-center object-cover h-full w-full hidden md:block" src="https://images.unsplash.com/photo-1555421689-43cad7100750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="girl-image" />
                                <img className="object-center object-cover h-full w-full md:hidden" src="https://images.unsplash.com/photo-1622497170185-5d668f816a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4  absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Men</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
