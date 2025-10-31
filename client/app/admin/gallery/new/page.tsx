'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaSpinner, FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { galleryAPI } from '@/lib/api';

const NewGalleryPage = () => {
    const [formData, setFormData] = useState({
        image: '',
        caption: '',
        category: 'events'
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.image) {
            toast.error('Please provide an image URL');
            return;
        }

        setLoading(true);
        try {
            const response = await galleryAPI.create(formData);
            console.log('Gallery item created:', response.data);
            toast.success('Gallery item created successfully');
            router.push('/admin/gallery');
        } catch (error: any) {
            console.error('Gallery creation error:', error);
            const errorMessage = error.response?.data?.message || error.response?.data?.errors?.[0]?.msg || 'Failed to create gallery item';
            toast.error(errorMessage);
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

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <button
                                onClick={() => router.push('/admin/gallery')}
                                className="mr-4 p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            >
                                <FaArrowLeft className="text-xl" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-playfair font-bold text-gray-900">
                                    Add New Gallery Item
                                </h1>
                                <p className="text-gray-600">Add a new image to the gallery</p>
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
                            {formData.image && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-600 mb-2">Preview:</p>
                                    <img
                                        src={formData.image}
                                        alt="Preview"
                                        className="w-full h-48 object-cover rounded-lg border"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            >
                                <option value="events">Events</option>
                                <option value="workshop">Workshop</option>
                                <option value="seminar">Seminar</option>
                                <option value="consultation">Consultation</option>
                                <option value="awards">Awards</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">
                                Caption
                            </label>
                            <textarea
                                id="caption"
                                name="caption"
                                value={formData.caption}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="Enter image caption (optional)"
                            />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => router.push('/admin/gallery')}
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
                                {loading ? 'Creating...' : 'Create Gallery Item'}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </main>
        </div>
    );
};

export default NewGalleryPage;
