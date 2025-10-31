'use client';

import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaProjectDiagram, FaStar } from 'react-icons/fa';

const About = () => {
    const stats = [
        { icon: FaUsers, label: 'Years of Experience', value: '15+', color: 'text-primary-600' },
        { icon: FaAward, label: 'Awards/Honours/Appreciations', value: '150+', color: 'text-gold' },
        { icon: FaProjectDiagram, label: 'Projects completed', value: '1000+', color: 'text-primary-500' },
        { icon: FaStar, label: 'Client Satisfaction', value: '100%', color: 'text-green-500' },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                        About <span className="text-gradient">Dr. Talsaniya</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Inspirational Personality | Biography, Success Story & Interview published in various newspapers, magazines & portals in India and abroad.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <h3 className="text-3xl font-playfair font-bold text-gray-900">
                                Multiple INDIVIDUAL WORLD RECORDS & Awards Holder
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                <strong>8 Individual WORLD Records</strong>, <strong>150+ Awards/Records/Honour/Appreciation</strong> Nationally & Internationally
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We provide Vaastu & Numerology Solutions for various challenges including:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                                    Financial Issues
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                                    Branding Issues
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                                    Low Turnover
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                                    Manpower Rotation
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                                    Social Problems
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                                    Business Partnership Issues
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6 bg-gradient-to-br from-primary-50 to-cream rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <stat.icon className={`text-4xl ${stat.color} mx-auto mb-4`} />
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-playfair font-bold mb-4">
                            Ready to Transform Your Life?
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            Get expert Vastu consultation and experience positive changes in your life
                        </p>
                        <motion.a
                            href="/contact"
                            className="inline-block bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us Now
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
