'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    FaPlus,
    FaEdit,
    FaTrash,
    FaArrowLeft,
    FaSpinner,
    FaEye
} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { newsAPI } from '@/lib/api';

interface NewsItem {
    _id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string;
    category: string;
    features?: string[];
    isActive: boolean;
    createdAt: string;
}

const NewsPage = () => {
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        fetchNews();
    }, [router]);

    const fetchNews = async () => {
        try {
            const response = await newsAPI.getAll();
            setNews(response.data);
        } catch (error) {
            toast.error('Failed to fetch news');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this news item?')) {
            return;
        }

        setDeleting(id);
        try {
            await newsAPI.delete(id);
            setNews(news.filter(item => item._id !== id));
            toast.success('News item deleted successfully');
        } catch (error) {
            toast.error('Failed to delete news item');
        } finally {
            setDeleting(null);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading news...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <button
                                onClick={() => router.push('/admin/dashboard')}
                                className="mr-4 p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            >
                                <FaArrowLeft className="text-xl" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-playfair font-bold text-gray-900">
                                    News Management
                                </h1>
                                <p className="text-gray-600">Manage your news and updates</p>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push('/admin/news/new')}
                            className="btn-primary flex items-center"
                        >
                            <FaPlus className="mr-2" />
                            Add New News
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {news.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📰</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No news found</h3>
                        <p className="text-gray-600 mb-6">Get started by adding your first news item.</p>
                        <button
                            onClick={() => router.push('/admin/news/new')}
                            className="btn-primary"
                        >
                            Add Your First News
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((item, index) => (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="mb-4">
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                    )}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                            {item.category}
                                        </span>
                                        <span>
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => router.push(`/admin/news/${item._id}`)}
                                        className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <FaEdit className="mr-1" />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        disabled={deleting === item._id}
                                        className="flex-1 bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
                                    >
                                        {deleting === item._id ? (
                                            <FaSpinner className="animate-spin mr-1" />
                                        ) : (
                                            <FaTrash className="mr-1" />
                                        )}
                                        Delete
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default NewsPage;
