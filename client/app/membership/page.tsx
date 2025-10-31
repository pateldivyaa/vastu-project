'use client';

import { motion } from 'framer-motion';
import { FaCrown, FaHandshake, FaCertificate, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaStar, FaUsers, FaBuilding, FaGraduationCap } from 'react-icons/fa';

const MembershipPage = () => {
    const primeBenefits = [
        {
            icon: FaBuilding,
            title: "Annual Vaastu Visit",
            description: "Vaastu visit at your any one property once in a year, as complementary Consultancy for your Industry, Corporate office or Bungalow.",
            note: "To and From fare, Accommodation, Food, Pick up and drop facility provided by Member."
        },
        {
            icon: FaCertificate,
            title: "Membership Certificate",
            description: "Official membership certificate recognizing your Prime Member status."
        },
        {
            icon: FaPhone,
            title: "On Call Guidance",
            description: "On call guidance as and when required for your 3 property of Vaastu.",
            note: "Two times on call guidance per property"
        },
        {
            icon: FaHandshake,
            title: "Contract Availability",
            description: "Availability of Vaastu Consultancy Contract for your Sister Concern organisation or Group of Companies."
        }
    ];

    const associateBenefits = [
        {
            icon: FaStar,
            title: "Brand Usage Rights",
            description: "Use the Name and Logo of Vastu Science World"
        },
        {
            icon: FaUsers,
            title: "Dr. Ketan Talsaniya Branding",
            description: "Use the Face and Name of Dr Ketan Talsaniya"
        },
        {
            icon: FaCertificate,
            title: "Official Certificates",
            description: "Certificate of Associate Member, Authorised Business Associates Certificate, Appreciation Certificate"
        },
        {
            icon: FaGraduationCap,
            title: "Free Workshop Access",
            description: "Free entry for Workshop, Seminars etc. If any"
        },
        {
            icon: FaHandshake,
            title: "Direct Meeting Access",
            description: "Meeting with Dr Ketan Talsaniya, if required"
        },
        {
            icon: FaPhone,
            title: "Online Guidance",
            description: "Guidance provided by Dr Ketan Talsaniya for Vaastu Shastra in online mode"
        }
    ];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section - Matching About/Home Style */}
            <section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-20 md:py-28 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${process.env.NEXT_PUBLIC_MEMBERSHIP_HERO_URL || ''})`,
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
                            Membership
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                            Join India's First Scientific Paranormal Vastu Consultant's exclusive membership programs
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Prime Membership Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Prime Member Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6">
                                <FaCrown className="text-white text-3xl" />
                            </div>
                            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                                Prime Member
                            </h2>
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                                <p className="text-lg text-gray-700 font-semibold">
                                    "Prime Membership" is only available to Industries/Industrialist, Corporate/Corporate Directors, Architects or similar Ownership.
                                </p>
                            </div>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
                                <p className="text-xl font-semibold text-gray-900">
                                    Duration: <span className="text-red-600">3 Years</span>
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {primeBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <benefit.icon className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-2">
                                                {benefit.description}
                                            </p>
                                            {benefit.note && (
                                                <p className="text-sm text-gray-600 italic">
                                                    {benefit.note}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Charges Notice */}
                        <div className="text-center">
                            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
                                <h3 className="text-2xl font-bold mb-2">MEMBERSHIP CHARGES ARE APPLICABLE</h3>
                                <p className="text-lg">Feel free to contact us for pricing details</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Associate Membership Section */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Associate Member Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6">
                                <FaHandshake className="text-white text-3xl" />
                            </div>
                            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                                Associate Member
                            </h2>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                                <p className="text-lg text-gray-700 font-semibold">
                                    "ASSOCIATE MEMBERSHIP" IS ONLY AVAILABLE TO VASTU CONSULTANT OR VASTU RELATED SERVICE/PRODUCT SELLER.
                                </p>
                            </div>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {associateBenefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <benefit.icon className="text-white text-2xl" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Charges Notice */}
                        <div className="text-center">
                            <div className="bg-red-600 text-white rounded-lg p-6 mb-8">
                                <h3 className="text-2xl font-bold mb-2">MEMBERSHIP CHARGES ARE APPLICABLE</h3>
                                <p className="text-lg">Feel free to contact us for pricing details</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8">
                            Ready to Join Our Community?
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            Contact us today to learn more about our membership programs and how they can benefit you.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                                    <FaPhone className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-lg font-semibold text-red-600">+91 70692 00777</p>
                                <p className="text-sm text-gray-600">Available 24/7</p>
                            </div>

                            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                                    <FaEnvelope className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-lg font-semibold text-red-600">vastuscienceworld@gmail.com</p>
                                <p className="text-sm text-gray-600">We respond within 24 hours</p>
                            </div>

                            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                                    <FaMapMarkerAlt className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                                <p className="text-lg font-semibold text-red-600">Ahmedabad, India</p>
                                <p className="text-sm text-gray-600">Serving worldwide</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default MembershipPage;
