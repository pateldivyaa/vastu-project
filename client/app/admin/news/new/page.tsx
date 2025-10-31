'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaSpinner, FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { newsAPI } from '@/lib/api';

const NewNewsPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        description: '',
        content: '',
        image: '',
        category: '',
        features: [] as string[]
    });
    const [loading, setLoading] = useState(false);
    const [newFeature, setNewFeature] = useState('');
    const router = useRouter();

    const categories = [
        { value: 'achievement', label: 'Achievement' },
        { value: 'award', label: 'Award' },
        { value: 'recognition', label: 'Recognition' },
        { value: 'event', label: 'Event' },
        { value: 'update', label: 'Update' },
        { value: 'announcement', label: 'Announcement' },
        { value: 'media', label: 'Media Coverage' },
        { value: 'interview', label: 'Interview' }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.slug || !formData.description || !formData.content || !formData.category) {
            toast.error('Please fill in all required fields');
            return;
        }

        setLoading(true);
        try {
            console.log('Creating news with data:', formData);
            const response = await newsAPI.create(formData);
            console.log('News creation response:', response);
            toast.success('News item created successfully');
            router.push('/admin/news');
        } catch (error) {
            console.error('News creation error:', error);
            toast.error('Failed to create news item');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        setFormData({
            ...formData,
            title,
            slug
        });
    };

    const addFeature = () => {
        if (newFeature.trim()) {
            setFormData({
                ...formData,
                features: [...formData.features, newFeature.trim()]
            });
            setNewFeature('');
        }
    };

    const removeFeature = (index: number) => {
        setFormData({
            ...formData,
            features: formData.features.filter((_, i) => i !== index)
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <button
                                onClick={() => router.push('/admin/news')}
                                className="mr-4 p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            >
                                <FaArrowLeft className="text-xl" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-playfair font-bold text-gray-900">
                                    Add New News
                                </h1>
                                <p className="text-gray-600">Create a new news item</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="card p-8"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                                News Title *
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleTitleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="Enter news title"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                                URL Slug *
                            </label>
                            <input
                                type="text"
                                id="slug"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="news-url-slug"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                Category *
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                required
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category.value} value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                                Image URL *
                            </label>
                            <input
                                type="url"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="Enter image URL"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                Description *
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="Enter news description"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                                Content *
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows={12}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="Enter detailed content (HTML supported)"
                                required
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                You can use HTML tags for formatting: &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt;, &lt;li&gt;, etc.
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Key Points/Highlights
                            </label>
                            <div className="space-y-3">
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={newFeature}
                                        onChange={(e) => setNewFeature(e.target.value)}
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Add a key point or highlight"
                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                                    />
                                    <button
                                        type="button"
                                        onClick={addFeature}
                                        className="px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                                    >
                                        Add
                                    </button>
                                </div>
                                {formData.features.length > 0 && (
                                    <div className="space-y-2">
                                        {formData.features.map((feature, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <span className="text-gray-700">{feature}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFeature(index)}
                                                    className="text-red-600 hover:text-red-800 transition-colors duration-300"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => router.push('/admin/news')}
                                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary flex items-center"
                            >
                                {loading ? (
                                    <FaSpinner className="animate-spin mr-2" />
                                ) : (
                                    <FaSave className="mr-2" />
                                )}
                                {loading ? 'Creating...' : 'Create News'}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </main>
        </div>
    );
};

export default NewNewsPage;
