import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import { FaDownload } from "react-icons/fa6";

const TamangScripts = () => {
    const tamangScripts = [
        {
            imgSrc: '/images/ta1.jpeg',
            altText: 'TAMYIG VJANJAN VARNA',
            downloadLink: '/images/ta1.jpeg',
            downloadName: 'ta1.jpeg',
        },
        {
            imgSrc: '/images/ta2.jpg',
            altText: 'TAMYIG SWAR VARNA',
            downloadLink: '/images/ta2.jpg',
            downloadName: 'ta2.jpg',
        },
        {
            imgSrc: '/images/ta3.jpg',
            altText: 'TAMYIG VJANJAN VARNA',
            downloadLink: '/images/ta3.jpg',
            downloadName: 'ta3.jpg',
        },
        // Add more items as needed
    ];

    return (
        <Layout className=''>
            <div className='customBackground'>
                <Head>
                    <title>STBA Homepage</title>
                    <meta name="description" content="Sikkim Tamang Buddhist Association" />
                </Head>
                <div className="text-center max-w-7xl mx-auto p-10">
                    <div className=" w-full ">
                        <div className="flex p-4 bg-transparent rounded-lg  align-self">
                            <h1 className="text-4xl text-center ">Tamang Scripts (TAMYIG)</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {tamangScripts.map((script, index) => (
                                <div key={index} className="flex flex-col items-center mb-10 shadow-lg">
                                    <div className='text-start'>
                                        <h1 className='text-lg font-semibold'>{script.altText}</h1>
                                    </div>
                                    <img src={script.imgSrc} alt={script.altText} className="" />
                                    <a
                                        href={script.downloadLink}
                                        download={script.downloadName}
                                        className=" w-full flex gap-2 bg-black text-white font-semibold rounded-lg py-4 text-center items-center justify-center mb-2"
                                    >
                                        <FaDownload />
                                        Download
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default TamangScripts 