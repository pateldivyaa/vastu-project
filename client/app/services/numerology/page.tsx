'use client';

import { motion } from 'framer-motion';
import { FaCalculator, FaUser, FaHome, FaBriefcase, FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaStar, FaHashtag, FaCalendarAlt, FaGem, FaLightbulb } from 'react-icons/fa';

const NumerologyPage = () => {
    const numerologyServices = [
        {
            icon: FaUser,
            title: "Personal Numerology Analysis",
            description: "Discover your life path number, destiny number, and soul urge number for deep personal insights.",
            features: ["Life path number calculation", "Destiny number analysis", "Soul urge number", "Personality insights"]
        },
        {
            icon: FaHome,
            title: "Name Numerology",
            description: "Analyze the numerological significance of names and their impact on your life and destiny.",
            features: ["Name analysis", "Name correction suggestions", "Business name numerology", "Baby name selection"]
        },
        {
            icon: FaCalendarAlt,
            title: "Date & Time Numerology",
            description: "Find the most auspicious dates and times for important events using numerological calculations.",
            features: ["Wedding date selection", "Business launch timing", "Travel dates", "Important decisions timing"]
        },
        {
            icon: FaBriefcase,
            title: "Business Numerology",
            description: "Optimize your business success through numerological analysis of business names and dates.",
            features: ["Business name analysis", "Launch date selection", "Partnership compatibility", "Success strategies"]
        }
    ];

    const benefits = [
        {
            icon: FaStar,
            title: "Self-Discovery",
            description: "Gain deep insights into your personality, strengths, and life purpose through numbers."
        },
        {
            icon: FaLightbulb,
            title: "Life Guidance",
            description: "Receive clear direction and guidance for important life decisions and challenges."
        },
        {
            icon: FaHeart,
            title: "Relationship Harmony",
            description: "Understand relationship compatibility and improve connections through numerological insights."
        },
        {
            icon: FaGem,
            title: "Lucky Numbers",
            description: "Discover your lucky numbers and how to use them for success and prosperity."
        }
    ];

    const processSteps = [
        {
            icon: FaCalculator,
            title: "Data Collection",
            description: "Provide your birth date, full name, and other relevant information for accurate calculations."
        },
        {
            icon: FaHashtag,
            title: "Number Calculations",
            description: "Calculate all relevant numerological numbers including life path, destiny, and soul urge numbers."
        },
        {
            icon: FaStar,
            title: "Analysis & Interpretation",
            description: "Comprehensive analysis and interpretation of your numerological profile with personalized insights."
        },
        {
            icon: FaLightbulb,
            title: "Guidance & Recommendations",
            description: "Receive practical guidance and recommendations based on your numerological analysis."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Matching About/Membership/Contact Style */}
            <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
                {/* Background Elements - Similar to original */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-700/20 to-red-600/20"></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>

                <div className="relative z-10 container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
                            Numerology Services
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                            Unlock the power of numbers and discover the hidden meanings that shape your life with our expert numerology consultation services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Our Numerology Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive numerology services to help you understand the power of numbers in your life
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {numerologyServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <service.icon className="text-white text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                    <FaCheckCircle className="text-red-600 mr-2 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-red-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Benefits of Numerology Consultation
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Experience the transformative power of numerological wisdom in your life
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <benefit.icon className="text-white text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Our Numerology Consultation Process
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A systematic approach to provide you with accurate and meaningful numerological insights
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <step.icon className="text-white text-2xl" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-20 bg-red-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8">
                            Unlock Your Numerological Code
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Discover the power of numbers in your life and unlock your true potential with our expert numerology guidance.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                                    <FaPhone className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-lg font-semibold text-red-600">+91 70692 00777</p>
                                <p className="text-sm text-gray-600">Available 24/7</p>
                            </div>

                            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                                    <FaEnvelope className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-lg font-semibold text-red-600">vastuscienceworld@gmail.com</p>
                                <p className="text-sm text-gray-600">We respond within 24 hours</p>
                            </div>

                            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                                    <FaMapMarkerAlt className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                                <p className="text-lg font-semibold text-red-600">Ahmedabad, India</p>
                                <p className="text-sm text-gray-600">Serving worldwide</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default NumerologyPage;
