'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ProblemsSection = () => {
    const problems = [
        'Financial Issues',
        'Branding Issues',
        'Low Turnover',
        'Manpower Rotation',
        'Social Problems',
        'Business Partnership Issues'
    ];

    return (
        <section className="section-padding bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src="https://srivastusolutions.com.au/wp-content/uploads/2024/09/astrology_planets.jpg" alt="Problems Background" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90"></div>
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Content */}
            <div className="relative z-10 container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-playfair font-bold mb-6">
                        We provide Vaastu & Numerology Solutions
                    </h2>

                    <h3 className="text-3xl font-playfair font-bold mb-12">
                        Are you facing a
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300"
                        >
                            <div className="text-lg font-medium">{problem}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        href="/contact"
                        className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemsSection;
