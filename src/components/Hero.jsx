import React from 'react';
import videoBg from '../assets/D_Abacus_Animation_Generation.mp4';

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-screen flex items-center">
            {/* Video Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={videoBg} type="video/mp4" />
                </video>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center py-1 px-4 rounded-full bg-white/80 border border-brand-blue-100 text-brand-blue-700 text-sm font-bold mb-6 animate-fade-in-up shadow-sm backdrop-blur-md">
                            <span className="flex h-2 w-2 relative mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-500"></span>
                            </span>
                            Unlock Your Child's True Potential
                        </div>
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold font-nunito text-gray-900 leading-[1.1] mb-6 tracking-tight animate-fade-in-up [animation-delay:200ms] opacity-0 fill-mode-forwards drop-shadow-sm">
                            Empower Their <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-600 to-brand-blue-800">Curiosty & Mind</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-700 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up [animation-delay:400ms] opacity-0 fill-mode-forwards font-medium">
                            Enhance focus, accuracy, and mental speed through our scientifically proven Abacus and Mental Math training programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up [animation-delay:600ms] opacity-0 fill-mode-forwards">
                            <a
                                href="#contact"
                                className="group relative px-8 py-4 bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-blue-900 font-bold rounded-full overflow-hidden shadow-lg shadow-brand-yellow-200/50 transition-all hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:scale-[10] group-hover:opacity-0 transition-all duration-700 rounded-full"></div>
                                <span className="relative">Book a Free Demo</span>
                            </a>
                            <a
                                href="#programs"
                                className="px-8 py-4 bg-white/90 hover:bg-white text-gray-800 font-bold rounded-full border border-gray-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md backdrop-blur-sm"
                            >
                                Explore Programs
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative animate-fade-in-right opacity-0 fill-mode-forwards [animation-delay:400ms]">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/50 transform rotate-2 hover:rotate-0 transition-all duration-700 group backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <img
                                src="Main (2).png"
                                alt="Child learning abacus"
                                className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-12 -right-8 bg-white/90 p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms] z-20 backdrop-blur-sm">
                            <span className="text-4xl">🧠</span>
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-white/90 p-4 rounded-2xl shadow-xl animate-bounce duration-[4000ms] delay-500 z-20 backdrop-blur-sm">
                            <span className="text-4xl">✨</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
