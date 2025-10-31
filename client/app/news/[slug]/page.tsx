'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaSpinner, FaNewspaper, FaCalendarAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { newsAPI } from '@/lib/api';
import Image from 'next/image';

interface NewsItem {
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

const NewsDetail = () => {
    const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();

    useEffect(() => {
        const fetchNewsItem = async () => {
            try {
                setLoading(true);
                const response = await newsAPI.getBySlug(params.slug as string);
                setNewsItem(response.data);
            } catch (err) {
                setError('News not found');
                console.error('Error fetching news:', err);
            } finally {
                setLoading(false);
            }
        };

        if (params.slug) {
            fetchNewsItem();
        }
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading news...</p>
                </div>
            </div>
        );
    }

    if (error || !newsItem) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">News Not Found</h1>
                    <p className="text-gray-600 mb-8">The requested news article does not exist.</p>
                    <Link
                        href="/news"
                        className="btn-primary inline-flex items-center"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to News
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <Link
                            href="/news"
                            className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors duration-300"
                        >
                            <FaArrowLeft className="mr-2" />
                            Back to News
                        </Link>

                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                                    <FaNewspaper className="text-white text-3xl" />
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                                {newsItem.title}
                            </h1>

                            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                                {newsItem.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* News Content */}
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
                                        src={newsItem.image || '/api/placeholder/800/400'}
                                        alt={newsItem.title}
                                        width={800}
                                        height={400}
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
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
                                {/* News Info */}
                                <div className="card p-6">
                                    <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                        News Information
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-sm text-gray-600">Category</span>
                                            <p className="font-semibold text-gray-900">
                                                News
                                            </p>
                                        </div>

                                        <div>
                                            <span className="text-sm text-gray-600">Published</span>
                                            <p className="font-semibold text-gray-900">
                                                {new Date(newsItem.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                {newsItem.features && newsItem.features.length > 0 && (
                                    <div className="card p-6">
                                        <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                            Key Points
                                        </h3>

                                        <ul className="space-y-3">
                                            {newsItem.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <FaNewspaper className="text-red-500 mr-3 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Contact CTA */}
                                <div className="card p-6 bg-gradient-to-br from-red-600 to-red-700 text-white">
                                    <h3 className="text-2xl font-playfair font-bold mb-4">
                                        Stay Updated
                                    </h3>

                                    <p className="text-red-100 mb-6">
                                        Follow our latest news and updates to stay informed about developments in Vastu Science.
                                    </p>

                                    <div className="space-y-3">
                                        <Link
                                            href="/contact"
                                            className="block w-full bg-white text-red-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                                        >
                                            Contact Us
                                        </Link>

                                        <div className="flex items-center justify-center space-x-4 text-sm">
                                            <a
                                                href="tel:+917069200777"
                                                className="flex items-center hover:text-red-200 transition-colors duration-300"
                                            >
                                                <FaPhone className="mr-2" />
                                                Call Us
                                            </a>
                                            <a
                                                href="mailto:vastuscienceworld@gmail.com"
                                                className="flex items-center hover:text-red-200 transition-colors duration-300"
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
                                        Latest Updates
                                    </h3>

                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <FaNewspaper className="text-red-500 mr-3" />
                                            <span className="text-sm text-gray-700">Industry News</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaNewspaper className="text-red-500 mr-3" />
                                            <span className="text-sm text-gray-700">Expert Insights</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FaNewspaper className="text-red-500 mr-3" />
                                            <span className="text-sm text-gray-700">Latest Developments</span>
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

export default NewsDetail;
