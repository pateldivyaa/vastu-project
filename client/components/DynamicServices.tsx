'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaSpinner, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { servicesAPI } from '@/lib/api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

interface GroupedServices {
    [category: string]: Service[];
}

const DynamicServices = () => {
    const [groupedServices, setGroupedServices] = useState<GroupedServices>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                console.log('Fetching services from API...');
                const response = await servicesAPI.getCategories();
                console.log('Services response:', response.data);
                setGroupedServices(response.data);
            } catch (err) {
                console.error('Error fetching services:', err);
                setError('Failed to load services');
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const categoryConfig = {
        vastu: { title: 'Vaastu Services', color: 'from-primary-500 to-primary-600' },
        'types-of-vastu': { title: 'Types of Vaastu', color: 'from-blue-500 to-blue-600' },
        astrology: { title: 'Astrology', color: 'from-purple-500 to-purple-600' },
        numerology: { title: 'Numerology', color: 'from-pink-500 to-pink-600' },
        education: { title: 'Education', color: 'from-green-500 to-green-600' },
        awards: { title: 'Awards & Achievements', color: 'from-yellow-500 to-yellow-600' },
        news: { title: 'News', color: 'from-red-500 to-red-600' },
        workshop: { title: 'Workshops', color: 'from-indigo-500 to-indigo-600' },
        seminar: { title: 'Seminars', color: 'from-teal-500 to-teal-600' }
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

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

    if (error) {
        return (
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center">
                        <p className="text-red-600">{error}</p>
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

                {/* Dynamic Service Categories */}
                {Object.entries(groupedServices).map(([category, services], categoryIndex) => {
                    const config = categoryConfig[category as keyof typeof categoryConfig];
                    if (!config || services.length === 0) return null;

                    return (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center mr-4`}>
                                        <span className="text-white text-xl font-bold">{config.title.charAt(0)}</span>
                                    </div>
                                    <h3 className="text-3xl font-playfair font-bold text-gray-900">
                                        {config.title}
                                    </h3>
                                </div>
                                <Link
                                    href={`/services/${category}`}
                                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                                >
                                    View All
                                    <FaArrowRight className="ml-2" />
                                </Link>
                            </div>

                            <div className="relative">
                                <Slider {...sliderSettings}>
                                    {services.map((service, serviceIndex) => (
                                        <div key={service._id} className="px-3">
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className="card overflow-hidden group h-full"
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
                                                </div>

                                                <div className="p-6 flex flex-col h-full">
                                                    <h4 className="text-xl font-playfair font-bold text-gray-900 mb-3 line-clamp-2">
                                                        {service.title}
                                                    </h4>

                                                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                                        {service.description}
                                                    </p>

                                                    {service.features && service.features.length > 0 && (
                                                        <ul className="space-y-1 mb-4">
                                                            {service.features.slice(0, 2).map((feature, featureIndex) => (
                                                                <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                                                                    {feature}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    <div className="mt-auto">
                                                        <Link
                                                            href={`/service/${service.slug}`}
                                                            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                                                        >
                                                            Learn More
                                                            <FaArrowRight className="ml-2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </motion.div>
                    );
                })}

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

export default DynamicServices;
