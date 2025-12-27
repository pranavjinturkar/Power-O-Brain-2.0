import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
    const [ref, isVisible] = useScrollReveal(0.1);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        phone: '',
        city: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert("Thank you for enrolling! We will contact you soon.");
    };

    const InputField = ({ label, type, name, value, placeholder, required = true }) => (
        <div className="relative group">
            <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-1 transition-colors group-hover:text-brand-blue-600">{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                required={required}
                value={value}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue-500 focus:ring-4 focus:ring-brand-blue-100 transition-all duration-300 outline-none"
                placeholder={placeholder}
            />
        </div>
    );

    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Contact Content & Map */}
                    <div
                        ref={ref}
                        className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                    >
                        <h2 className="text-sm font-bold text-brand-yellow-400 uppercase tracking-wide mb-2">Join Us Today</h2>
                        <h3 className="text-4xl lg:text-5xl font-extrabold font-nunito text-white mb-6">
                            Start Your Child’s <br /> Journey to <span className="text-brand-yellow-400">Excellence</span>
                        </h3>
                        <p className="text-brand-blue-100 mb-10 leading-relaxed text-lg">
                            Ready to give your child the advantage of mental sharpness? Fill out the form or reach out to us directly. We are happy to answer any questions!
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start group">
                                <div className="bg-brand-blue-800 p-3 rounded-xl mr-5 group-hover:bg-brand-blue-700 transition-colors">
                                    <svg className="w-6 h-6 text-brand-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-brand-blue-300 mb-1">Call Us anytime</p>
                                    <p className="font-bold text-xl">+91 91588 45508</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-brand-blue-800 p-3 rounded-xl mr-5 group-hover:bg-brand-blue-700 transition-colors">
                                    <svg className="w-6 h-6 text-brand-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-brand-blue-300 mb-1">Email Support</p>
                                    <p className="font-bold text-xl">info@powerobrain.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-gray-300 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.0317608242045!2d77.01877418597415!3d20.70506508602333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72e04d095f851%3A0xa7b142fe80a855ce!2sA%2F5%2F2108%2C%20Gokul%20Colony%20Rd%2C%20Dwarka%20Nagri%2C%20Akola%2C%20Maharashtra%20444001!5e0!3m2!1sen!2sin!4v1766817959290!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>

                    {/* Enroll Form */}
                    <div className="w-full lg:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl text-gray-800 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-yellow-400 to-brand-blue-500"></div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Enroll for a Free Demo</h3>

                            <div className="space-y-6">
                                <InputField label="Name of the Student" type="text" name="name" value={formData.name} placeholder="Enter full name" />

                                <div className="grid grid-cols-2 gap-6">
                                    <InputField label="Child's Age" type="number" name="age" value={formData.age} placeholder="Eg: 8" />
                                    <InputField label="Phone Number" type="tel" name="phone" value={formData.phone} placeholder="Mobile number" />
                                </div>

                                <InputField label="City" type="text" name="city" value={formData.city} placeholder="Your City" />

                                <div className="relative group">
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1 transition-colors group-hover:text-brand-blue-600">Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue-500 focus:ring-4 focus:ring-brand-blue-100 transition-all duration-300 outline-none"
                                        placeholder="Any specific query?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand-yellow-400 hover:bg-brand-yellow-500 text-brand-blue-900 font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-brand-yellow-200 text-lg flex items-center justify-center group"
                                >
                                    Enroll Now
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
