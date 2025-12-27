import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const WhyChooseUs = () => {
    const [headerRef, headerVisible] = useScrollReveal(0.1);

    const features = [
        {
            title: 'Certified Trainers',
            desc: 'Expertly trained and certified professionals dedicated to child development.',
            icon: (
                <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            bg: 'bg-blue-500'
        },
        {
            title: 'Fun & Interactive',
            desc: 'Gamified learning approach that keeps children engaged and eager to learn.',
            icon: (
                <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            bg: 'bg-yellow-500'
        },
        {
            title: 'Proven Results',
            desc: 'Track record of students excelling in academics and Olympiads.',
            icon: (
                <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            bg: 'bg-green-500'
        },
        {
            title: 'Personalized Attention',
            desc: 'Small batch sizes ensuring every child gets individual guidance.',
            icon: (
                <svg className="w-8 h-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            bg: 'bg-purple-500'
        }
    ];

    return (
        <section id="why-us" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={headerRef}
                    className={`mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-sm font-bold text-brand-blue-600 uppercase tracking-wide mb-2">Why Choose Us</h2>
                    <h3 className="text-3xl lg:text-4xl font-extrabold font-nunito text-gray-900 leading-tight md:max-w-lg">
                        We Don't Just Teach Math, We <span className="text-brand-yellow-500">Train Brains</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx} feature={feature} delay={idx * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ feature, delay }) => {
    const [ref, isVisible] = useScrollReveal(0.2);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            // Removing flex and using block/flow-root to debug potential issues, but flex is generally fine. 
            // Switched to flex-col to match previous design.
            className={`flex flex-col items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:bg-white group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className={`p-4 rounded-xl ${feature.bg} shadow-lg mb-6 relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {feature.icon}
            </div>
            <h4 className="text-xl font-bold font-nunito text-gray-900 mb-3 group-hover:text-brand-blue-600 transition-colors">{feature.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
            </p>
        </div>
    )
}

export default WhyChooseUs;
