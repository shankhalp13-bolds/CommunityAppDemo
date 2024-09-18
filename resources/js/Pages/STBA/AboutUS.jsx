import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const AboutUS = () => {
    return (
        <Layout className=''>
            <div className=''>
                <Head>
                    <title>STBA Homepage</title>
                    <meta name="description" content="Sikkim Tamang Buddhist Association" />
                </Head>
                <>
                    <section
                        className="bg-bottom bg-no-repeat bg-cover bg-gray-500 bg-blend-multiply lg:h-[50vh]  flex items-center"
                        style={{
                            backgroundImage: "url('/images/stba_2.jpg')",
                        }}
                    >
                        <div className="flex justify-center  sm:mx-auto sm:text-center">
                            <h1 className="text-6xl text-left text-white">
                                Sikkim Tamang Buddhist Association
                            </h1>
                        </div>
                    </section>
                    <div className='customBackground'>
                        <div className="max-w-7xl mx-auto p-10">
                            <div className="">
                                <div className="flex-col rounded-lg shadow-md sm:p-4 align-self">
                                    <h1 className="pb-2 text-4xl text-black">About us</h1>
                                    <p className="w-full text-justify sm:mb-2 sm:text-xl roboto-slab-para">
                                        Sikkim Tamang Buddhist Association is the oldest registered
                                        organization of Tamang community of Sikkim. Sikkim Tamang Buddhist
                                        Association is also known as Sikkim Tamang Baudha Sangha. The STBA
                                        has a federal nature having its constituents throughout the state
                                        of Sikkim and has the following aims and objectives:
                                    </p>
                                    <ul className="pt-2 pb-2 pl-5 mb-6 list-disc sm:text-xl sm:pl-10 roboto-slab-para">
                                        <li>
                                            To work, endure, propagate, promote and encourage Buddhism.
                                        </li>
                                        <li>
                                            To unite all the Tamangs and socio-religious, cultural,
                                            economic and ethical plains and promote these for advancement of
                                            their well-being.
                                        </li>
                                        <li>
                                            To safeguard the rights and interests of Tamang-buddhists of
                                            Sikkim in all spheres viz. social, economic, cultural and
                                            political, while remaining a political body.
                                        </li>
                                    </ul>
                                    <h2 className="pb-2 text-4xl text-black">Our history</h2>
                                    <p className="text-justify sm:text-xl sm:mb-5 roboto-slab-para">
                                        Tamangs are one of the most ancient ethnic groups in the hills of
                                        Sikkim. In the year 1995, the Tamang language was recognized in
                                        the state of Sikkim through Amendment Act 1995 and made as an
                                        official language. Vide Gazetteer number 76 of 1995. After the
                                        span of eight years, in the year 2003, the Tamang community was
                                        included in the list of Scheduled Tribe along with Limboo.
                                        Migration is a process, the first step for any people to achieve
                                        something is to know about themselves and history, it is believed
                                        and followed that Tamangs were migrated from Tibet around 3000
                                        years ago.
                                    </p>
                                    <p className="text-justify sm:text-xl sm:mb-5 roboto-slab-para">
                                        The Tamang community belongs to some ethnic Mongoloid group. The
                                        word Tamang has been found to be used in a document of the 13th
                                        century, that document found by David Jackson (1976, 53). Although
                                        the word Tamang was used as early as the 13th century to denote an
                                        ethnic group following the expansion of the Gorkhali Kingdom in
                                        the neighboring country, Nepal. The use of the Tamang word was
                                        banned/prohibited. Tamangs were addressed in a derogatory manner
                                        as "Murmi". Later, Tamangs have, however, continued to call
                                        themselves as Tamang.
                                    </p>
                                    <div className="flex justify-center text-center">
                                        <img
                                            src={"/images/census.jpg"}
                                            alt="Census document"
                                            className="pb-5"
                                        />
                                    </div>
                                    <p className="pb-5 text-center roboto-slab-para">
                                        Pictorial document showing population of Murmis (Tamang) in Sikkim
                                        in 1891
                                    </p>
                                    <p className="mb-2 text-justify sm:text-xl roboto-slab-para">
                                        In the year 1891, the Census published in the Gazetteer of Sikkim
                                        shows the population of different ethnic groups residing in
                                        Sikkim. Amongst them, the 5th most populous ethnic community was
                                        Murmis (Tamangs) counting 2,867 people (Male: 801, Female: 778,
                                        Children: 1288).
                                    </p>
                                    <p className="text-justify sm:text-xl roboto-slab-para">
                                        Joseph Dalton Hooker (1848) writes in the Himalayan Journal Vol. I
                                        pl130. The Murmi/Moormi (Tamang) are the only other native tribe
                                        remaining in any numbers in Sikkim except the Tibetan of the
                                        Loffier Mountains. The Murmis are a scattered people of Tibetan
                                        origin and also called "Nishung", from being composed of two
                                        branches respectively from the district of Nimo and Shung both on
                                        the road between the Sikkim and Lhasa.
                                    </p>
                                    <p className="sm:text-xl roboto-slab-para">
                                        The main division of the society are as follows:
                                    </p>
                                    <ol className="pt-5 pb-5 pl-5 list-disc sm:text-xl sm:pl-10 roboto-slab-para">
                                        <li>
                                            <span className="font-bold">TAMBA:</span> Tamba looks after the
                                            cultural aspects and has a very important role to play in
                                            marriage ceremonies.
                                        </li>
                                        <li>
                                            <span className="font-bold">GAMBA:</span> Gamba participates in
                                            all types of social political and religious activities. He
                                            observes the various activities of society and gives his
                                            suggestion accordingly.
                                        </li>
                                        <li>
                                            <span className="font-bold">BONBO:</span> Bonbo propitiates the
                                            local god and goddess and assists by providing treatment to the
                                            sick and the needy in the villages.
                                        </li>
                                        <li>
                                            <span className="font-bold">LA BONBOM (LATABA):</span> La Bonbo
                                            keeps alive the history of the clans and lineage through the
                                            worship of clan deities. Each Clan/Thar has its own Phola or
                                            Clan deities.
                                        </li>
                                        <li>
                                            <span className="font-bold">CHO HO:</span> Cho Ho looks into
                                            cases and dispenses justice and maintains peace, security, and
                                            well-being in society.
                                        </li>
                                    </ol>
                                    <p className="text-justify sm:text-xl sm:mb-5 roboto-slab-para">
                                        As we undertake the heritage of Tamang culture, we found Tamangs
                                        are more unbiased to offspring of any gender. Since the cultural
                                        bonding of Tamang culture safeguards them by any extent e.g. Char
                                        Dam, it is one of the most important cultural heritages that is
                                        performed during the marriage at the bride's family. The
                                        proceeding shall be witnessed by twelve Tamang of different Clans
                                        or Thar. During the Char Dam proceeding, the bridegroom and his
                                        family are inducted with advisory by Tamba/Lama (head of the
                                        marriage ceremony). He declares that the bon, haddi, flesh, and
                                        air that empower the human body are yours from today. However, the
                                        bon always remains in the sole possession of the bride's family.
                                        The chain prolongs until her death and most importantly in our
                                        cultural aspects, the girl's child/bride never loses her Clan/Thar
                                        or Surname. She has the right to write her own Clan or Thar post
                                        marriage e.g. Any Gyabak girl married to a Yonzon boy, she has the
                                        right to write her own clan i.e. Gyabak even after her marriage.
                                    </p>
                                    <h1 className="pb-2 text-4xl text-black">Festival</h1>
                                    <p className="text-justify sm:text-xl sm:mb-5 roboto-slab-para">
                                        Sonam Lochar is the new year of the Tamang people and the most
                                        important festival in our calendar. Sonam Lochar is celebrated on
                                        the first day of the new moon during the month of Magh in the
                                        Bikram Samvad calendar. The word "Lochar" means New Year or
                                        beginning of a new year. Tamangs divide their years into 12 cycles
                                        each represented by a zodiac animal following the same order as
                                        the Lunar New Year.
                                    </p>
                                    <h1 className="pb-2 text-4xl text-black capitalize">
                                        Recognition of Tamang Language
                                    </h1>
                                    <p className="pb-5 text-justify sm:text-xl roboto-slab-para">
                                        The Sikkim Government recognized the Tamang language in the year
                                        1994, 22nd June. The Tamang language was incorporated as a medium
                                        of instruction up to the primary level on 6th September 2002 in
                                        schools in Sikkim. Moreover, a milestone was achieved on 20th
                                        February 2016. The first Tamang TV was officially launched by the
                                        Honorable Chief Minister of Sikkim, Shri Pawan Chamling. The
                                        Official Gazetteer no. 76 of 1995 published that the government of
                                        Sikkim recognized the Tamang language as one of the official
                                        languages of Sikkim.
                                    </p>
                                    <h1 className="pb-2 text-4xl text-black">
                                        Head Office (GHUMBA):
                                    </h1>
                                    <p className="text-justify sm:text-xl roboto-slab-para">
                                        The Head office or the Ghumba (as termed) is located at Central
                                        Geyzing of West Sikkim. The office is in the heart of West District
                                        of Sikkim and can be easily commuted from any place within the state.
                                        The exact location is by the roadside at the starting point of
                                        Geyzing. The other recognized offices are located in different
                                        parts of the state and are regarded as Sub offices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        </Layout>
    )
}

export default AboutUS