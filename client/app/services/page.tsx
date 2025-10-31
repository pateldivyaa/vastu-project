'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaSpinner, FaSearch, FaFilter } from 'react-icons/fa';
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

interface GroupedServices {
    [category: string]: Service[];
}

const ServicesPage = () => {
    const [groupedServices, setGroupedServices] = useState<GroupedServices>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const response = await servicesAPI.getCategories();
                setGroupedServices(response.data);
            } catch (err) {
                setError('Failed to load services');
                console.error('Error fetching services:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const categoryConfig = {
        vastu: { title: 'Vaastu Services', color: 'from-primary-500 to-primary-600', icon: '🏠' },
        'types-of-vastu': { title: 'Types of Vaastu', color: 'from-blue-500 to-blue-600', icon: '🏢' },
        astrology: { title: 'Astrology', color: 'from-purple-500 to-purple-600', icon: '⭐' },
        numerology: { title: 'Numerology', color: 'from-pink-500 to-pink-600', icon: '🔢' },
        education: { title: 'Education', color: 'from-green-500 to-green-600', icon: '📚' },
        awards: { title: 'Awards & Achievements', color: 'from-yellow-500 to-yellow-600', icon: '🏆' },
        news: { title: 'News', color: 'from-red-500 to-red-600', icon: '📰' },
        workshop: { title: 'Workshops', color: 'from-indigo-500 to-indigo-600', icon: '🔧' },
        seminar: { title: 'Seminars', color: 'from-teal-500 to-teal-600', icon: '🎓' }
    };

    const categories = Object.keys(categoryConfig);

    const filteredServices = Object.entries(groupedServices).filter(([category, services]) => {
        const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
        const matchesSearch = services.some(service =>
            service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return matchesCategory && matchesSearch;
    });

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

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Services</h1>
                    <p className="text-gray-600 mb-8">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="btn-primary"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

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
                            Our Services
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                            Comprehensive Vastu, Astrology, and Numerology solutions for all your needs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 bg-white border-b">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex-1 max-w-md">
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <FaFilter className="text-gray-600" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            >
                                <option value="all">All Categories</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {categoryConfig[category as keyof typeof categoryConfig].title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    {filteredServices.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {filteredServices.map(([category, services], categoryIndex) => {
                                const config = categoryConfig[category as keyof typeof categoryConfig];
                                if (!config || services.length === 0) return null;

                                return (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center">
                                                <div className={`w-16 h-16 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center mr-4`}>
                                                    <span className="text-white text-2xl">{config.icon}</span>
                                                </div>
                                                <div>
                                                    <h2 className="text-3xl font-playfair font-bold text-gray-900">
                                                        {config.title}
                                                    </h2>
                                                    <p className="text-gray-600">
                                                        {services.length} service{services.length !== 1 ? 's' : ''} available
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {services.map((service, serviceIndex) => (
                                                <motion.div
                                                    key={service._id}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
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
                                                            href={`/service/${service.slug}`}
                                                            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                                                        >
                                                            Learn More
                                                            <FaArrowRight className="ml-2" />
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-red-50">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Ready to Transform Your Life?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Contact us today for a personalized consultation and experience the benefits of our expert services.
                        </p>
                        <Link
                            href="/contact"
                            className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                        >
                            Get Started Today
                            <FaArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;