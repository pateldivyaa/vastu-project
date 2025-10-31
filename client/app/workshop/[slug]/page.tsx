'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaSpinner, FaChalkboardTeacher, FaUsers, FaCalendarAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { workshopsAPI } from '@/lib/api';
import Image from 'next/image';

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
    updatedAt: string;
}

const WorkshopDetail = () => {
    const [workshop, setWorkshop] = useState<Workshop | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();

    useEffect(() => {
        const fetchWorkshop = async () => {
            try {
                setLoading(true);
                const response = await workshopsAPI.getBySlug(params.slug as string);
                setWorkshop(response.data);
            } catch (err) {
                setError('Workshop not found');
                console.error('Error fetching workshop:', err);
            } finally {
                setLoading(false);
            }
        };

        if (params.slug) {
            fetchWorkshop();
        }
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading workshop...</p>
                </div>
            </div>
        );
    }

    if (error || !workshop) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Workshop Not Found</h1>
                    <p className="text-gray-600 mb-8">The requested workshop does not exist.</p>
                    <Link
                        href="/workshop-seminar"
                        className="btn-primary inline-flex items-center"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to Workshops
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white py-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <Link
                            href="/workshop-seminar"
                            className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors duration-300"
                        >
                            <FaArrowLeft className="mr-2" />
                            Back to Workshops
                        </Link>

                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-center mb-6">
                                <div className={`w-20 h-20 bg-gradient-to-r ${workshop.category === 'workshop'
                                        ? 'from-indigo-500 to-indigo-600'
                                        : 'from-teal-500 to-teal-600'
                                    } rounded-full flex items-center justify-center mr-4`}>
                                    {workshop.category === 'workshop' ? (
                                        <FaChalkboardTeacher className="text-white text-3xl" />
                                    ) : (
                                        <FaUsers className="text-white text-3xl" />
                                    )}
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                                {workshop.title}
                            </h1>

                            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                                {workshop.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Workshop Content */}
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
                                        src={workshop.image || '/api/placeholder/800/400'}
                                        alt={workshop.title}
                                        width={800}
                                        height={400}
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <div dangerouslySetInnerHTML={{ __html: workshop.content }} />
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
                                {/* Workshop Info */}
                                <div className="card p-6">
                                    <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                        Program Information
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-sm text-gray-600">Type</span>
                                            <p className="font-semibold text-gray-900">
                                                {workshop.category === 'workshop' ? 'Workshop' : 'Seminar'}
                                            </p>
                                        </div>

                                        <div>
                                            <span className="text-sm text-gray-600">Date</span>
                                            <p className="font-semibold text-gray-900">
                                                {new Date(workshop.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>

                                        {workshop.price && workshop.price > 0 && (
                                            <div>
                                                <span className="text-sm text-gray-600">Price</span>
                                                <p className="font-semibold text-indigo-600 text-xl">
                                                    ₹{workshop.price.toLocaleString()}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Features */}
                                {workshop.features && workshop.features.length > 0 && (
                                    <div className="card p-6">
                                        <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                            What You'll Learn
                                        </h3>

                                        <ul className="space-y-3">
                                            {workshop.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <FaChalkboardTeacher className="text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Contact CTA */}
                                <div className="card p-6 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
                                    <h3 className="text-2xl font-playfair font-bold mb-4">
                                        Ready to Join?
                                    </h3>

                                    <p className="text-indigo-100 mb-6">
                                        Contact us today to register for this {workshop.category === 'workshop' ? 'workshop' : 'seminar'} and enhance your knowledge.
                                    </p>

                                    <div className="space-y-3">
                                        <Link
                                            href="/contact"
                                            className="block w-full bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                                        >
                                            Register Now
                                        </Link>

                                        <div className="flex items-center justify-center space-x-4 text-sm">
                                            <a
                                                href="tel:+917069200777"
                                                className="flex items-center hover:text-indigo-200 transition-colors duration-300"
                                            >
                                                <FaPhone className="mr-2" />
                                                Call Us
                                            </a>
                                            <a
                                                href="mailto:vastuscienceworld@gmail.com"
                                                className="flex items-center hover:text-indigo-200 transition-colors duration-300"
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
                                            <FaChalkboardTeacher className="text-indigo-500 mr-3" />
                                            <span className="text-sm text-gray-700">Expert Instructors</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaChalkboardTeacher className="text-indigo-500 mr-3" />
                                            <span className="text-sm text-gray-700">Hands-on Learning</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaChalkboardTeacher className="text-indigo-500 mr-3" />
                                            <span className="text-sm text-gray-700">Certification</span>
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

export default WorkshopDetail;
