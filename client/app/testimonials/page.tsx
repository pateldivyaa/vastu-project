'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaSpinner } from 'react-icons/fa';
import { testimonialsAPI } from '@/lib/api';

interface Testimonial {
    _id: string;
    name: string;
    message: string;
    image?: string;
    rating: number;
    designation?: string;
    createdAt: string;
}

const TestimonialsPage = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await testimonialsAPI.getAll();
                setTestimonials(response.data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const defaultTestimonials = [
        {
            name: 'Jay Bhagwani',
            designation: 'Industrialist',
            message: 'I am a believer and faith about our ancient science like Vastu and Astrology. I was facing legal, social and finance issues with around decades of period. I was depressed and tired about all this, and question was that how to overcome this situation. I was searching for solutions but not getting at all. Than someone recommended me to Dr. Ketan Talsaniya, a well experienced Vastu and Paranormal Vastu adviser, He visited my house and business place, advised as per Vastu Shastra. I completely followed all guidance and suggestions. Within a short period we felt improvements on all, and left behind our all issues.',
            rating: 5
        },
        {
            name: 'Paresh Gosaliya',
            designation: 'Businessman | Parco Agency',
            message: 'This is long back 10 years ago, we were suffering from financial crises and social problems in our life. There was a huge loss faced in business with losing our social status. We were fed up with this entire situation. We were not getting any way to get out of this. One day, We came in contact with Dr. Ketan Talsaniya through our reliable sources. We shared our problem with him. He gave us some solutions regarding VASTUSHASTRA for our premises. Through his prompt and satisfactory guidance, now we are out of our problems.',
            rating: 5
        },
        {
            name: 'Sharad Shah',
            designation: 'Director, Bracker India',
            message: 'After inspected our house Shri Ketan Talsaniya is also looked after our farm house scheme in Abu Road and we follow the Vastu there as well and we keep all the trust in him and his abilities.',
            rating: 5
        },
        {
            name: 'Sushil Khera',
            designation: 'Client',
            message: 'Around 9 years back, we shifted to a bungalow in Ahmedabad and came across with few issues the place. There was the time where we came in contact with Shri Ketan Talsaniya, where he inspected our house and followed his advice our House Vastu and till date we keep it the same and follow it had no issues.',
            rating: 5
        },
        {
            name: 'Vineeta Dave',
            designation: 'Client',
            message: 'Dr Ketan Talsania is an intelligent vaastu consultant and teacher, his visit to my home proved to be a blessing for my family. He asked us to do some changes in our house balcony, and we did the necessary changes and our work started flowing easily. Thank you Guruji',
            rating: 5
        },
        {
            name: 'Ankur Patel',
            designation: 'Student',
            message: 'Great training in Vastu and Astrology. Explained everything clearly and made it easy to understand. I learned a lot and feel more confident now. Highly recommended!',
            rating: 5
        }
    ];

    const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

    if (loading) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center">
                <div className="text-center">
                    <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-600">Loading testimonials...</p>
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
                            Client <span className="text-gradient">Testimonials</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Read what our satisfied clients have to say about their experiences
                            with our Vastu consultation services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Trust Badge */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="bg-gradient-to-r from-primary-50 to-cream rounded-2xl p-8 max-w-4xl mx-auto">
                            <div className="flex items-center justify-center mb-4">
                                <div className="flex items-center">
                                    <span className="text-4xl font-bold text-primary-600 mr-2">EXCELLENT</span>
                                    <div className="flex items-center ml-4">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-xl" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 text-lg">
                                Based on <strong>19 reviews</strong> - Trusted by clients worldwide
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Verified by Trustindex - Universal Symbol of Trust
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card p-8 relative"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-4 left-4 text-primary-200">
                                    <FaQuoteLeft className="text-3xl" />
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-sm ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Message */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {testimonial.message}
                                </p>

                                {/* Author */}
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-primary-600 font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        {testimonial.designation && (
                                            <p className="text-sm text-gray-600">{testimonial.designation}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Success <span className="text-gradient">Stories</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real transformations achieved through our Vastu consultation services
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'Financial Transformation',
                                description: 'Client overcame financial crises and business losses through proper Vastu implementation.',
                                result: 'Business recovery and financial stability achieved within 6 months'
                            },
                            {
                                title: 'Family Harmony',
                                description: 'Resolved family conflicts and social problems through residential Vastu corrections.',
                                result: 'Improved family relationships and social status'
                            },
                            {
                                title: 'Career Growth',
                                description: 'Professional advancement achieved through corporate Vastu consultation.',
                                result: 'Promotion and career growth within 3 months'
                            },
                            {
                                title: 'Health & Wellbeing',
                                description: 'Improved health and overall wellbeing through Vastu remedies.',
                                result: 'Better health and positive energy in the household'
                            }
                        ].map((story, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card p-8"
                            >
                                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                                    {story.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {story.description}
                                </p>
                                <div className="bg-primary-50 rounded-lg p-4">
                                    <p className="text-primary-700 font-semibold">
                                        Result: {story.result}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
                            Ready to Transform Your Life?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                            Join thousands of satisfied clients who have experienced positive changes
                            through our expert Vastu consultation services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                                Book Consultation
                            </a>
                            <a
                                href="/services"
                                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                            >
                                View Services
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsPage;
