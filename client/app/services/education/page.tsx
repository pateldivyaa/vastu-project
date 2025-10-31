'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptop, FaBook, FaCertificate, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaStar, FaUsers, FaChalkboardTeacher, FaGlobe, FaAward, FaLightbulb } from 'react-icons/fa';

const EducationPage = () => {
    const educationPrograms = [
        {
            icon: FaGraduationCap,
            title: "Classroom Learning",
            description: "Traditional classroom-based learning with hands-on experience and direct interaction with Dr. Ketan Talsaniya.",
            features: ["In-person instruction", "Hands-on practice", "Direct mentorship", "Group discussions", "Practical demonstrations"]
        },
        {
            icon: FaLaptop,
            title: "Online Learning",
            description: "Flexible online learning programs that allow you to study from anywhere in the world at your own pace.",
            features: ["Live online sessions", "Recorded lectures", "Interactive Q&A", "Digital materials", "Flexible scheduling"]
        },
        {
            icon: FaBook,
            title: "Correspondence Course",
            description: "Self-paced learning through comprehensive study materials and correspondence with expert guidance.",
            features: ["Study materials", "Assignment guidance", "Email support", "Self-paced learning", "Certificate upon completion"]
        },
        {
            icon: FaCertificate,
            title: "Certification Programs",
            description: "Professional certification programs in Vastu, Astrology, and Numerology with recognized credentials.",
            features: ["Professional certification", "Industry recognition", "Career advancement", "Expert validation", "Lifetime validity"]
        }
    ];

    const subjects = [
        {
            icon: FaStar,
            title: "Vastu Shastra",
            description: "Learn the ancient science of architecture and space planning for harmonious living."
        },
        {
            icon: FaGlobe,
            title: "Astrology",
            description: "Master the art of reading celestial patterns and their influence on human life."
        },
        {
            icon: FaLightbulb,
            title: "Numerology",
            description: "Discover the power of numbers and their significance in shaping destiny."
        },
        {
            icon: FaAward,
            title: "Paranormal Vastu",
            description: "Specialized training in paranormal Vastu consultation and spiritual healing."
        }
    ];

    const benefits = [
        {
            icon: FaUsers,
            title: "Expert Instruction",
            description: "Learn from India's First Scientific Paranormal Vastu Consultant with 25+ years of experience."
        },
        {
            icon: FaCertificate,
            title: "Professional Certification",
            description: "Receive recognized certificates that enhance your credibility and career prospects."
        },
        {
            icon: FaGlobe,
            title: "Global Recognition",
            description: "Join a community of practitioners recognized worldwide for their expertise."
        },
        {
            icon: FaLightbulb,
            title: "Practical Application",
            description: "Gain hands-on experience with real-world case studies and practical applications."
        }
    ];

    const processSteps = [
        {
            icon: FaPhone,
            title: "Enrollment",
            description: "Contact us to discuss your learning goals and choose the most suitable program."
        },
        {
            icon: FaBook,
            title: "Study Materials",
            description: "Receive comprehensive study materials and access to learning resources."
        },
        {
            icon: FaChalkboardTeacher,
            title: "Learning Sessions",
            description: "Attend regular learning sessions with expert instruction and guidance."
        },
        {
            icon: FaCertificate,
            title: "Certification",
            description: "Complete assessments and receive your professional certification."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Matching About/Membership/Contact Style */}
            <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
                {/* Background Elements - Similar to original */}
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
                            Education & Learning
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                            Master the ancient sciences of Vastu, Astrology, and Numerology with India's First Scientific Paranormal Vastu Consultant
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Programs Overview Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Our Educational Programs
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Choose from various learning formats to suit your schedule and learning preferences
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {educationPrograms.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <program.icon className="text-white text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {program.title}
                                        </h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            {program.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {program.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                    <FaCheckCircle className="text-red-600 mr-2 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subjects Section */}
            <section className="py-20 bg-red-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Subjects We Teach
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive education in the ancient sciences of Vastu, Astrology, and Numerology
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {subjects.map((subject, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <subject.icon className="text-white text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {subject.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {subject.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Why Choose Our Education Programs?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Experience world-class education with practical applications and professional recognition
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <benefit.icon className="text-white text-3xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-red-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
                            How to Enroll
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Simple steps to begin your journey in the ancient sciences
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <step.icon className="text-white text-2xl" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8">
                            Start Your Learning Journey Today
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Join thousands of students who have transformed their lives through our comprehensive education programs in Vastu, Astrology, and Numerology.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-lg">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                                    <FaPhone className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-lg font-semibold text-red-600">+91 70692 00777</p>
                                <p className="text-sm text-gray-600">Available 24/7</p>
                            </div>

                            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-lg">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                                    <FaEnvelope className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-lg font-semibold text-red-600">vastuscienceworld@gmail.com</p>
                                <p className="text-sm text-gray-600">We respond within 24 hours</p>
                            </div>

                            <div className="flex flex-col items-center p-6 bg-red-50 rounded-xl shadow-lg">
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

export default EducationPage;
