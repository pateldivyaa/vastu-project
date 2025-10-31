'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSpinner, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { galleryAPI } from '@/lib/api';

interface GalleryItem {
    _id: string;
    image: string;
    caption: string;
    category: string;
    createdAt: string;
}

const GalleryPage = () => {
    const [gallery, setGallery] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await galleryAPI.getAll();
                setGallery(response.data);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    const categories = [
        { id: 'all', name: 'All', count: gallery.length },
        { id: 'workshop', name: 'Workshops', count: gallery.filter(item => item.category === 'workshop').length },
        { id: 'seminar', name: 'Seminars', count: gallery.filter(item => item.category === 'seminar').length },
        { id: 'consultation', name: 'Consultations', count: gallery.filter(item => item.category === 'consultation').length },
        { id: 'awards', name: 'Awards', count: gallery.filter(item => item.category === 'awards').length },
        { id: 'events', name: 'Events', count: gallery.filter(item => item.category === 'events').length }
    ];

    const filteredGallery = selectedCategory === 'all'
        ? gallery
        : gallery.filter(item => item.category === selectedCategory);

    if (loading) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading gallery...</p>
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
                            Our <span className="text-gradient">Gallery</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Explore our journey through workshops, seminars, consultations,
                            awards, and special events. See the impact we've made in people's lives.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-primary-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-600'
                                    }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </motion.div>

                    {/* Gallery Grid */}
                    {filteredGallery.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredGallery.map((item, index) => (
                                <motion.div
                                    key={item._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="card overflow-hidden group cursor-pointer"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.image || '/api/placeholder/400/300'}
                                            alt={item.caption || 'Gallery image'}
                                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        {item.caption && (
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                                {item.caption}
                                            </h3>
                                        )}
                                        <div className="flex items-center text-sm text-gray-500">
                                            <FaCalendarAlt className="mr-2" />
                                            <span>
                                                {new Date(item.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📸</div>
                            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                No Images in This Category
                            </h3>
                            <p className="text-gray-600 mb-8">
                                We're working on adding more content to this category. Check back soon!
                            </p>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className="btn-primary"
                            >
                                View All Images
                            </button>
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
                            Join Our Journey
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                            Be part of our workshops, seminars, and events. Experience the
                            transformative power of Vastu science firsthand.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                                Join Our Events
                            </a>
                            <a
                                href="/services"
                                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                            >
                                Book Consultation
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;
