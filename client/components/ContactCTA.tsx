'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const ContactCTA = () => {
    const contactInfo = [
        {
            icon: FaPhone,
            title: 'Call Us Now',
            value: '+91 70692 00777',
            href: 'tel:+917069200777'
        },
        {
            icon: FaEnvelope,
            title: 'Send a Message',
            value: 'vastuscienceworld@gmail.com',
            href: 'mailto:vastuscienceworld@gmail.com'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            value: 'India',
            href: '#'
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                        Ready to Transform Your Life?
                    </h2>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">
                        Get expert Vastu consultation and experience positive changes in your life.
                        Contact us today for a personalized consultation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-playfair font-bold mb-6">
                            Get in Touch
                        </h3>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4 group-hover:bg-opacity-30 transition-all duration-300">
                                        <info.icon className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-sm opacity-80">{info.title}</p>
                                        <p className="font-semibold text-lg">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="bg-white bg-opacity-10 rounded-lg p-6">
                            <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                    India's First Scientific Paranormal Vastu Consultant
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                    8 Individual World Records
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                    150+ Awards & Recognitions
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                    Scientific & Spiritual Solutions
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-2xl font-playfair font-bold mb-6">
                                Book Your Consultation
                            </h3>
                            <p className="text-lg opacity-90 mb-8">
                                Get personalized Vastu guidance for your home, office, or business
                            </p>

                            <div className="space-y-4">
                                <Link
                                    href="/contact"
                                    className="block w-full bg-white text-primary-600 font-semibold py-4 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                                >
                                    Contact Us Now
                                </Link>

                                <Link
                                    href="/services"
                                    className="block w-full border-2 border-white text-white font-semibold py-4 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    View Our Services
                                </Link>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white border-opacity-20">
                                <p className="text-sm opacity-80">
                                    Trusted by thousands of satisfied clients across India and abroad
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-20 right-10 w-20 h-20 bg-white bg-opacity-10 rounded-full"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -5, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-20 left-10 w-16 h-16 bg-white bg-opacity-10 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
