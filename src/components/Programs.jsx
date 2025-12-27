import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const ProgramCard = ({ title, description, icon, color, delay }) => {
    const [ref, isVisible] = useScrollReveal(0.2);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-50 flex flex-col h-full group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6 text-white text-3xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold font-nunito text-gray-900 mb-3 group-hover:text-brand-blue-600 transition-colors">{title}</h3>
            <p className="text-gray-600 leading-relaxed flex-grow text-sm">{description}</p>
            <a href="#contact" className="mt-6 text-brand-blue-600 font-semibold hover:text-brand-blue-700 inline-flex items-center group/link">
                Learn more
                <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        </div>
    );
};

const Programs = () => {
    const [headerRef, headerVisible] = useScrollReveal(0.1);

    const programs = [
        {
            title: 'Basic Abacus',
            description: 'The foundation of mental calculation. Kids learn to visualize numbers and perform operations using the abacus tool.',
            icon: '🧮',
            color: 'bg-brand-blue-600',
        },
        {
            title: 'Mental Math',
            description: 'Advanced techniques to solve complex arithmetic problems instantly without any external tools.',
            icon: '🧠',
            color: 'bg-brand-yellow-500',
        },
        {
            title: 'Brain Gym',
            description: 'Physical exercises coordinated with mental tasks to simulate left and right brain synchronization.',
            icon: '💪',
            color: 'bg-green-500',
        },
        {
            title: 'Concentration Boost',
            description: 'Ancient Indian mathematical sutras specially designed for teens to crack competitive exams with speed.',
            icon: '📐',
            color: 'bg-purple-600',
        },
    ];

    return (
        <section id="programs" className="py-24 bg-brand-blue-50 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    ref={headerRef}
                    className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-sm font-bold text-brand-blue-600 uppercase tracking-wide mb-2">Our Programs</h2>
                    <h3 className="text-3xl lg:text-4xl font-extrabold font-nunito text-gray-900 mb-4">
                        Designed for <span className="text-brand-yellow-500">Holistic Growth</span>
                    </h3>
                    <p className="text-lg text-gray-600">
                        Our scientifically designed curriculum ensures that your child gets the best brain development training suited for their age.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <ProgramCard key={index} {...program} delay={index * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
