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
    FaRupeeSign
} from 'react-icons/fa';
import toast from 'react-hot-toast';
import { productsAPI } from '@/lib/api';

interface Product {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    createdAt: string;
}

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        fetchProducts();
    }, [router]);

    const fetchProducts = async () => {
        try {
            const response = await productsAPI.getAll();
            setProducts(response.data);
        } catch (error) {
            toast.error('Failed to fetch products');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this product?')) {
            return;
        }

        setDeleting(id);
        try {
            await productsAPI.delete(id);
            setProducts(products.filter(product => product._id !== id));
            toast.success('Product deleted successfully');
        } catch (error) {
            toast.error('Failed to delete product');
        } finally {
            setDeleting(null);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading products...</p>
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
                                    Products Management
                                </h1>
                                <p className="text-gray-600">Manage your products</p>
                            </div>
                        </div>
                        <button
                            onClick={() => router.push('/admin/products/new')}
                            className="btn-primary flex items-center"
                        >
                            <FaPlus className="mr-2" />
                            Add New Product
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {products.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📦</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-600 mb-6">Get started by adding your first product.</p>
                        <button
                            onClick={() => router.push('/admin/products/new')}
                            className="btn-primary"
                        >
                            Add Your First Product
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <motion.div
                                key={product._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card p-6 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="mb-4">
                                    {product.image && (
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-48 object-cover rounded-lg mb-4"
                                        />
                                    )}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                            {product.category}
                                        </span>
                                        <span className="flex items-center text-green-600 font-bold">
                                            <FaRupeeSign className="mr-1" />
                                            {product.price}
                                        </span>
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {new Date(product.createdAt).toLocaleDateString()}
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => router.push(`/admin/products/${product._id}`)}
                                        className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center"
                                    >
                                        <FaEdit className="mr-1" />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        disabled={deleting === product._id}
                                        className="flex-1 bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
                                    >
                                        {deleting === product._id ? (
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

export default ProductsPage;
