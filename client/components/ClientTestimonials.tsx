'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { testimonialsAPI } from '@/lib/api';

interface Testimonial {
    _id: string;
    name: string;
    designation: string;
    message: string;
    rating: number;
    image?: string;
    createdAt: string;
}

const ClientTestimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    // Fallback testimonials in case API is not available
    const fallbackTestimonials = [
        {
            _id: '1',
            name: 'Jay Bhagwani',
            designation: 'Industrialist',
            message: 'I am a believer and faith about our ancient science like Vastu and Astrology. I was facing legal, social and finance issues with around decades of period. I was depressed and tired about all this, and question was that how to overcome this situation. I was searching for solutions but not getting at all. Than someone recommended me to Dr. Ketan Talsaniya, a well experienced Vastu and Paranormal Vastu adviser, He visited my house and business place, advised as per Vastu Shastra. I completely followed all guidance and suggestions. Within a short period we felt improvements on all, and left behind our all issues. After that, till now he taken care of all our properties as per vastu related problems, and became our family adviser. I have bold faith on Dr. Ketan Talsaniya about his knowledge, transparency and honesty. I recommend Dr Ketan Talsaniya – Vastu Science World for your property with genuine, honest with reliable Vastu advice. Thanks a lot, and wishing you to guide the affected people, like me.',
            rating: 5,
            createdAt: new Date().toISOString()
        },
        {
            _id: '2',
            name: 'Paresh Gosaliya',
            designation: 'Businessman | Parco Agency',
            message: 'This is long back 10 years ago, we were suffering from financial crises and social problems in our life. There was a huge loss faced in business with losing our social status. We were fed up with this entire situation. We were not getting any way to get out of this. One day, We came in contact with Dr. Ketan Talsaniya through our reliable sources. We shared our problem with him. He gave us some solutions regarding VASTUSHASTRA for our premises. Through his prompt and satisfactory guidance, now we are out of our problems. It helped us to acquire good financial capacity. All things are getting positive with us. Since that day, he is regularly guiding us. Now we are very much satisfied with all his solutions. We really appreciate his work and found him very much faithful towards his work.',
            rating: 5,
            createdAt: new Date().toISOString()
        },
        {
            _id: '3',
            name: 'Sharad Shah',
            designation: 'Director, Bracker India',
            message: 'After inspected our house Shri Ketan Talsaniya is also looked after our farm house scheme in Abu Road and we follow the Vastu there as well and we keep all the trust in him and his abilities.',
            rating: 5,
            createdAt: new Date().toISOString()
        },
        {
            _id: '4',
            name: 'Sushil Khera',
            designation: 'Client',
            message: 'Around 9 years back, we shifted to a bungalow in Ahmedabad and came across with few issues the place. There was the time where we came in contact with Shri Ketan Talsaniya, where he inspected our house and followed his advice our House Vastu and till date we keep it the same and follow it had no issues.',
            rating: 5,
            createdAt: new Date().toISOString()
        }
    ];

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                const response = await testimonialsAPI.getAll();
                if (response.data && response.data.length > 0) {
                    setTestimonials(response.data);
                } else {
                    // Use fallback testimonials if no data from API
                    setTestimonials(fallbackTestimonials);
                }
            } catch (error) {
                console.warn('Testimonials API not available, using fallback data:', error);
                // Use fallback testimonials if API fails
                setTestimonials(fallbackTestimonials);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    if (loading) {
        return (
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center">
                        <FaSpinner className="animate-spin text-4xl text-primary-600 mx-auto mb-4" />
                        <p className="text-gray-600">Loading testimonials...</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
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
                        Trusted by Our <span className="text-gradient">Valued Clients</span>
                    </h2>
                </motion.div>

                {/* Rating Display */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
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

                {/* Testimonial Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto"
                >
                    <div className="card p-8 relative">
                        {/* Quote Icon */}
                        <div className="absolute top-4 left-4 text-primary-200">
                            <FaQuoteLeft className="text-3xl" />
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors duration-300"
                        >
                            <FaChevronLeft className="text-2xl" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors duration-300"
                        >
                            <FaChevronRight className="text-2xl" />
                        </button>

                        {/* Testimonial Content */}
                        <div className="px-12">
                            {/* Rating */}
                            <div className="flex items-center justify-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`text-sm ${i < testimonials[currentTestimonial].rating ? 'text-yellow-400' : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Message */}
                            <p className="text-gray-600 mb-6 leading-relaxed text-center">
                                {testimonials[currentTestimonial].message}
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                                    <span className="text-primary-600 font-bold text-lg">
                                        {testimonials[currentTestimonial].name.charAt(0)}
                                    </span>
                                </div>
                                <div className="text-center">
                                    <h4 className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                                    <p className="text-sm text-gray-600">{testimonials[currentTestimonial].designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
