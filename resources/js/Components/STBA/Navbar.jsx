import { Link } from '@inertiajs/react';
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Mock data: replace this with actual user state
    const user = {
        name: 'John Doe', // Change this to dynamic data as needed
    };

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to get active link class
    const { pathname } = window.location
    const splitPathname = pathname.split("/")
    const itemId = splitPathname[splitPathname.length - 1]

    return (
        <nav className="lg:sticky relative lg:top-0 lg:left-0  z-50 ">
            <div className="bg-[#121727] relative flex flex-col items-center p-4">
                <div className="flex w-full ">
                    <div className="flex items-center w-full text-white">
                        <Link href="/" className="flex no-underline">
                            <img src="/images/stba_logo.jpg" className="h-[50px] sm:h-[70px] rounded-full" alt="stba Logo" />
                            <h2 className="self-center no-underline text-white hidden text-2xl font-semibold sm:flex sm:ml-3 whitespace-nowrap">
                                Sikkim Tamang Buddhist Association
                            </h2>
                            <div className="flex justify-between w-full">
                                <h2 className="flex self-center text-white  no-underline pl-3 text-sm font-semibold leading-4 sm:hidden sm:ml-3 whitespace-nowrap">
                                    Sikkim Tamang <br /> Buddhist Association
                                </h2>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center justify-end pr-5 sm:w-full ">
                        <div className="flex lg:hidden">
                            <button
                                id="menuButton"
                                type="button"
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-cta"
                                aria-expanded={menuOpen}
                            >
                                <GiHamburgerMenu className='size-8' />
                            </button>
                        </div>
                        <div className="justify-center hidden space-x-4 lg:flex sm:ml-10 md:mt-4 lg:mt-0">
                            <a href="/admin/login" className="no-underline px-4 py-2 font-bold text-white border-2 border-white rounded-md">
                                Login
                            </a>
                            <a href="/admin/register" className="no-underline px-4 py-2 font-bold text-white border-2 border-white rounded-md">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${menuOpen ? 'fixed top-0' : 'hidden'} lg:flex ${['', 'about-stba'].includes(itemId) ? 'md:absolute' : ''} items-center justify-center w-full mx-auto lg:h-[70px] backdrop-blur-sm bg-black/30 `}>
                <div className="z-10 flex items-center justify-center w-full">
                    <div
                        id="menu"
                        className={`${menuOpen ? 'absolute top-0 h-screen w-full bg-black' : 'hidden'
                            } lg:flex lg:flex-wrap lg:items-center md:justify-center lg:w-auto lg:h-auto md:order-1 sm:mx-auto`}
                    >
                        <div className="flex items-center justify-end p-8">
                            <div className="flex lg:hidden">
                                <button
                                    id="menuButton"
                                    type="button"
                                    onClick={toggleMenu}
                                    className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                                    aria-controls="navbar-cta"
                                    aria-expanded={menuOpen}
                                >
                                    <GiHamburgerMenu className='size-8' />
                                </button>
                            </div>
                        </div>
                        <ul className="flex flex-col text-xl font-semibold lg:flex-row lg:space-x-6 lg:items-center lg:justify-center  lg:text-lg ">
                            <li>
                                <Link href="/" className={`${itemId === '' ? 'underline text-green-300' : 'text-white no-underline'}  block px-2 `} aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-stba" className={`${itemId === 'about-stba' ? 'underline text-green-300' : 'text-white no-underline'} block px-2 `}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className={`${itemId === 'events' ? 'underline text-green-300' : 'text-white no-underline'}  block px-2 `}>
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/executive-members" className={`${itemId === 'executive-members' ? 'underline text-green-300' : 'text-white no-underline'}  block px-2 `}>
                                    Central Executives
                                </Link>
                            </li>
                            <li>
                                <Link href="/gonpas" className={`${itemId === 'gonpas' ? 'underline text-green-300' : 'text-white no-underline'}  block px-2 `}>
                                    Gompas
                                </Link>
                            </li>
                            <li>
                                <Link href="/language-tamyig" className={`${itemId === 'language-tamyig' ? 'underline text-green-300' : 'text-white no-underline'}  block px-2 `}>
                                    Language Tamyig
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs" className={`${itemId === 'blogs' ? 'underline text-green-300' : 'text-white no-underline'}  block px-2 `}>
                                    Blogs
                                </Link>
                            </li>
                            {!user ? (
                                <li className="flex justify-center w-auto p-3 space-x-4 bg-white rounded-md sm:ml-10">
                                    <Link href="/userprofile" className="flex text-black">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-user user-icon"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        {user.name}'s Profile
                                    </Link>
                                </li>
                            ) : (
                                <li className="py-4">
                                    <div className="flex justify-center space-x-4 lg:hidden sm:ml-10 md:mt-4 lg:mt-0">
                                        <a href="/admin/login" className="px-4 py-2 no-underline font-bold text-white border-2 border-white rounded-md">
                                            Login
                                        </a>
                                        <a href="/admin/register" className="px-4 py-2 no-underline font-bold text-white border-2 border-white rounded-md">
                                            Sign Up
                                        </a>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

