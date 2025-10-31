'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaSpinner, FaSave } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { testimonialsAPI } from '@/lib/api';

const NewTestimonialPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        image: ''
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        setLoading(true);
        try {
            await testimonialsAPI.create(formData);
            toast.success('Testimonial created successfully');
            router.push('/admin/testimonials');
        } catch (error) {
            toast.error('Failed to create testimonial');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                                onClick={() => router.push('/admin/testimonials')}
                                className="mr-4 p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            >
                                <FaArrowLeft className="text-xl" />
                            </button>
                            <div>
                                <h1 className="text-3xl font-playfair font-bold text-gray-900">
                                    Add New Testimonial
                                </h1>
                                <p className="text-gray-600">Create a new testimonial</p>
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
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Customer Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="Enter customer name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                                Customer Image URL
                            </label>
                            <input
                                type="url"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="Enter customer image URL"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Testimonial Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="Enter customer testimonial message"
                                required
                            />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => router.push('/admin/testimonials')}
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
                                {loading ? 'Creating...' : 'Create Testimonial'}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </main>
        </div>
    );
};

export default NewTestimonialPage;
