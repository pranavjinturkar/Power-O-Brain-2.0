import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-blue-900 text-white pt-16 pb-8 border-t border-brand-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold font-nunito text-white mb-4">Power O Brain</h2>
                        <p className="text-brand-blue-200 text-sm leading-relaxed mb-6">
                            Empowering the next generation with the skills of Mental Math and Abacus mastery. Unlocking potential, one child at a time.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-brand-blue-200 hover:text-brand-yellow-400 transition-colors">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                            </a>
                            <a href="#" className="text-brand-blue-200 hover:text-brand-yellow-400 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.047-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.067-.06-1.407-.06-4.123v-.08c0-2.643.013-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm1.472 5.333c1.454.084 1.773.308 1.993.473.344.257.59.57.773.978.188.423.275.926.195 1.558-.08.636-.33 1.15-.71 1.543-.382.393-.865.656-1.465.753-.596.095-1.173.023-1.638-.204a3.684 3.684 0 01-1.336-1.144c-.31-.448-.46-1.01.29-1.57.382-.394.86-.656 1.46-.754.494-.078.962-.05 1.398.067zm-5.334.406c1.176 0 2.13.954 2.13 2.13 0 1.176-.954 2.13-2.13 2.13-1.176 0-2.13-.954-2.13-2.13 0-1.176.954-2.13 2.13-2.13z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-nunito text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-brand-blue-200">
                            <li><a href="#about" className="hover:text-brand-yellow-400 transition-colors">About Us</a></li>
                            <li><a href="#programs" className="hover:text-brand-yellow-400 transition-colors">Our Programs</a></li>
                            <li><a href="#testimonials" className="hover:text-brand-yellow-400 transition-colors">Success Stories</a></li>
                            <li><a href="#contact" className="hover:text-brand-yellow-400 transition-colors">Enroll Your Child</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold font-nunito text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-brand-blue-200">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 text-brand-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Janakpuri, New Delhi, Delhi 110058</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-brand-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-brand-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@powerobrain.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h3 className="text-lg font-bold font-nunito text-white mb-6">Our Centers</h3>
                        <ul className="space-y-3 text-sm text-brand-blue-200">
                            <li>Janakpuri</li>
                            <li>Dwarka</li>
                            <li>Vikaspuri</li>
                            <li>Uttam Nagar</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-brand-blue-300 text-sm">
                        © 2025 Power O Brain Abacus Academy. All Rights Reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-brand-blue-300">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
