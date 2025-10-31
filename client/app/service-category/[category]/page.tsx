'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowRight, FaSpinner, FaPhone, FaEnvelope, FaStar, FaCheck } from 'react-icons/fa';
import { servicesAPI } from '@/lib/api';

interface Service {
    _id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string;
    category: string;
    features?: string[];
    price?: number;
}

const CategoryPage = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const category = params.category as string;

    const categoryConfig = {
        vastu: {
            title: 'Vastu Consultation Services',
            description: 'Comprehensive Vastu consultation services for homes, offices, and businesses',
            color: 'from-primary-500 to-primary-600',
            icon: '🏠'
        },
        astrology: {
            title: 'Astrology Services',
            description: 'Professional astrology services including birth chart analysis and predictions',
            color: 'from-purple-500 to-purple-600',
            icon: '⭐'
        },
        numerology: {
            title: 'Numerology Services',
            description: 'Numerological analysis for names, businesses, and life path guidance',
            color: 'from-pink-500 to-pink-600',
            icon: '🔢'
        },
        education: {
            title: 'Education Services',
            description: 'Educational courses and workshops on Vastu, Astrology, and Numerology',
            color: 'from-green-500 to-green-600',
            icon: '📚'
        }
    };

    const config = categoryConfig[category as keyof typeof categoryConfig];

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                console.log('Fetching services for category:', category);
                const response = await servicesAPI.getByCategory(category);
                console.log('Services response:', response.data);
                setServices(response.data);
            } catch (err) {
                console.error('Error fetching services:', err);
                setError('Failed to load services');
            } finally {
                setLoading(false);
            }
        };

        if (category) {
            fetchServices();
        }
    }, [category]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading services...</p>
                </div>
            </div>
        );
    }

    if (error || !config) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
                    <p className="text-gray-600 mb-8">The requested category does not exist.</p>
                    <Link
                        href="/services"
                        className="btn-primary inline-flex items-center"
                    >
                        <FaArrowRight className="mr-2" />
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="flex items-center justify-center mb-6">
                            {/* <div className={`w-20 h-20 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center mr-4`}>
                                <span className="text-white text-3xl">{config.icon}</span>
                            </div> */}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                            {config.title}
                        </h1>

                        <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
                            {config.description}
                        </p>

                        <div className="flex items-center justify-center space-x-8 text-sm">
                            <div className="flex items-center">
                                <FaStar className="text-yellow-400 mr-2" />
                                <span>Expert Consultation</span>
                            </div>
                            <div className="flex items-center">
                                <FaStar className="text-yellow-400 mr-2" />
                                <span>Proven Results</span>
                            </div>
                            <div className="flex items-center">
                                <FaStar className="text-yellow-400 mr-2" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <div className="container-custom">
                    {services.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-6xl mb-4">📋</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                            <p className="text-gray-600 mb-6">No services are currently available for this category.</p>
                            <Link
                                href="/services"
                                className="btn-primary"
                            >
                                View All Services
                            </Link>
                        </div>
                    ) : (
                        <>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="text-center mb-12"
                            >
                                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
                                    Available Services
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Choose from our comprehensive range of {config.title.toLowerCase()}
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service._id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={service.image || '/api/placeholder/400/300'}
                                                alt={service.title}
                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 bg-gradient-to-r ${config.color} text-white text-sm font-medium rounded-full`}>
                                                    {config.title}
                                                </span>
                                            </div>
                                            {service.price && service.price > 0 && (
                                                <div className="absolute top-4 right-4">
                                                    <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-900 text-sm font-medium rounded-full">
                                                        ₹{service.price.toLocaleString()}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3 line-clamp-2">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {service.description}
                                            </p>

                                            {service.features && service.features.length > 0 && (
                                                <ul className="space-y-2 mb-4">
                                                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                            <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <div className="flex items-center justify-between">
                                                <Link
                                                    href={`/service/${service.slug}`}
                                                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                                                >
                                                    Learn More
                                                    <FaArrowRight className="ml-2" />
                                                </Link>

                                                {service.price && service.price > 0 && (
                                                    <span className="text-lg font-bold text-primary-600">
                                                        ₹{service.price.toLocaleString()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Contact us today for a personalized consultation and experience the benefits of our expert {config.title.toLowerCase()}.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                            >
                                <FaPhone className="mr-2" />
                                Contact Us Now
                            </Link>

                            <Link
                                href="/services"
                                className="border-2 border-white text-white font-semibold py-4 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300 inline-flex items-center"
                            >
                                <FaArrowRight className="mr-2" />
                                View All Services
                            </Link>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white border-opacity-20">
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
                                <div className="flex items-center">
                                    <FaPhone className="mr-2" />
                                    <span>+91 70692 00777</span>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope className="mr-2" />
                                    <span>vastuscienceworld@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CategoryPage;
