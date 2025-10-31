'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { servicesAPI } from '@/lib/api';
import { FaArrowLeft, FaSpinner, FaCheck, FaStar, FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

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
    createdAt: string;
    updatedAt: string;
}

const ServiceDetail = () => {
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();

    useEffect(() => {
        const fetchService = async () => {
            try {
                setLoading(true);
                const response = await servicesAPI.getBySlug(params.slug as string);
                setService(response.data);
            } catch (err) {
                setError('Service not found');
                console.error('Error fetching service:', err);
            } finally {
                setLoading(false);
            }
        };

        if (params.slug) {
            fetchService();
        }
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading service...</p>
                </div>
            </div>
        );
    }

    if (error || !service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
                    <Link
                        href="/services"
                        className="btn-primary inline-flex items-center"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors duration-300"
                        >
                            <FaArrowLeft className="mr-2" />
                            Back to Services
                        </Link>

                        <div className="max-w-4xl mx-auto">
                            <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
                                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                            </span>

                            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                                {service.title}
                            </h1>

                            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Content */}
            <section className="py-16">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="card p-8 mb-8"
                            >
                                <div className="relative overflow-hidden rounded-lg mb-8">
                                    <Image
                                        src={service.image || '/api/placeholder/800/400'}
                                        alt={service.title}
                                        width={800}
                                        height={400}
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <div dangerouslySetInnerHTML={{ __html: service.content }} />
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {/* Service Info */}
                                <div className="card p-6">
                                    <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                        Service Information
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-sm text-gray-600">Category</span>
                                            <p className="font-semibold text-gray-900">
                                                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                                            </p>
                                        </div>

                                        {service.price && (
                                            <div>
                                                <span className="text-sm text-gray-600">Price</span>
                                                <p className="font-semibold text-primary-600 text-xl">
                                                    ₹{service.price.toLocaleString()}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Features */}
                                {service.features && service.features.length > 0 && (
                                    <div className="card p-6">
                                        <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                            Key Features
                                        </h3>

                                        <ul className="space-y-3">
                                            {service.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Contact CTA */}
                                <div className="card p-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                                    <h3 className="text-2xl font-playfair font-bold mb-4">
                                        Ready to Get Started?
                                    </h3>

                                    <p className="text-primary-100 mb-6">
                                        Contact us today to book your consultation and experience the benefits of our services.
                                    </p>

                                    <div className="space-y-3">
                                        <Link
                                            href="/contact"
                                            className="block w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                                        >
                                            Contact Us Now
                                        </Link>

                                        <div className="flex items-center justify-center space-x-4 text-sm">
                                            <a
                                                href="tel:+917069200777"
                                                className="flex items-center hover:text-primary-200 transition-colors duration-300"
                                            >
                                                <FaPhone className="mr-2" />
                                                Call Us
                                            </a>
                                            <a
                                                href="mailto:vastuscienceworld@gmail.com"
                                                className="flex items-center hover:text-primary-200 transition-colors duration-300"
                                            >
                                                <FaEnvelope className="mr-2" />
                                                Email Us
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Indicators */}
                                <div className="card p-6">
                                    <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                                        Why Choose Us?
                                    </h3>

                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <FaStar className="text-yellow-500 mr-3" />
                                            <span className="text-sm text-gray-700">8 Individual World Records</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaStar className="text-yellow-500 mr-3" />
                                            <span className="text-sm text-gray-700">150+ Awards & Recognitions</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaStar className="text-yellow-500 mr-3" />
                                            <span className="text-sm text-gray-700">Scientific & Spiritual Solutions</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
