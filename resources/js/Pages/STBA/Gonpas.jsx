import Layout from '@/Layouts/Layout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

const Gonpas = ({ gompa }) => {
    console.log("gompa", gompa);

    return (
        <Layout >
            <div className='customBackground'>
                <Head>
                    <title>STBA Homepage</title>
                    <meta name="description" content="Sikkim Tamang Buddhist Association" />
                </Head>
                <div className="text-center max-w-7xl mx-auto py-10 ">
                    <div className=" w-full ">
                        <div className="flex p-4 bg-transparent rounded-lg  align-self">
                            <h1 className="text-4xl text-center ">Gompas</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {gompa.map((gonpa, index) => (
                                <div key={index} className="flex-col max-w-sm rounded-lg overflow-hidden shadow-2xl relative">
                                    <div className='max-h-56 overflow-hidden'>
                                        <img
                                            className="w-full object-cover object-center"
                                            // Updated to use the correct image path field
                                            src={`/storage/${gonpa.image_path}`}
                                            alt={gonpa.gompa_name}
                                        />
                                    </div>
                                    <div className="absolute bottom-0 bg-black w-full text-white bg-opacity-30 flex-col items-center justify-center max-h-24 ">
                                        <Link href={`/gonpas/${gonpa.slug}`}>
                                            <h5 className="p-2 text-xs text-left lg:text-sm">
                                                {gonpa.gompa_name}
                                            </h5>
                                            <div className='justify-end flex p-2'>
                                                <button className='rounded-lg  flex justify-end text-sm w-full'>Continue Reading...</button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Gonpas