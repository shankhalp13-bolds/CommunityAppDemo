"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const GalleryPage = ({ images }) => {

    // console.log("items2", images);

    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState(null);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        if (!selectedImage) return;
        const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
        let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        setSelectedImage(images[newIndex]);
    };

    const filteredImages = filter
        ? images.filter((img) => img.image_category.title === filter)
        : images;

    return (
        <>
            {/* <section className="w-full mx-auto text-white">
                <div className="z-10 flex items-center justify-center md:space-y-4 ">
                    <div
                        className="lg:min-h-[30vh] flex w-full lg:items-center bg-black bg-opacity-40 bg-blend-multiply bg-[url('/assets/dron1.jpg')] bg-center bg-no-repeat bg-cover">
                        <div className="space-y-2 text-white flex flex-col text-center w-full max-w-7xl lg:mx-auto py-8">
                            <h1 className="lg:text-6xl text-2xl font-extrabold ">Our Gallery</h1>

                        </div>
                    </div>
                </div>
            </section> */}
            <div className="container mx-auto px-4 py-12">
                {/* <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <Button
                        variant={filter === null ? "default" : "outline"}
                        onClick={() => setFilter(null)}
                    >
                        All
                    </Button>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={filter === category ? "default" : "outline"}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image) => (
                        <div key={image.id}>
                            <div
                                className="h-full w-full rounded-lg object-cover object-top overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                                onClick={() => openLightbox(image)}
                            >
                                <div className="p-0 relative">
                                    <img
                                        src={`/storage/${image.image_path}`}
                                        // alt={image.alt}
                                        className="w-full h-48 object-cover"
                                    />

                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                                        <p className="text-sm truncate">{image.caption}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
                            <div
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white hover:text-gray-300"
                                onClick={() => navigateImage("prev")}
                            >
                                <FaChevronLeft size={24} />
                            </div>
                            <div
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-300"
                                onClick={() => navigateImage("next")}
                            >
                                <FaChevronRight size={24} />
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded">
                                <p className="text-center">{selectedImage.caption}</p>
                                <p className="text-center mt-1">
                                    <span>{selectedImage.category}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div >
        </>
    );
};

export default GalleryPage;
