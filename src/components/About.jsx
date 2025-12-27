import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
    const [ref, isVisible] = useScrollReveal(0.2);

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div
                        className={`w-full lg:w-1/2 order-2 lg:order-1 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-brand-yellow-400 rounded-3xl transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                            <div className="absolute inset-0 bg-brand-blue-600 rounded-3xl transform -rotate-2 scale-105 opacity-10 group-hover:-rotate-4 transition-transform duration-500"></div>
                            <img
                                src="Bold.png"
                                alt="Teacher helping students"
                                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                    <div
                        ref={ref}
                        className={`w-full lg:w-1/2 order-1 lg:order-2 transition-all duration-1000 ease-out delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                    >
                        <h2 className="text-sm font-bold text-brand-blue-600 uppercase tracking-wide mb-2">About Us</h2>
                        <h3 className="text-3xl lg:text-4xl font-extrabold font-nunito text-gray-900 mb-6 leading-tight">
                            Building a Foundation for <br /> <span className="text-brand-yellow-500 relative inline-block">
                                Lifelong Success
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            At Power O Brain, we believe that every child has untapped potential waiting to be discovered. Our mission is to nurture young minds through the ancient art of Abacus and modern Mental Math techniques.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We focus not just on calculation speed, but on holistic brain development—enhancing concentration, listening skills, memory, and self-confidence. With us, math becomes a tool for building discipline and academic excellence.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col p-4 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                                <span className="text-4xl font-extrabold text-brand-blue-700 mb-1">500+</span>
                                <span className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Happy Students</span>
                            </div>
                            <div className="flex flex-col p-4 bg-yellow-50 rounded-xl border border-yellow-100 hover:shadow-md transition-shadow">
                                <span className="text-4xl font-extrabold text-brand-yellow-600 mb-1">50+</span>
                                <span className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Certified Trainers</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
