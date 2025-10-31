'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { confirmationsAPI } from '@/lib/api';

interface ConfirmationFormData {
    name: string;
    organization?: string;
    position?: string;
    email: string;
    phone: string;
    acceptedTerms: boolean;
}

const TermsAndConditionsPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ConfirmationFormData>();

    const onSubmit = async (data: ConfirmationFormData) => {
        setIsSubmitting(true);
        try {
            await confirmationsAPI.create(data);
            toast.success('Confirmation submitted successfully.');
            reset();
        } catch (error) {
            toast.error('Failed to submit confirmation. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Hero - redesigned to match About/Home with optional background image */}
            <section className="relative  bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20 md:py-28 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_TERMS_HERO_URL || ''})`,
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
                            Terms and Conditions
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                            Review and accept the terms before submitting your Vaastu visit / guidance confirmation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content and Form */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Terms Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                        I/We agreed/Confirm your Guidance for our Industry/Office/Residence/Property as per our Indian Ancient Architectural Science – Vaastu Shastra.
                                    </p>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Terms and conditions:</h3>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-xs font-bold">1</span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">
                                                You may capture photos or shoot videos at our premises during Guidance for your social media and website upload purpose.
                                            </p>
                                        </div>

                                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-xs font-bold">2</span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">
                                                I/We will be followed your instructions/guidance completely.
                                            </p>
                                        </div>

                                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-xs font-bold">3</span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">
                                                I/We agreed all others, whatever it may be in verbal communication/Discussion.
                                            </p>
                                        </div>

                                        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-white text-xs font-bold">4</span>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">
                                                Subject to Ahmedabad jurisdiction.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                            <h4 className="font-semibold text-gray-900 mb-2">Note:</h4>
                                            <p className="text-gray-700">
                                                Pick up and drop arrangement will be done by you including Ahmedabad & within 120 KM from Ahmedabad. Above 120 KM, Accommodation (if needed) and To & from travel charges borne by you for any kind of transportation mode.
                                            </p>
                                        </div>

                                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                            <h4 className="font-semibold text-gray-900 mb-2">Note:</h4>
                                            <p className="text-gray-700">
                                                '*' fields are mandatory.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Confirmation Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Confirmation Form</h2>
                                    <p className="text-gray-600">Please fill out the form below to confirm your acceptance of our terms and conditions.</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                                            <input
                                                type="text"
                                                {...register('name', { required: 'Name is required' })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Your Name"
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                                            <input
                                                type="text"
                                                {...register('position')}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Position"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name</label>
                                            <input
                                                type="text"
                                                {...register('organization')}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Organization Name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Contact No *</label>
                                            <input
                                                type="tel"
                                                {...register('phone', { required: 'Contact number is required' })}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                                placeholder="Contact No"
                                            />
                                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                        <input
                                            type="email"
                                            {...register('email', { required: 'Email is required' })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                            placeholder="Email"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                                    </div>

                                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                        <input
                                            type="checkbox"
                                            id="acceptedTerms"
                                            {...register('acceptedTerms', { required: true })}
                                            className="w-5 h-5 mt-1 flex-shrink-0"
                                        />
                                        <label htmlFor="acceptedTerms" className="text-sm text-gray-700 leading-relaxed">
                                            I/We accept your terms and conditions for your Vaastu visit/Guidance.
                                        </label>
                                        {errors.acceptedTerms && <p className="text-sm text-red-600 ml-2">Required</p>}
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <FaSpinner className="animate-spin mr-2" />
                                                    Submitting...
                                                </span>
                                            ) : (
                                                'Submit'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditionsPage;


