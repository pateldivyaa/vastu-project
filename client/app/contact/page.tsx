'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSpinner } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { contactAPI } from '@/lib/api';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            await contactAPI.create(data);
            toast.success('Message sent successfully! We will get back to you soon.');
            reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: FaPhone,
            title: 'Call Us Now',
            value: '+91 70692 00777',
            href: 'tel:+917069200777',
            description: 'Available 24/7 for urgent consultations'
        },
        {
            icon: FaEnvelope,
            title: 'Send a Message',
            value: 'vastuscienceworld@gmail.com',
            href: 'mailto:vastuscienceworld@gmail.com',
            description: 'We respond within 24 hours'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Location',
            value: 'India',
            href: '#',
            description: 'Serving clients worldwide'
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section - Matching About/Home Style */}
            <section className="relative  bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20 md:py-28 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_CONTACT_HERO_URL || ''})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                {/* Background Elements - Matching About page */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-red-700/20 to-red-600/20"></div>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>

                <div className="relative z-10 container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                            Get in touch with India's First Scientific Paranormal Vastu Consultant for expert guidance and consultation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form, Map & Info */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Map & Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 space-y-8"
                        >
                            {/* Google Map */}
                            <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                                <iframe
                                    title="Google Map - Ahmedabad"
                                    src={process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED_URL || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.803803497035!2d72.571362!3d23.128284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f1b7c3b0a1%3A0x0000000000000000!2sAhmedabad!5e0!3m2!1sen!2sin!4v1700000000000'}
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Contact Information Card */}
                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                                        Vastu Science World
                                    </h3>
                                    <p className="text-gray-600">Scientific Ritual Spiritual</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                            <FaPhone className="text-white text-sm" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">+91 70692 00777</p>
                                            <p className="text-sm text-gray-600">Call Us Now</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                            <FaEnvelope className="text-white text-sm" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">vastuscienceworld@gmail.com</p>
                                            <p className="text-sm text-gray-600">Send a Message</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                            <FaMapMarkerAlt className="text-white text-sm" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">www.vastuscienceworld.com</p>
                                            <p className="text-sm text-gray-600">Visit Our Website</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <p className="text-sm text-gray-600 mb-3 text-center">Follow Us</p>
                                    <div className="flex justify-center space-x-4">
                                        <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                            <span className="text-xs font-bold">f</span>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                                            <span className="text-xs font-bold">in</span>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors">
                                            <span className="text-xs">📷</span>
                                        </a>
                                        <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                                            <span className="text-xs">▶</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Send a Message</h2>
                                    <p className="text-gray-600">If you have any specific queries, please use the form below. We will get back to you at the earliest.</p>
                                    <p className="text-sm text-red-600 font-semibold mt-2">Note: All fields are mandatory.</p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            {...register('name', { required: 'Name is required' })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your full name"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid email address'
                                                }
                                            })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your email address"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            {...register('phone', { required: 'Phone number is required' })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your phone number"
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            {...register('message', { required: 'Message is required' })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                                            placeholder="Tell us about your requirements..."
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <FaSpinner className="animate-spin mr-2" />
                                                Sending...
                                            </span>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Frequently Asked <span className="text-gradient">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Common questions about our services and consultation process
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                question: "What is Vastu Shastra?",
                                answer: "Vastu Shastra is an ancient Indian science of architecture and design that helps create harmonious living and working spaces by balancing the five elements of nature."
                            },
                            {
                                question: "How long does a consultation take?",
                                answer: "A typical consultation takes 2-4 hours depending on the size and complexity of the property. We provide detailed analysis and recommendations."
                            },
                            {
                                question: "Do you provide online consultations?",
                                answer: "Yes, we offer both in-person and online consultations. Online consultations are conducted via video calls with detailed property analysis."
                            },
                            {
                                question: "What is the cost of consultation?",
                                answer: "Consultation fees vary based on the type and size of the property. Please contact us for a personalized quote."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card p-6"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
