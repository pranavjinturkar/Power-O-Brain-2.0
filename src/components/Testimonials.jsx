import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Testimonials = () => {
    const [headerRef, headerVisible] = useScrollReveal(0.1);

    const testimonials = [
        {
            name: 'Priya Sharma',
            role: 'Mother of Aarav (Age 8)',
            quote: "My son's concentration has improved drastically after joining Power O Brain. He is now much more confident in his math exams and solves problems faster than his peers.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        },
        {
            name: 'Rahul Verma',
            role: 'Father of Vihaan (Age 6)',
            quote: "The interactive way of teaching is what sets them apart. Vihaan actually looks forward to his abacus classes. Highly recommended for brain development.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        },
        {
            name: 'Anita Desai',
            role: 'Mother of Riya (Age 10)',
            quote: "We've seen a significant improvement in Riya's memory retention. The listening exercises really work! Thank you Power O Brain team.",
            rating: 4,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-brand-blue-50 relative">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <h2 className="text-sm font-bold text-brand-blue-600 uppercase tracking-wide mb-2">Testimonials</h2>
                    <h3 className="text-3xl lg:text-4xl font-extrabold font-nunito text-gray-900">
                        What Parents Say <span className="text-brand-yellow-500">About Us</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <TestimonialCard key={idx} testimonial={testimonial} delay={idx * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ testimonial, delay }) => {
    const [ref, isVisible] = useScrollReveal(0.2);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`bg-white rounded-2xl p-8 shadow-lg relative border border-gray-100 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-brand-blue-100">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.896 14.325 15.93 14.937 15.101C15.555 14.276 16.471 13.564 17.683 12.973L18.421 14.619C17.969 14.803 17.585 15.127 17.271 15.584C16.953 16.037 16.797 16.538 16.797 17.098L16.797 21L14.017 21ZM5.017 21L5.017 18C5.017 16.896 5.325 15.93 5.937 15.101C6.555 14.276 7.471 13.564 8.683 12.973L9.421 14.619C8.969 14.803 8.585 15.127 8.271 15.584C7.953 16.037 7.797 16.538 7.797 17.098L7.797 21L5.017 21Z" />
                </svg>
            </div>

            <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-brand-yellow-400 shadow-sm" />
                <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
            </div>

            <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>

            <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
