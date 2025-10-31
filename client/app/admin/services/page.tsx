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
import { servicesAPI } from '@/lib/api';

interface Service {
    _id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    image: string;
    category: string;
    features?: string[];
    price?: number;
    isActive: boolean;
    createdAt: string;
}

const ServicesPage = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        fetchServices();
    }, [router]);

    const fetchServices = async () => {
        try {
            const response = await servicesAPI.getAll();
            setServices(response.data);
        } catch (error) {
            toast.error('Failed to fetch services');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this service?')) {
            return;
        }

        setDeleting(id);
        try {
            await servicesAPI.delete(id);
            setServices(services.filter(service => service._id !== id));
            toast.success('Service deleted successfully');
        } catch (error) {
            toast.error('Failed to delete service');
        } finally {
            setDeleting(null);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading services...</p>
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
                                    Services Management
                                </h1>
                                <p className="text-gray-600">Manage your services</p>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push('/admin/services/new')}
                            className="btn-primary flex items-center"
                        >
                            <FaPlus className="mr-2" />
                            Add New Service
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {services.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📋</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                        <p className="text-gray-600 mb-6">Get started by adding your first service.</p>
                        <button
                            onClick={() => router.push('/admin/services/new')}
                            className="btn-primary"
                        >
                            Add Your First Service
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="mb-4">
                                    {service.image && (
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                    )}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                                            {service.category}
                                        </span>
                                        <span>
                                            {new Date(service.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => router.push(`/admin/services/${service._id}`)}
                                        className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <FaEdit className="mr-1" />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service._id)}
                                        disabled={deleting === service._id}
                                        className="flex-1 bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
                                    >
                                        {deleting === service._id ? (
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

export default ServicesPage;
