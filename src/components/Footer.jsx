import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 px-6 lg:px-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-12">

                {/* Brand */}
                <div>
                    <h2 className="text-white text-2xl font-bold flex items-center gap-2 mb-4">
                        <span className="text-blue-500 text-3xl">⚡</span> Estate
                    </h2>
                    <p className="text-sm leading-relaxed">Lorem Ipsum is dummy text for printing.</p>
                    <div className="flex gap-4 mt-6">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                    <ul className="space-y-3 text-sm">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
                    <ul className="space-y-3 text-sm">
                        <li>Blog</li>
                        <li>Support</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Subscribe</h3>
                    <form className="flex flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 w-full"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            
            
            
        </footer>
    );
};

export default Footer;
