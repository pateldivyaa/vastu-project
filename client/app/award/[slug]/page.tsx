'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaSpinner, FaTrophy, FaCalendarAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { awardsAPI } from '@/lib/api';
import Image from 'next/image';

interface Award {
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

const AwardDetail = () => {
    const [award, setAward] = useState<Award | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();

    useEffect(() => {
        const fetchAward = async () => {
            try {
                setLoading(true);
                const response = await awardsAPI.getBySlug(params.slug as string);
                setAward(response.data);
            } catch (err) {
                setError('Award not found');
                console.error('Error fetching award:', err);
            } finally {
                setLoading(false);
            }
        };

        if (params.slug) {
            fetchAward();
        }
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading award...</p>
                </div>
            </div>
        );
    }

    if (error || !award) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Award Not Found</h1>
                    <p className="text-gray-600 mb-8">The requested award does not exist.</p>
                    <Link
                        href="/awards-achievements"
                        className="btn-primary inline-flex items-center"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to Awards
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-yellow-600 via-yellow-700 to-yellow-800 text-white py-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <Link
                            href="/awards-achievements"
                            className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors duration-300"
                        >
                            <FaArrowLeft className="mr-2" />
                            Back to Awards
                        </Link>

                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                                    <FaTrophy className="text-white text-3xl" />
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                                {award.title}
                            </h1>

                            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                                {award.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Award Content */}
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
                                        src={award.image || '/api/placeholder/800/400'}
                                        alt={award.title}
                                        width={800}
                                        height={400}
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <div dangerouslySetInnerHTML={{ __html: award.content }} />
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
                                {/* Award Info */}
                                <div className="card p-6">
                                    <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                        Award Information
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-sm text-gray-600">Category</span>
                                            <p className="font-semibold text-gray-900">
                                                Awards & Achievements
                                            </p>
                                        </div>

                                        <div>
                                            <span className="text-sm text-gray-600">Date</span>
                                            <p className="font-semibold text-gray-900">
                                                {new Date(award.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                {award.features && award.features.length > 0 && (
                                    <div className="card p-6">
                                        <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                            Key Highlights
                                        </h3>

                                        <ul className="space-y-3">
                                            {award.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <FaTrophy className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Contact CTA */}
                                <div className="card p-6 bg-gradient-to-br from-yellow-600 to-yellow-700 text-white">
                                    <h3 className="text-2xl font-playfair font-bold mb-4">
                                        Proud of Our Achievement
                                    </h3>

                                    <p className="text-yellow-100 mb-6">
                                        This award represents our commitment to excellence and our dedication to helping people worldwide.
                                    </p>

                                    <div className="space-y-3">
                                        <Link
                                            href="/contact"
                                            className="block w-full bg-white text-yellow-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                                        >
                                            Contact Us
                                        </Link>

                                        <div className="flex items-center justify-center space-x-4 text-sm">
                                            <a
                                                href="tel:+917069200777"
                                                className="flex items-center hover:text-yellow-200 transition-colors duration-300"
                                            >
                                                <FaPhone className="mr-2" />
                                                Call Us
                                            </a>
                                            <a
                                                href="mailto:vastuscienceworld@gmail.com"
                                                className="flex items-center hover:text-yellow-200 transition-colors duration-300"
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
                                        Our Recognition
                                    </h3>

                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <FaTrophy className="text-yellow-500 mr-3" />
                                            <span className="text-sm text-gray-700">International Recognition</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaTrophy className="text-yellow-500 mr-3" />
                                            <span className="text-sm text-gray-700">Professional Excellence</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaTrophy className="text-yellow-500 mr-3" />
                                            <span className="text-sm text-gray-700">Industry Leadership</span>
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

export default AwardDetail;
