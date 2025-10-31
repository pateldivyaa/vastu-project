'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCompass, FaAtom, FaGraduationCap, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
    const serviceCategories = [
        {
            icon: FaCompass,
            title: 'VAASTU',
            items: ['Industry Vaastu', 'Corporate Vaastu', 'Residential Vaastu', 'Paranormal Affected Vaastu'],
            color: 'from-red-500 to-red-600'
        },
        {
            icon: FaAtom,
            title: 'ASTROLOGY NUMEROLOGY',
            items: ['Corporate Astrology', 'Muhurat', 'Numerology'],
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: FaGraduationCap,
            title: 'EDUCATION',
            items: ['Astrology Education', 'Vaastu Education', 'What Students says'],
            color: 'from-green-500 to-green-600'
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section with Modern Design */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background with City/Industrial Scene */}
                <div className="absolute inset-0 z-0">
                    {/* Base gradient background */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>

                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                    {/* Animated background elements */}
                    <div className="absolute inset-0">
                        {/* City skyline silhouette */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-800 to-transparent"></div>

                        {/* Industrial elements */}
                        <div className="absolute bottom-0 right-0 w-1/3 h-40 bg-gradient-to-t from-gray-700 to-transparent"></div>

                        {/* Floating particles */}
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -20, 0],
                                    opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors duration-300">
                    <FaChevronLeft className="text-2xl" />
                </button>
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white/70 hover:text-white transition-colors duration-300">
                    <FaChevronRight className="text-2xl" />
                </button>

                {/* Content */}
                <div className="relative z-10 container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                        >
                            <span className="block text-2xl md:text-3xl lg:text-4xl mb-2 text-red-400">
                                INDIA'S FIRST SCIENTIFIC PARANORMAL
                            </span>
                            <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 text-white">
                                VASTU CONSULTANT
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-8"
                        >
                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium mb-4">
                                Vaastu • Astrology • Paranormal Vaastu
                            </p>
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-400">
                                Industrial • Corporate • Residential Vaastu
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mb-12 max-w-4xl mx-auto"
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <p className="text-lg md:text-xl text-white font-semibold mb-2">
                                    Satisfied Solution – Scientific Solution
                                </p>
                                <p className="text-base md:text-lg text-gray-300">
                                    Scientific • Ritual • Spiritual
                                </p>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                        >
                            <Link
                                href="/contact"
                                className="group bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-500/25"
                            >
                                <span className="flex items-center">
                                    Get Consultation
                                    <motion.span
                                        className="ml-2"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        →
                                    </motion.span>
                                </span>
                            </Link>
                            <Link
                                href="/services"
                                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Our Services
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Service Categories Section - Red Background */}
            <section className="relative py-20 lg:-mt-32 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                </div>

                <div className="relative z-10 container-custom">
                    {/* Main red box container */}
                    <div className="bg-red-600 rounded-3xl p-8 mx-auto max-w-6xl shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            {serviceCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-center text-white group hover:transform hover:scale-105 transition-all duration-300"
                                >
                                    {/* Vertical divider line */}
                                    {index < serviceCategories.length - 1 && (
                                        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-white/30"></div>
                                    )}

                                    <div className="p-6">
                                        <div className="mb-6">
                                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                                                <category.icon className="text-2xl" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                                        </div>

                                        <div className="border-t border-white/30 mb-6"></div>

                                        <ul className="space-y-3 text-sm">
                                            {category.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="hover:text-red-200 transition-colors duration-300 flex items-center justify-center">
                                                    <span className="w-2 h-2 bg-white/50 rounded-full mr-3"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-gray-600">
                            Ready to transform your life? Contact us today!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                    <FaPhone className="text-red-600 text-2xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Call Us Now</p>
                                    <p className="font-bold text-gray-900 text-lg">+91 70692 00777</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                    <FaEnvelope className="text-red-600 text-2xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Send a Message</p>
                                    <p className="font-bold text-gray-900 text-lg">vastuscienceworld@gmail.com</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                    <FaMapMarkerAlt className="text-red-600 text-2xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Location</p>
                                    <p className="font-bold text-gray-900 text-lg">India</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;