import React from 'react'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'

const GonpasDetails = ({ gompa }) => {
    console.log("gompa", gompa);

    return (
        <Layout className=''>
            <div className='customBackground'>
                <Head>
                    <title>STBA Homepage</title>
                    <meta name="description" content="Sikkim Tamang Buddhist Association" />
                </Head>
                <div className="text-center max-w-7xl mx-auto py-10">
                    <div className='bg-white  shadow-lg sm:mx-auto py-10 space-y-4 '>
                        <div className='flex flex-col bg-stone-500 rounded-2xl p-4'>
                            <div className="px-6 py-4 text-white ">
                                <h1 className="text-sm font-bold lg:text-3xl montserrat-title">
                                    {gompa.gompa_name}
                                </h1>
                            </div>
                            <div className="flex-col max-w-2xl mx-auto overflow-hidden  group">
                                <div className='w-full overflow-hidden'>
                                    <img
                                        className="w-full object-cover object-center"
                                        src={`/storage/${gompa.image_path}`}
                                        alt={gompa.gompa_name}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="px-6 py-4 bg-white">
                                <p className="text-base text-gray-700 text-justify" dangerouslySetInnerHTML={{ __html: gompa.gompa_description }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )


}

export default GonpasDetails