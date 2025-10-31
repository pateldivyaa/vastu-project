'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSpinner, FaCalendarAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaStar } from 'react-icons/fa';
import { servicesAPI } from '@/lib/api';

interface Service {
    _id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string;
    category: string;
    features: string[];
    price: number;
    createdAt: string;
}

const VaastuPage = () => {
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                setLoading(true);
                const response = await servicesAPI.getBySlug('vastu');
                setService(response.data);
            } catch (err) {
                setError('Failed to load service information');
                console.error('Error fetching service:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchService();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-red-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading service information...</p>
                </div>
            </div>
        );
    }

    if (error || !service) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <p className="text-gray-600">The requested service could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20 md:py-28 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
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
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Content */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="prose prose-lg max-w-none"
                        >
                            <div
                                className="text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: service.content }}
                            />
                        </motion.div>

                        {/* Features */}
                        {service.features && service.features.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="mt-16"
                            >
                                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8 text-center">
                                    Service Features
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                                        >
                                            <FaCheckCircle className="text-red-600 text-xl mt-1 flex-shrink-0" />
                                            <p className="text-gray-700">{feature}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
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
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Get expert Vastu consultation from India's First Scientific Paranormal Vastu Consultant
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

export default VaastuPage;
