'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaSpinner } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { servicesAPI } from '@/lib/api';

interface Service {
    _id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    category: string;
}

const FeaturedServices = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const response = await servicesAPI.getAll();
                // Get first 4 services or all if less than 4
                setServices(response.data.slice(0, 4));
            } catch (err) {
                console.error('Error fetching services:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const getCategoryColor = (category: string) => {
        const colors = {
            vastu: 'from-purple-500 to-indigo-600',
            astrology: 'from-amber-500 to-orange-500',
            numerology: 'from-blue-500 to-cyan-500',
            education: 'from-emerald-500 to-teal-500',
            default: 'from-gray-500 to-gray-700'
        };
        return colors[category as keyof typeof colors] || colors.default;
    };

    if (loading) {
        return (
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                        <p className="text-gray-600">Loading featured services...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our specialized services designed to bring harmony and positivity to your life and space.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className={`h-2 ${getCategoryColor(service.category)}`}></div>
                            <div className="p-6">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)} text-white flex items-center justify-center text-xl mb-4`}>
                                    {service.category === 'vastu' && '🏠'}
                                    {service.category === 'astrology' && '✨'}
                                    {service.category === 'numerology' && '🔢'}
                                    {service.category === 'education' && '🎓'}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {service.description}
                                </p>
                                <Link 
                                    href={`/service/${service.slug}`}
                                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                                >
                                    Learn more <FaArrowRight className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
