'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaSpinner } from 'react-icons/fa';

interface Testimonial {
    _id: string;
    name: string;
    message: string;
    image?: string;
    rating: number;
    designation?: string;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
    loading: boolean;
}

const Testimonials = ({ testimonials, loading }: TestimonialsProps) => {
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
        }
    ];

    const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

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
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trusted by thousands of satisfied clients across India and abroad
                    </p>
                </motion.div>

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

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
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

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="/testimonials"
                        className="btn-secondary text-lg px-8 py-4"
                    >
                        Read More Testimonials
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
