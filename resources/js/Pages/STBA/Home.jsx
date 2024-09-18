import { HomeCarousel } from '@/Components/STBA/Carousel'
import HomeComponent from '@/Components/STBA/HomeComponent'
import PaymentForm from '@/Components/STBA/Payment/PaymentForm'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Home = ({ gallery,isEventsEnabled }) => {

    return (
        <Layout isEventsEnabled={isEventsEnabled} className=''>
            <>
                <Head>
                    <title>STBA Homepage</title>
                    <meta name="description" content="Sikkim Tamang Buddhist Association" />
                </Head>
                <div >
                    <HomeCarousel />
                    {/* <a href="/cashfree/payments/create" className="bg-black px-4 py-2 no-underline font-bold text-white border-2 border-white rounded-md">
                        Store
                    </a> */}
                    {/* <PaymentForm /> */}
                    <HomeComponent items={{ gallery }} />
                </div>
            </>
        </Layout>
    )
}

export default Home
