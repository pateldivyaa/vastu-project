'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    FaArrowLeft,
    FaSpinner,
    FaEnvelope,
    FaPhone,
    FaUser,
    FaCalendar,
    FaEye,
    FaTrash,
    FaCheck
} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { contactAPI } from '@/lib/api';

interface Contact {
    _id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}

const ContactsPage = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);
    const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        fetchContacts();
    }, [router]);

    const fetchContacts = async () => {
        try {
            const response = await contactAPI.getAll();
            setContacts(response.data);
        } catch (error) {
            toast.error('Failed to fetch contacts');
        } finally {
            setLoading(false);
        }
    };

    const handleMarkAsRead = async (id: string) => {
        try {
            await contactAPI.markAsRead(id);
            setContacts(contacts.map(contact =>
                contact._id === id ? { ...contact, isRead: true } : contact
            ));
            toast.success('Marked as read');
        } catch (error) {
            toast.error('Failed to mark as read');
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this contact?')) {
            return;
        }

        setDeleting(id);
        try {
            await contactAPI.delete(id);
            setContacts(contacts.filter(contact => contact._id !== id));
            toast.success('Contact deleted successfully');
        } catch (error) {
            toast.error('Failed to delete contact');
        } finally {
            setDeleting(null);
        }
    };

    const filteredContacts = contacts.filter(contact => {
        if (filter === 'unread') return !contact.isRead;
        if (filter === 'read') return contact.isRead;
        return true;
    });

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading contacts...</p>
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
                                    Contact Messages
                                </h1>
                                <p className="text-gray-600">Manage customer inquiries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filter Tabs */}
                <div className="mb-6">
                    <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${filter === 'all'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            All ({contacts.length})
                        </button>
                        <button
                            onClick={() => setFilter('unread')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${filter === 'unread'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Unread ({contacts.filter(c => !c.isRead).length})
                        </button>
                        <button
                            onClick={() => setFilter('read')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${filter === 'read'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Read ({contacts.filter(c => c.isRead).length})
                        </button>
                    </div>
                </div>

                {filteredContacts.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📧</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {filter === 'all' ? 'No contacts found' :
                                filter === 'unread' ? 'No unread messages' : 'No read messages'}
                        </h3>
                        <p className="text-gray-600">
                            {filter === 'all' ? 'No contact messages have been received yet.' :
                                filter === 'unread' ? 'All messages have been read.' : 'No messages have been read yet.'}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredContacts.map((contact, index) => (
                            <motion.div
                                key={contact._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`card p-6 hover:shadow-xl transition-all duration-300 ${!contact.isRead ? 'border-l-4 border-primary-500' : ''
                                    }`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <div className="flex items-center mb-3">
                                            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                                                <FaUser className="text-primary-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900">
                                                    {contact.name}
                                                </h3>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <FaEnvelope className="mr-1" />
                                                    {contact.email}
                                                    {contact.phone && (
                                                        <>
                                                            <span className="mx-2">•</span>
                                                            <FaPhone className="mr-1" />
                                                            {contact.phone}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-3 line-clamp-3">
                                            {contact.message}
                                        </p>

                                        <div className="flex items-center text-sm text-gray-500">
                                            <FaCalendar className="mr-1" />
                                            {new Date(contact.createdAt).toLocaleString()}
                                            {!contact.isRead && (
                                                <span className="ml-2 bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                                                    New
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex space-x-2 ml-4">
                                        {!contact.isRead && (
                                            <button
                                                onClick={() => handleMarkAsRead(contact._id)}
                                                className="bg-green-50 text-green-600 px-3 py-2 rounded-lg hover:bg-green-100 transition-colors duration-300 flex items-center"
                                            >
                                                <FaCheck className="mr-1" />
                                                Mark Read
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleDelete(contact._id)}
                                            disabled={deleting === contact._id}
                                            className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors duration-300 flex items-center disabled:opacity-50"
                                        >
                                            {deleting === contact._id ? (
                                                <FaSpinner className="animate-spin mr-1" />
                                            ) : (
                                                <FaTrash className="mr-1" />
                                            )}
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default ContactsPage;
