import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const CentralExecutives = ({ executiveMember }) => {

    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };
    return (
        <Layout className=''>
            <div className='customBackground'>
                <Head>
                    <title>STBA Homepage</title>
                    <meta name="description" content="Sikkim Tamang Buddhist Association" />
                </Head>
                <div className="text-center max-w-7xl mx-auto py-10">
                    <div className=" w-full ">
                        <div className="flex p-4 bg-transparent rounded-lg  align-self">
                            <h1 className="text-4xl text-center ">Central Executives</h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4'>
                        {executiveMember.map(item => (
                            <div onClick={() => openLightbox(item)} key={item.id} className='relative max-h-96 shadow-md rounded-2xl overflow-hidden'>
                                <div className='hover:scale-105 items-center justify-center flex transition-all delay-150 duration-1000'>
                                    <img
                                        src={`/storage/${item.image}`}
                                        className='w-full max-h-96 object-cover object-top'
                                        alt={item.fullname}
                                    />
                                </div>
                                <div className="absolute bottom-0 bg-black w-full text-white bg-opacity-60 flex-col items-center justify-center max-h-28 p-4 text-start">
                                    <p className='text-wrap'>
                                        {item.executive_member_designation.name}
                                    </p>
                                    {/* <h1>{item.gender === 'male' ? 'Shree' : 'Shremeti'} {item.fullname}</h1> */}
                                    <h5 className="text-xs montserrat-title">{item.fullname}</h5>
                                    {/* <p className='text-wrap'>
                                            {item.description}
                                        </p> */}
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
                            className="relative max-w-3xl max-h-[60vh] w-full mx-4 bg-white p-2 rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={`/storage/${selectedImage.image}`}
                                className="w-full h-auto max-h-[50vh] object-contain rounded-lg"
                            />
                            <div
                                className="absolute top-4 right-4 text-white hover:text-gray-300"
                                onClick={closeLightbox}
                            >
                                <RxCross2 className='text-black' size={24} />
                            </div>
                            <div className="absolute bottom-0 right-0 left-0 p-4 bg-black bg-opacity-60 text-center text-white ">
                                <p className="text-2xl mb-4 font-bold">{selectedImage.fullname}</p>
                                <p className='text-xl'>
                                    {selectedImage.executive_member_designation.name}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default CentralExecutives