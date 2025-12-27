import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Gallery = () => {
    const [headerRef, headerVisible] = useScrollReveal(0.1);

    const images = [
        "img src/1U2A0652.JPG",
        "img src/1U2A0678.JPG",
        "img src/3H0A9800.JPG",
        "img src/3H0A9824.JPG",
        "img src/3H0A9839.JPG",
        "img src/crowd2.jpeg"
    ];

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-sm font-bold text-brand-blue-600 uppercase tracking-wide mb-2">Our Gallery</h2>
                    <h3 className="text-3xl lg:text-4xl font-extrabold font-nunito text-gray-900">
                        Moments of <span className="text-brand-yellow-500">Learning & Joy</span>
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <GalleryItem key={index} src={src} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const GalleryItem = ({ src, delay }) => {
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`overflow-hidden rounded-2xl shadow-lg cursor-pointer group hover:shadow-2xl transition-all duration-700 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="absolute inset-0 bg-brand-blue-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <span className="text-white font-bold text-lg transform hover:scale-110 transition-transform">View</span>
            </div>
            <img
                src={src}
                alt="Gallery"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
        </div>
    );
}

export default Gallery;
