import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ContactForm from "./HomeContactForm";
import GalleryPage from "./Gallery";
const HomeComponent = ({ items }) => {


    const { data, setData, post, progress, processing, errors, wasSuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    function handelForm(e) {
        e.preventDefault()
        console.log('data', data);
        post('/contact-us-upload');
    }
    useEffect(() => {
        if (wasSuccessful) {
            setData({ name: '', email: '', phone: '', message: '' })
            setsuccessMessage(true)
            setTimeout(() => {
                setsuccessMessage(false)
            }, 1000);
        }
    }, [wasSuccessful])
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full ">
                <section className="w-full  h-full mx-auto lg:shadow hover:shadow-primary hover:shadow-md  transition-all duration-500 py-20 ">
                    <div className="bg-black bg-opacity-25 bg-blend-multiply relative bg-[url('/images/stba_1.jpeg')] bg-center bg-no-repeat bg-cover flex flex-col self-center justify-center max-w-5xl mx-auto  p-8 shadow-xl rounded-2xl border-2 ">
                        <h1 className="text-2xl text-white text-center ">History</h1>
                        <h1 className="text-4xl text-white text-center ">Our Story</h1>
                        <div className="max-w-3xl mx-auto bg-white p-8 rounded-md">
                            <p className="w-full p-0 m-0 mb-2 text-lg text-left sm:text-justify md:mb-8 ">
                                Sikkim Tamang Buddhist Association was established in the year 1961
                                and was registered vide registration No. 60, Volume No. I, dated
                                26/11/1980. The first constitution was framed in 1961. The first
                                amendment of this constitution was done on 14/02/1981. Sikkim
                                Tamang Buddhist Association is the oldest registered organization
                                of the Tamang community of Sikkim. Sikkim Tamang Buddhist
                                Association is also known as Sikkim Tamang Baudha Sangha.
                            </p>
                            <div className="flex flex-col items-center justify-end sm:flex-row ">
                                <Link
                                    href="/about-stba"
                                    className="no-underline items-center gap-2 text-white px-4 py-2 rounded-md bg-blue-500 flex font-semibold text-xl"
                                >
                                    Learn more
                                    <FaArrowRightLong className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full ">
                    <div className='bg-black bg-opacity-25 h-full  w-full mx-auto lg:shadow hover:shadow-primary hover:shadow-md  transition-all duration-500 py-20 '>
                        <h1 className="text-4xl text-center text-white pb-10">Our Gallery</h1>
                        <div className="px-4 max-w-7xl mx-auto ">
                            <div className="py-20 max-w-6xl mx-auto bg-cyan-900 bg-opacity-80 p-8 text-white rounded-md">
                                <GalleryPage images={items.gallery} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="max-w-7xl mx-auto md:py-20 flex lg:flex-row flex-col">
                <ContactForm />
            </section>
        </div>
    );
};

export default HomeComponent;
