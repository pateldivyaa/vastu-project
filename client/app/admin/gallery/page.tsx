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
    FaImage
} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { galleryAPI } from '@/lib/api';

interface GalleryItem {
    _id: string;
    image: string;
    caption: string;
    createdAt: string;
}

const GalleryPage = () => {
    const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        fetchGalleryItems();
    }, [router]);

    const fetchGalleryItems = async () => {
        try {
            const response = await galleryAPI.getAll();
            setGalleryItems(response.data);
        } catch (error) {
            toast.error('Failed to fetch gallery items');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this gallery item?')) {
            return;
        }

        setDeleting(id);
        try {
            await galleryAPI.delete(id);
            setGalleryItems(galleryItems.filter(item => item._id !== id));
            toast.success('Gallery item deleted successfully');
        } catch (error) {
            toast.error('Failed to delete gallery item');
        } finally {
            setDeleting(null);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading gallery items...</p>
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
                                    Gallery Management
                                </h1>
                                <p className="text-gray-600">Manage your gallery images</p>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push('/admin/gallery/new')}
                            className="btn-primary flex items-center"
                        >
                            <FaPlus className="mr-2" />
                            Add New Gallery Item
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {galleryItems.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">🖼️</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No gallery items found</h3>
                        <p className="text-gray-600 mb-6">Get started by adding your first gallery item.</p>
                        <button
                            onClick={() => router.push('/admin/gallery/new')}
                            className="btn-primary"
                        >
                            Add Your First Gallery Item
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card p-4 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="mb-4">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.caption}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                    ) : (
                                        <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                            <FaImage className="text-gray-400 text-4xl" />
                                        </div>
                                    )}

                                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                                        {item.caption || 'Untitled'}
                                    </h3>

                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                        <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                                            {item.category || 'events'}
                                        </span>
                                        <span>
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => router.push(`/admin/gallery/${item._id}`)}
                                        className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center text-sm"
                                    >
                                        <FaEdit className="mr-1" />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        disabled={deleting === item._id}
                                        className="flex-1 bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors duration-300 flex items-center justify-center text-sm disabled:opacity-50"
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

export default GalleryPage;
