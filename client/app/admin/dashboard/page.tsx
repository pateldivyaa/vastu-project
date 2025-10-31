'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    FaUsers,
    FaBox,
    FaComments,
    FaImages,
    FaEnvelope,
    FaSignOutAlt,
    FaPlus,
    FaEdit,
    FaTrash,
    FaSpinner
} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { servicesAPI, awardsAPI, newsAPI, workshopsAPI, productsAPI, testimonialsAPI, galleryAPI, contactAPI } from '@/lib/api';

interface DashboardStats {
    services: number;
    awards: number;
    news: number;
    workshops: number;
    products: number;
    testimonials: number;
    gallery: number;
    contacts: number;
    unreadContacts: number;
}

const AdminDashboard = () => {
    const [stats, setStats] = useState<DashboardStats>({
        services: 0,
        awards: 0,
        news: 0,
        workshops: 0,
        products: 0,
        testimonials: 0,
        gallery: 0,
        contacts: 0,
        unreadContacts: 0
    });
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        fetchStats();
    }, [router]);

    const fetchStats = async () => {
        try {
            // Fetch data with error handling for each API
            const fetchWithFallback = async (apiCall: () => Promise<any>, fallbackValue: number = 0) => {
                try {
                    const response = await apiCall();
                    return response.data.length;
                } catch (error) {
                    console.warn('API endpoint not available:', error);
                    return fallbackValue;
                }
            };

            const [
                servicesCount,
                awardsCount,
                newsCount,
                workshopsCount,
                productsCount,
                testimonialsCount,
                galleryCount,
                contactsCount
            ] = await Promise.all([
                fetchWithFallback(() => servicesAPI.getAll()),
                fetchWithFallback(() => awardsAPI.getAll()),
                fetchWithFallback(() => newsAPI.getAll()),
                fetchWithFallback(() => workshopsAPI.getAll()),
                fetchWithFallback(() => productsAPI.getAll()),
                fetchWithFallback(() => testimonialsAPI.getAll()),
                fetchWithFallback(() => galleryAPI.getAll()),
                fetchWithFallback(() => contactAPI.getAll())
            ]);

            // Get unread contacts count
            let unreadContacts = 0;
            try {
                const contactsRes = await contactAPI.getAll();
                unreadContacts = contactsRes.data.filter((contact: any) => !contact.isRead).length;
            } catch (error) {
                console.warn('Contacts API not available:', error);
            }

            setStats({
                services: servicesCount,
                awards: awardsCount,
                news: newsCount,
                workshops: workshopsCount,
                products: productsCount,
                testimonials: testimonialsCount,
                gallery: galleryCount,
                contacts: contactsCount,
                unreadContacts
            });
        } catch (error) {
            console.error('Dashboard fetch error:', error);
            toast.error('Failed to fetch dashboard data');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
        toast.success('Logged out successfully');
    };

    // Create dashboard items dynamically based on available APIs
    const dashboardItems = [
        {
            title: 'Services',
            count: stats.services,
            icon: FaUsers,
            color: 'from-primary-500 to-primary-600',
            href: '/admin/services',
            available: true
        },
        {
            title: 'Awards',
            count: stats.awards,
            icon: FaBox,
            color: 'from-yellow-500 to-yellow-600',
            href: '/admin/awards',
            available: true
        },
        {
            title: 'News',
            count: stats.news,
            icon: FaComments,
            color: 'from-blue-500 to-blue-600',
            href: '/admin/news',
            available: true
        },
        {
            title: 'Workshops',
            count: stats.workshops,
            icon: FaImages,
            color: 'from-purple-500 to-purple-600',
            href: '/admin/workshops',
            available: true
        },
        {
            title: 'Products',
            count: stats.products,
            icon: FaBox,
            color: 'from-green-500 to-green-600',
            href: '/admin/products',
            available: stats.products >= 0 // Show if API is available
        },
        {
            title: 'Testimonials',
            count: stats.testimonials,
            icon: FaComments,
            color: 'from-orange-500 to-orange-600',
            href: '/admin/testimonials',
            available: stats.testimonials >= 0 // Show if API is available
        },
        {
            title: 'Gallery',
            count: stats.gallery,
            icon: FaImages,
            color: 'from-indigo-500 to-indigo-600',
            href: '/admin/gallery',
            available: true
        },
        {
            title: 'Contacts',
            count: stats.contacts,
            icon: FaEnvelope,
            color: 'from-red-500 to-red-600',
            href: '/admin/contacts',
            badge: stats.unreadContacts > 0 ? stats.unreadContacts : undefined,
            available: true
        }
    ].filter(item => item.available);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading dashboard...</p>
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
                        <div>
                            <h1 className="text-3xl font-playfair font-bold text-gray-900">
                                Admin Dashboard
                            </h1>
                            <p className="text-gray-600">Manage your website content</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                        >
                            <FaSignOutAlt className="mr-2" />
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                    {dashboardItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
                            onClick={() => router.push(item.href)}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 mb-1">
                                        {item.title}
                                    </p>
                                    <p className="text-3xl font-bold text-gray-900">
                                        {item.count}
                                    </p>
                                </div>
                                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                                    <item.icon className="text-white text-xl" />
                                </div>
                            </div>
                            {item.badge && (
                                <div className="mt-2">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        {item.badge} unread
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="card p-6 mb-8"
                >
                    <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <button
                            onClick={() => router.push('/admin/services/new')}
                            className="flex items-center justify-center p-4 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors duration-300"
                        >
                            <FaPlus className="mr-2" />
                            Add Service
                        </button>
                        <button
                            onClick={() => router.push('/admin/awards/new')}
                            className="flex items-center justify-center p-4 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors duration-300"
                        >
                            <FaPlus className="mr-2" />
                            Add Award
                        </button>
                        <button
                            onClick={() => router.push('/admin/news/new')}
                            className="flex items-center justify-center p-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                        >
                            <FaPlus className="mr-2" />
                            Add News
                        </button>
                        <button
                            onClick={() => router.push('/admin/workshops/new')}
                            className="flex items-center justify-center p-4 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors duration-300"
                        >
                            <FaPlus className="mr-2" />
                            Add Workshop
                        </button>
                        {stats.products >= 0 && (
                            <button
                                onClick={() => router.push('/admin/products/new')}
                                className="flex items-center justify-center p-4 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors duration-300"
                            >
                                <FaPlus className="mr-2" />
                                Add Product
                            </button>
                        )}
                        {stats.testimonials >= 0 && (
                            <button
                                onClick={() => router.push('/admin/testimonials/new')}
                                className="flex items-center justify-center p-4 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors duration-300"
                            >
                                <FaPlus className="mr-2" />
                                Add Testimonial
                            </button>
                        )}
                        <button
                            onClick={() => router.push('/admin/gallery/new')}
                            className="flex items-center justify-center p-4 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors duration-300"
                        >
                            <FaPlus className="mr-2" />
                            Add Gallery Item
                        </button>
                    </div>
                </motion.div>

                {/* Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {/* Recent Contacts */}
                    <div className="card p-6">
                        <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                            Recent Contacts
                        </h3>
                        <div className="space-y-4">
                            {stats.contacts > 0 ? (
                                <p className="text-gray-600">
                                    You have {stats.contacts} contact messages.
                                    {stats.unreadContacts > 0 && (
                                        <span className="text-red-600 font-medium">
                                            {' '}{stats.unreadContacts} unread.
                                        </span>
                                    )}
                                </p>
                            ) : (
                                <p className="text-gray-600">No contact messages yet.</p>
                            )}
                            <button
                                onClick={() => router.push('/admin/contacts')}
                                className="btn-primary"
                            >
                                View All Contacts
                            </button>
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="card p-6">
                        <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                            System Status
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Services</span>
                                <span className="text-green-600 font-medium">
                                    {stats.services} active
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Awards</span>
                                <span className="text-green-600 font-medium">
                                    {stats.awards} active
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">News</span>
                                <span className="text-green-600 font-medium">
                                    {stats.news} active
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Workshops</span>
                                <span className="text-green-600 font-medium">
                                    {stats.workshops} active
                                </span>
                            </div>
                            {stats.products >= 0 && (
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Products</span>
                                    <span className="text-green-600 font-medium">
                                        {stats.products} active
                                    </span>
                                </div>
                            )}
                            {stats.testimonials >= 0 && (
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600">Testimonials</span>
                                    <span className="text-green-600 font-medium">
                                        {stats.testimonials} active
                                    </span>
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Gallery Items</span>
                                <span className="text-green-600 font-medium">
                                    {stats.gallery} active
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default AdminDashboard;
