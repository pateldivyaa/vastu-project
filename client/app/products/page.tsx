'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaSpinner, FaShoppingCart, FaStar } from 'react-icons/fa';
import { productsAPI } from '@/lib/api';

interface Product {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    features?: string[];
}

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productsAPI.getAll();
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading products...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-cream to-beige">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-6">
                            Our <span className="text-gradient">Products</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Discover our range of Vastu remedies, products, books, and accessories
                            designed to bring positive energy to your life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="card overflow-hidden group"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={product.image || '/api/placeholder/400/300'}
                                            alt={product.title}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                                                {product.category}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <div className="flex items-center bg-white bg-opacity-90 rounded-full px-3 py-1">
                                                <FaStar className="text-yellow-400 mr-1" />
                                                <span className="text-sm font-medium">4.8</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-playfair font-bold text-gray-900 mb-3">
                                            {product.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {product.description}
                                        </p>

                                        {product.features && product.features.length > 0 && (
                                            <ul className="space-y-2 mb-4">
                                                {product.features.slice(0, 3).map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-2xl font-bold text-primary-600">
                                                ₹{product.price}
                                            </div>
                                            <button className="flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300">
                                                <FaShoppingCart className="mr-2" />
                                                Add to Cart
                                            </button>
                                        </div>

                                        <Link
                                            href={`/products/${product._id}`}
                                            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
                                        >
                                            View Details
                                            <FaArrowRight className="ml-2" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📦</div>
                            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                No Products Available
                            </h3>
                            <p className="text-gray-600 mb-8">
                                We're working on adding amazing products for you. Check back soon!
                            </p>
                            <Link
                                href="/contact"
                                className="btn-primary"
                            >
                                Contact Us
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-playfair font-bold mb-6">
                            Need Custom Solutions?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                            We also provide personalized Vastu remedies and custom products
                            tailored to your specific needs and requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                                Get Custom Quote
                            </Link>
                            <Link
                                href="/services"
                                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                            >
                                View Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
