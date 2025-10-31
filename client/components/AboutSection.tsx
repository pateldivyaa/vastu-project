'use client';

import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaProjectDiagram } from 'react-icons/fa';

const AboutSection = () => {
    const stats = [
        { icon: FaUsers, label: 'Years of Experience', value: '23+', color: 'text-primary-600' },
        { icon: FaAward, label: 'Awards/Honours/Appreciations', value: '151+', color: 'text-gold' },
        { icon: FaProjectDiagram, label: 'Projects completed', value: '122+', color: 'text-green-600' },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                            About <span className="text-gradient">Dr. Talsaniya</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                <strong>Inspirational Personality</strong> | <strong>Biography, Success Story & Interview</strong> published in various newspapers, magazines & portals in India and abroad & it's available on "News" page of this website.
                            </p>
                            <p>
                                <strong>Multiple INDIVIDUAL WORLD RECORDS & Awards Holder</strong> in Vaastu. (<strong>8</strong> Individual WORLD Records, <strong>150+</strong> Awards/Records/Honour/Appreciation Nationally & Internationally)
                            </p>
                        </div>

                        <div className="mt-8">
                            <a
                                href="/about"
                                className="btn-primary text-lg px-8 py-4"
                            >
                                Read More
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-8"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6 bg-gradient-to-br from-primary-50 to-cream rounded-xl shadow-lg"
                            >
                                <stat.icon className={`text-4xl ${stat.color} mx-auto mb-4`} />
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
