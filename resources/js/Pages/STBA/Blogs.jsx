import Layout from '@/Layouts/Layout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

const Blogs = ({ blog }) => {
    console.log("blog", blog);

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
                            <h1 className="text-4xl text-center ">Blogs</h1>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {blog.map(item => {
                            let isLongDescription = false;
                            if (item.content) {
                                isLongDescription = item.content.length > 150;
                            }
                            return (
                                <div key={item.id} className='shadow-md space-y-4 rounded-2xl overflow-hidden relative group'>
                                    <img
                                        className="w-full object-cover object-center rounded-2xl group-hover:scale-125 duration-1000 transition-all"
                                        src={`/storage/${item.thumbnail}`}
                                        alt={item.title} />
                                    <div className="absolute bottom-0 bg-black w-full text-white bg-opacity-30 flex-col p-4 ">
                                        <div className='flex flex-col gap-4'>
                                            <div className='text-start'>
                                                <h1 className='text-lg font-semibold'>{item.title}</h1>
                                            </div>
                                            <div className="prose max-w-full text-justify pb-2" dangerouslySetInnerHTML={{
                                                __html: !isLongDescription ? item.content : (item.content || '').substring(0, 30) + '...'
                                            }} />
                                            <div className='flex flex-col gap-2 text-start'>
                                                <p>Posted On {new Date(item.created_at).toLocaleDateString()}</p>
                                                <p className=''>Posted By {item.author_name}</p>
                                            </div>
                                        </div>
                                        <Link href={`/blogs/${item.slug}`}>
                                            <button className='rounded-lg  flex justify-end text-sm w-full'>Continue Reading...</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blogs