import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const Events = ({ event }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };
    return (
        <Layout className=''>
            <div className=''>
                <Head>
                    <title>STBA Events</title>
                    <meta name="description" content="Sikkim Tamang Buddhist Association" />
                </Head>
                <div className="text-center max-w-7xl mx-auto py-10">
                    <div className=" w-full ">
                        <div className="flex p-4 bg-transparent rounded-lg  align-self">
                            <h1 className="text-4xl text-center ">Upcoming Events</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-20 gap-7">
                        {event.map((event, index) => (
                            <div onClick={() => openLightbox(event)} key={index} className="relative w-full shadow-lg rounded-md overflow-hidden bg-tranparent">
                                <figure>
                                    <img
                                        src={`/storage/${event.image_path}`}
                                        alt={event.eventTitle}
                                        className="object-cover w-full h-32 sm:h-64"
                                    />
                                </figure>
                                <div className="absolute bottom-0 bg-black w-full text-white bg-opacity-40 flex-col items-center justify-center max-h-28 p-2 text-start">
                                    <h2 className="font-semibold text-sm">{event.event_title}</h2>
                                    <div className="text-sm">
                                        <div dangerouslySetInnerHTML={{
                                            __html: event.event_desc.replace(/(<([^>]+)>)/gi, "").slice(0, 30) + "...",
                                        }} />
                                    </div>
                                    <p className="flex text-xs font-semibold">
                                        {new Date(event.event_date).toLocaleDateString()}
                                    </p>
                                    <div className='justify-end flex '>
                                        <button className=' flex items-center text-white px-2 py-1 bg-blue-500 text-xs rounded-md'>Continue Reading...</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={closeLightbox}
                    >
                        <div
                            className="relative max-w-4xl w-full mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={`/storage/${selectedImage.image_path}`}
                                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                            />
                            <div
                                className="absolute top-4 right-4 text-white hover:text-gray-300"
                                onClick={closeLightbox}
                            >
                                <RxCross2 size={24} />
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded">
                                <p className="text-2xl mb-4 font-bold">{selectedImage.event_title}</p>
                                <div className=" mt-1">
                                    <div dangerouslySetInnerHTML={{ __html: selectedImage.event_desc }} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Events