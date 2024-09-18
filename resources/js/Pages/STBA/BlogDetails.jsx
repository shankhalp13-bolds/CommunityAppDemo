import React from 'react'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'

const BlogDetails = ({ blog }) => {
    console.log("nlog", blog);

    return (
        <Layout className=''>
            <div className='customBackground'>
                <Head>
                    <title>STBA Homepage</title>
                    <meta name="description" content="Sikkim Tamang Buddhist Association" />
                </Head>
                <div className="text-center max-w-7xl mx-auto py-10">
                    <div className='bg-white rounded-2xl shadow-2xl space-y-4 '>
                        <div className='flex flex-col  p-4 gap-4'>
                            <div className="px-6 py-4 bg-slate-500 text-white rounded-md">
                                <h1 className="text-sm font-bold lg:text-3xl">
                                    {blog.title}
                                </h1>
                            </div>
                            <div className="flex-col max-w-7xl h-[40vh] overflow-hidden bg-stone-500 rounded-2xl ">
                                <div className='w-full overflow-hidden'>
                                    <img
                                        className="w-full h-[40vh]  object-cover object-center "
                                        src={`/storage/${blog.thumbnail}`}
                                        alt={blog.title}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-6 max-w-6xl mx-auto">
                            <p className='flex justify-end px-4'>
                                <span className=''>Author - </span> {blog.author_name}
                            </p>
                            <p className="text-base text-gray-700 text-justify" dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BlogDetails