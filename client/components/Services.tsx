'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaSpinner } from 'react-icons/fa';

interface Service {
    _id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    features?: string[];
}

interface ServicesProps {
    services: Service[];
    loading: boolean;
}

const Services = ({ services, loading }: ServicesProps) => {
    const serviceCategories = [
        {
            title: 'Vaastu',
            items: ['Industry Vaastu', 'Corporate Vaastu', 'Residential Vaastu', 'Paranormal Affected Vaastu'],
            color: 'from-primary-500 to-primary-600'
        },
        {
            title: 'Astrology & Numerology',
            items: ['Corporate Astrology', 'Muhurat', 'Numerology'],
            color: 'from-gold to-yellow-600'
        },
        {
            title: 'Education',
            items: ['Astrology Education', 'Vaastu Education', 'What Students says'],
            color: 'from-green-500 to-green-600'
        }
    ];

    if (loading) {
        return (
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center">
                        <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                        <p className="text-gray-600">Loading services...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive Vastu, Astrology, and Numerology solutions for all your needs
                    </p>
                </motion.div>

                {/* Service Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {serviceCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="card p-8 text-center"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                                <span className="text-white text-2xl font-bold">{category.title.charAt(0)}</span>
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                {category.title}
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-center justify-center">
                                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Dynamic Services from API */}
                {services.length > 0 && (
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12"
                        >
                            Featured Services
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="card overflow-hidden group"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={service.image || '/api/placeholder/400/300'}
                                            alt={service.title}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                                                {service.category}
                                            </span>
                                        </div>

                                        <h4 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                                            {service.title}
                                        </h4>

                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {service.description}
                                        </p>

                                        {service.features && service.features.length > 0 && (
                                            <ul className="space-y-1 mb-4">
                                                {service.features.slice(0, 3).map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <Link
                                            href={`/services/${service._id}`}
                                            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                                        >
                                            Learn More
                                            <FaArrowRight className="ml-2" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/services"
                        className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                    >
                        View All Services
                        <FaArrowRight className="ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
