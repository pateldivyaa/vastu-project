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
    FaUser,
    FaQuoteLeft
} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { testimonialsAPI } from '@/lib/api';

interface Testimonial {
    _id: string;
    name: string;
    message: string;
    image: string;
    createdAt: string;
}

const TestimonialsPage = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        fetchTestimonials();
    }, [router]);

    const fetchTestimonials = async () => {
        try {
            const response = await testimonialsAPI.getAll();
            setTestimonials(response.data);
        } catch (error) {
            toast.error('Failed to fetch testimonials');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this testimonial?')) {
            return;
        }

        setDeleting(id);
        try {
            await testimonialsAPI.delete(id);
            setTestimonials(testimonials.filter(testimonial => testimonial._id !== id));
            toast.success('Testimonial deleted successfully');
        } catch (error) {
            toast.error('Failed to delete testimonial');
        } finally {
            setDeleting(null);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading testimonials...</p>
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
                                    Testimonials Management
                                </h1>
                                <p className="text-gray-600">Manage customer testimonials</p>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push('/admin/testimonials/new')}
                            className="btn-primary flex items-center"
                        >
                            <FaPlus className="mr-2" />
                            Add New Testimonial
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {testimonials.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">💬</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No testimonials found</h3>
                        <p className="text-gray-600 mb-6">Get started by adding your first testimonial.</p>
                        <button
                            onClick={() => router.push('/admin/testimonials/new')}
                            className="btn-primary"
                        >
                            Add Your First Testimonial
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="mb-4">
                                    <div className="flex items-center mb-4">
                                        {testimonial.image ? (
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover mr-3"
                                            />
                                        ) : (
                                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                                                <FaUser className="text-primary-600" />
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="font-bold text-gray-900">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {new Date(testimonial.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <FaQuoteLeft className="text-primary-200 text-2xl mb-2" />
                                        <p className="text-gray-600 text-sm line-clamp-4">
                                            {testimonial.message}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => router.push(`/admin/testimonials/${testimonial._id}`)}
                                        className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <FaEdit className="mr-1" />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(testimonial._id)}
                                        disabled={deleting === testimonial._id}
                                        className="flex-1 bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
                                    >
                                        {deleting === testimonial._id ? (
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

export default TestimonialsPage;
