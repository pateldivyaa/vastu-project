'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaSpinner, FaPhone, FaEnvelope, FaStar, FaCheck, FaCalendarAlt, FaChalkboardTeacher, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { workshopsAPI } from '@/lib/api';

interface Workshop {
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
}

const WorkshopSeminarPage = () => {
    const [workshops, setWorkshops] = useState<Workshop[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const fetchWorkshops = async () => {
            try {
                setLoading(true);
                console.log('Fetching workshops...');
                const response = await workshopsAPI.getAll();
                console.log('Workshops response:', response.data);
                setWorkshops(response.data);
            } catch (err) {
                console.error('Error fetching workshops:', err);
                setError('Failed to load workshops and seminars');
            } finally {
                setLoading(false);
            }
        };

        fetchWorkshops();
    }, []);

    const filteredWorkshops = selectedCategory === 'all'
        ? workshops
        : workshops.filter(workshop => workshop.category === selectedCategory);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading workshops and seminars...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Workshops</h1>
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
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section - Matching About/Home Style */}
            <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20 md:py-28 overflow-hidden">
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
                            Workshops & Seminars
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                            Join our educational programs and learn from the experts in Vastu Science, Astrology, and Numerology
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-white border-b">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 font-medium">Filter by:</span>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${selectedCategory === 'all'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                All Programs
                            </button>
                            <button
                                onClick={() => setSelectedCategory('workshop')}
                                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${selectedCategory === 'workshop'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Workshops
                            </button>
                            <button
                                onClick={() => setSelectedCategory('seminar')}
                                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${selectedCategory === 'seminar'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                Seminars
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshops Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    {filteredWorkshops.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-400 text-6xl mb-4">🎓</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No workshops found</h3>
                            <p className="text-gray-600 mb-6">No workshops or seminars are currently available.</p>
                            <Link
                                href="/contact"
                                className="btn-primary"
                            >
                                Contact Us
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
                                    Educational Programs
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Enhance your knowledge with our comprehensive workshops and seminars
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredWorkshops.map((workshop, index) => (
                                    <motion.div
                                        key={workshop._id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={workshop.image || '/api/placeholder/400/300'}
                                                alt={workshop.title}
                                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 bg-gradient-to-r ${workshop.category === 'workshop'
                                                    ? 'from-red-500 to-red-600'
                                                    : 'from-red-500 to-red-600'
                                                    } text-white text-sm font-medium rounded-full`}>
                                                    {workshop.category === 'workshop' ? 'Workshop' : 'Seminar'}
                                                </span>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                {workshop.category === 'workshop' ? (
                                                    <FaChalkboardTeacher className="text-red-400 text-xl" />
                                                ) : (
                                                    <FaUsers className="text-red-400 text-xl" />
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3 line-clamp-2">
                                                {workshop.title}
                                            </h3>

                                            <p className="text-gray-600 mb-4 line-clamp-3">
                                                {workshop.description}
                                            </p>

                                            <div className="flex items-center text-gray-500 text-sm mb-4">
                                                <FaCalendarAlt className="mr-2" />
                                                <span>{new Date(workshop.createdAt).toLocaleDateString()}</span>
                                            </div>

                                            {workshop.features && workshop.features.length > 0 && (
                                                <ul className="space-y-2 mb-4">
                                                    {workshop.features.slice(0, 2).map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                            <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <div className="flex items-center justify-between">
                                                <Link
                                                    href={`/workshop/${workshop.slug}`}
                                                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                                                >
                                                    Learn More
                                                    <FaArrowRight className="ml-2" />
                                                </Link>

                                                {workshop.price && workshop.price > 0 && (
                                                    <span className="text-lg font-bold text-primary-600">
                                                        ₹{workshop.price.toLocaleString()}
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
                            Ready to Learn?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Join our workshops and seminars to enhance your knowledge and skills in Vastu Science, Astrology, and Numerology.
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

export default WorkshopSeminarPage;
