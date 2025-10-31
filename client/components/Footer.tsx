import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-playfair font-bold text-primary-400 mb-4">
                            Vastu Science World
                        </h3>
                        <p className="text-gray-300 mb-4">
                            India's First Scientific Paranormal Vastu Consultant. Providing expert guidance in Vastu, Astrology, and Numerology for residential, corporate, and industrial properties.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                                <FaFacebook className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                                <FaInstagram className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                                <FaYoutube className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services/vastu" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                                    Vastu Consultation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/astrology" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                                    Astrology
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/numerology" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                                    Numerology
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/education" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
                                    Education
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <FaPhone className="text-primary-400 mr-3" />
                                <span className="text-gray-300">+91 70692 00777</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-primary-400 mr-3" />
                                <span className="text-gray-300">vastuscienceworld@gmail.com</span>
                            </div>
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-primary-400 mr-3 mt-1" />
                                <span className="text-gray-300">
                                    India's First Scientific Paranormal Vastu Consultant
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Vastu Science World. All Rights Reserved.
                        </p>
                        <p className="text-gray-400 text-sm mt-2 md:mt-0">
                            Web Design & Developed by: Web Designer
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
