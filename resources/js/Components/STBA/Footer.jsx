import { Link } from "@inertiajs/react";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (
        <footer
            className="flex items-center justify-center w-full h-auto p-10 sm:flex-col bg-[#121727] border-t-[30px]  border-green-400 custom-border-image">
            <div className="items-center justify-center sm-flex-col justify-items-stretch">
                <div className="flex flex-col h-full text-white flex-justify grow md:container sm:flex-row">
                    <div className="hidden w-full  sm:block sm:flex-col justify-items-stretch sm:h-full">
                        <p className=" sm:text-center sm:w-70 sm:p-10">
                            "There is no power for change greater than a community discovering
                            what it cares about."
                            <br />– Margaret J.
                        </p>
                    </div>
                    <div className="flex-col w-full h-full  grow justify-items-stretch ">
                        <p className="hidden sm:block text-center">
                            WELCOME
                            <br />
                            Join our community for more details. We would be pleased to have
                            you with us. Discover more.
                        </p>
                        <div className=" text-center flex flex-col">
                            <p className="pb-3">Follow us on</p>
                            <div className="flex w-full items-center justify-center gap-4">
                                <Link
                                    href="https://www.facebook.com/stba2021"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-green-50 p-1"
                                >
                                    <FaFacebookF className='size-7 lg:size-10 fill-black  dark:fill-primary  p-1' />
                                </Link>
                                <Link
                                    href="https://www.facebook.com/stba2021"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-green-50 p-1"
                                >
                                    <FaFacebookF className='size-7 lg:size-10 fill-black  dark:fill-primary  p-1' />
                                </Link>
                                <Link
                                    href="https://www.facebook.com/stba2021"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-green-50 p-1"
                                >
                                    <FaFacebookF className='size-7 lg:size-10 fill-black  dark:fill-primary  p-1' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full text-center text-white sm:w-100 ">
                    Copyright &copy; Developed by Bolds Innovation.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
