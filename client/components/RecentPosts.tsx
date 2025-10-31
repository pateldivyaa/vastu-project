'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight, FaSpinner } from 'react-icons/fa';
import { workshopsAPI, awardsAPI, newsAPI } from '@/lib/api';

interface PostItem {
    _id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string;
    category: string;
    createdAt: string;
}

const RecentPosts = () => {
    const [workshops, setWorkshops] = useState<PostItem[]>([]);
    const [awards, setAwards] = useState<PostItem[]>([]);
    const [news, setNews] = useState<PostItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                setLoading(true);

                // Fetch data from all APIs in parallel
                const [workshopsRes, awardsRes, newsRes] = await Promise.allSettled([
                    workshopsAPI.getAll(),
                    awardsAPI.getAll(),
                    newsAPI.getAll()
                ]);

                // Process workshops
                if (workshopsRes.status === 'fulfilled') {
                    const workshopsData = workshopsRes.value.data
                        .sort((a: PostItem, b: PostItem) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .slice(0, 4);
                    setWorkshops(workshopsData);
                }

                // Process awards
                if (awardsRes.status === 'fulfilled') {
                    const awardsData = awardsRes.value.data
                        .sort((a: PostItem, b: PostItem) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .slice(0, 4);
                    setAwards(awardsData);
                }

                // Process news
                if (newsRes.status === 'fulfilled') {
                    const newsData = newsRes.value.data
                        .sort((a: PostItem, b: PostItem) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .slice(0, 4);
                    setNews(newsData);
                }
            } catch (error) {
                console.error('Error fetching recent posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecentPosts();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getImageUrl = (image: string) => {
        return image || '/api/placeholder/300/200';
    };

    if (loading) {
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
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Recent <span className="text-gradient">Posts</span>
                        </h2>
                        <p className="text-xl text-gray-600">What's New</p>
                    </motion.div>

                    <div className="flex justify-center items-center py-20">
                        <div className="text-center">
                            <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                            <p className="text-gray-600">Loading recent posts...</p>
                        </div>
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
                    <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                        Recent <span className="text-gradient">Posts</span>
                    </h2>
                    <p className="text-xl text-gray-600">What's New</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Workshop & Seminar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="card p-6"
                    >
                        <h3 className="text-2xl font-playfair font-bold text-primary-600 mb-6">
                            Workshop & Seminar
                        </h3>
                        <div className="space-y-6">
                            {workshops.length > 0 ? (
                                workshops.map((workshop, index) => (
                                    <div key={workshop._id} className="border-b border-gray-200 pb-4 last:border-b-0">
                                        <div className="flex items-start space-x-4">
                                            <img
                                                src={getImageUrl(workshop.image)}
                                                alt={workshop.title}
                                                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center text-sm text-primary-600 mb-2">
                                                    <FaCalendarAlt className="mr-2" />
                                                    {formatDate(workshop.createdAt)}
                                                </div>
                                                <p className="text-sm text-gray-600 line-clamp-3">
                                                    {workshop.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-8">No workshops available</p>
                            )}
                        </div>
                        <div className="mt-6">
                            <Link href="/workshop-seminar" className="btn-primary w-full flex items-center justify-center">
                                View More
                                <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Awards & Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="card p-6"
                    >
                        <h3 className="text-2xl font-playfair font-bold text-primary-600 mb-6">
                            Awards & Achievements
                        </h3>
                        <div className="space-y-6">
                            {awards.length > 0 ? (
                                awards.map((award, index) => (
                                    <div key={award._id} className="border-b border-gray-200 pb-4 last:border-b-0">
                                        <div className="flex items-start space-x-4">
                                            <img
                                                src={getImageUrl(award.image)}
                                                alt={award.title}
                                                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center text-sm text-primary-600 mb-2">
                                                    <FaCalendarAlt className="mr-2" />
                                                    {formatDate(award.createdAt)}
                                                </div>
                                                <p className="text-sm text-gray-600 line-clamp-3">
                                                    {award.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-8">No awards available</p>
                            )}
                        </div>
                        <div className="mt-6">
                            <Link href="/awards-achievements" className="btn-primary w-full flex items-center justify-center">
                                View More
                                <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* News & Updates */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="card p-6"
                    >
                        <h3 className="text-2xl font-playfair font-bold text-primary-600 mb-6">
                            News & Updates
                        </h3>
                        <div className="space-y-6">
                            {news.length > 0 ? (
                                news.map((item, index) => (
                                    <div key={item._id} className="border-b border-gray-200 pb-4 last:border-b-0">
                                        <div className="flex items-start space-x-4">
                                            <img
                                                src={getImageUrl(item.image)}
                                                alt={item.title}
                                                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center text-sm text-primary-600 mb-2">
                                                    <FaCalendarAlt className="mr-2" />
                                                    {formatDate(item.createdAt)}
                                                </div>
                                                <p className="text-sm text-gray-600 line-clamp-3">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-8">No news available</p>
                            )}
                        </div>
                        <div className="mt-6">
                            <Link href="/news" className="btn-primary w-full flex items-center justify-center">
                                View More
                                <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RecentPosts;
