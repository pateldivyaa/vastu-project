'use client';

import { motion } from 'framer-motion';
import { FaAward, FaGraduationCap, FaGlobe, FaHeart, FaStar, FaTrophy, FaMedal, FaCertificate, FaUserGraduate, FaHandsHelping } from 'react-icons/fa';

const AboutUs = () => {
    const achievements = [
        {
            icon: FaTrophy,
            title: "8 Individual World Records",
            description: "First Asian to achieve Doctorate in Vaastu Science for Paranormal activity",
            color: "from-red-500 to-red-600"
        },
        {
            icon: FaAward,
            title: "150+ Awards & Honors",
            description: "Recognition worldwide for excellence in Vastu Science",
            color: "from-red-500 to-red-600"
        },
        {
            icon: FaMedal,
            title: "India's First",
            description: "Scientific Paranormal Vastu Consultant",
            color: "from-red-500 to-red-600"
        },
        {
            icon: FaCertificate,
            title: "25+ Years Experience",
            description: "Expert in Vaastu Shastra and Paranormal Vastu",
            color: "from-red-500 to-red-600"
        }
    ];

    const worldRecords = [
        "Bravo International Books of World Records - India's First Scientific Paranormal Vaastu Consultant",
        "Ace Astrological Science Trainer - Bravo International Book of World Records",
        "Asian World Record - First Asian to achieve Doctorate in Vaastu Science",
        "India Star Book of Records - First Asian Doctorate in Vaastu Science",
        "OMG Book of Records - First Asian Doctorate in Vaastu Science",
        "World Record India - First Indian Doctorate in Vaastu Science",
        "Cholan Book of World Records - First Asian Doctorate in Vaastu Science"
    ];

    const internationalAwards = [
        "Presidential Active Lifestyle Award by President's Council on Sports, Fitness & Nutrition, USA",
        "Presidential Youth Fitness Award by Presidential Youth Fitness Program, USA",
        "Certification of Appreciation from Republic National Committee, U.S.A",
        "Letter of Appreciation from Minister of Youth Affairs & Sports, UK",
        "Certificate of Appreciation from Presidential Advisory Board member, USA",
        "International Lifetime Achievements Awards 2018, Malaysia",
        "Honorary Doctorate, Good Will Ambassador, Peace Ambassador titles"
    ];

    const nationalAwards = [
        "Bharat Ratna Shri Atal Bihari Vajpayee National Excellence Award 2019",
        "India Star Personality Award 2019",
        "India Star Passion Award 2019",
        "Indian Star Icon Award 2019",
        "India's Rising Star Award 2019",
        "Excellent Teacher Icon Award 2019",
        "India Star Proud Award 2019",
        "Extraordinary Talent Award 2019",
        "International Icon Award 2020",
        "Kalki Gaurav Sanman 2020",
        "International Excellency Award 2020",
        "Prabhat Prestigious Award 2020",
        "24 Time Excellency Award 2020",
        "URF Global Top Talent Award 2019",
        "India Star Golden Award 2020"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Matching Vastu Science World Style */}
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
                            About Us
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                            Discover the journey of India's First Scientific Paranormal Vastu Consultant
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Introduction - Clean White Background */}
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
                            <span className="text-red-600">Vastu Science World (Regd.)</span> – is Owned by{' '}
                            <span className="text-purple-600">Amb. Prof. Dr. Ketan Talsaniya</span>
                        </h2>
                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-green-600 mb-4">About Us:</h3>
                            <div className="text-lg text-gray-700 space-y-4">
                                <p><strong>Ambassador Prof. Dr. Ketan Talsaniya,</strong></p>
                                <p>Ahmedabad | Surendranagar, Gujarat. India</p>
                                <p className="text-red-600 font-semibold">Inspirational Personality | Visionary Personality</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Achievements Grid - Red Theme */}
            <section className="py-20 bg-red-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
                            Key Achievements
                        </h2>
                        <p className="text-lg text-gray-600">
                            Multiple Individual World Records & Awards Holder in Vaastu
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-red-100">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <achievement.icon className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-gray-600 text-center">
                                        {achievement.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Biography Section - Clean White */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">
                            Journey of Dr. Ketan Talsaniya
                        </h2>

                        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Dr. Ketan Talsaniya's journey is a story of determination and conviction. It's about how a person from humble beginnings with limited means and exposure, has become a prominent name in Paranormal Vaastu in India and abroad.
                                </p>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    He was born in Dhandhuka Taluka about 100 kilometers from Ahmedabad, Gujarat, India in a middle-class family. His father was a government servant and mother a housewife. His parents wanted him to study and get a good job. Dr. Ketan went on to become an electronics engineer.
                                </p>

                                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                                    <p className="text-gray-700 font-semibold italic">
                                        "One line in a book can change your life" - This proved true in his life. An instance that occurred when he was eight years old, left an indelible impression on him.
                                    </p>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    The saying, "One line in a book can change your life," proved true in his life. An instance that occurred when he was eight years old, left an indelible impression on him. It was the festival of Holi and they were celebrating it by burning the pyre. An elderly woman was carrying food in a vessel. The children, one of whom was Dr. Ketan, approached the lady and asked for some food.
                                </p>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    She humiliated the children and hurt them with her rude comments. Dr. Ketan felt that he was treated in this manner because he came from such a humble background. Right then, he resolved to create an identity of his own. He decided that he would achieve great heights where people will come to him for guidance and help.
                                </p>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Discovery</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        One of the qualities of an engineer is having an analytical mind. Dr. Ketan was curious about knowing new things. He came in touch with a person who read books on Astrology and Vaastu. He became curious about those subjects. No one in his family ever had anything to do with the occult sciences.
                                    </p>
                                </div>

                                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Invention</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        <strong className="text-red-600">He is an inventor of Paranormal Vaastu.</strong> He undertook extensive research on industrial and residential properties. He wrote a thesis titled "An effect of Paranormal Activities in Vastu" and earned a Doctorate in Vaastu Science.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* World Records Section - Red Theme */}
            <section className="py-20 bg-red-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
                            World Records
                        </h2>
                        <p className="text-lg text-gray-600">
                            Recognized achievements in Vastu Science
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {worldRecords.map((record, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-red-100"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FaTrophy className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-gray-700 font-medium leading-relaxed">
                                            {record}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* International Awards - Clean White */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
                            International Recognition
                        </h2>
                        <p className="text-lg text-gray-600">
                            Global appreciation and honors
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {internationalAwards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-start space-x-3">
                                    <FaGlobe className="text-red-600 text-xl mt-1 flex-shrink-0" />
                                    <p className="text-gray-700 font-medium leading-relaxed">
                                        {award}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* National Awards - Red Theme */}
            <section className="py-20 bg-red-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
                            National Awards & Honors
                        </h2>
                        <p className="text-lg text-gray-600">
                            Recognition across India
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {nationalAwards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-red-100"
                            >
                                <div className="flex items-start space-x-3">
                                    <FaMedal className="text-red-600 text-lg mt-1 flex-shrink-0" />
                                    <p className="text-gray-700 font-medium leading-relaxed">
                                        {award}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Clean White */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">
                            Mission & Vision
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                                        <FaHeart className="text-white text-xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    His mission and vision is that those houses which have been built by the people by putting their life-capital and if it claims to be haunted then there is a huge loss for owner as well as the government of that country.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                                        <FaStar className="text-white text-xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    His thinking is for world peace and humanity that no house in this beautiful world made by God, should not contain any atmosphere of desolation, sadness and negativity in any building. Every house should be full of happiness and every people of the country should be living with experience of auspicious ceremonies. May all be happy, healthy. May all dwellings and people living in those houses remain safe and peaceful.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services & Contact - Red Theme */}
            <section className="py-20 bg-red-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8">
                            Services & Contact
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                            <div className="bg-white border border-red-200 rounded-lg p-8 shadow-sm">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                                        <FaHandsHelping className="text-white text-2xl" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Vastu Consultancy</h3>
                                <p className="text-gray-700 mb-6">
                                    Prof. Dr. Talsaniya provides Vastu consultancy for Industries, Corporate, Projects, Land, Bungalow and Paranormal Vaastu services to properties in India and abroad.
                                </p>
                            </div>

                            <div className="bg-white border border-red-200 rounded-lg p-8 shadow-sm">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                                        <FaUserGraduate className="text-white text-2xl" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Education & Learning</h3>
                                <p className="text-gray-700 mb-6">
                                    You may contact Prof. Dr. Ketan Talsaniya for learning Astrology / Vaastu in classroom | Online | Correspondence or Vaastu Consultancy.
                                </p>
                            </div>
                        </div>

                        <div className="bg-red-600 rounded-lg p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                            <p className="text-lg mb-6">
                                Ready to transform your life with Vastu Science?
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:vastuscienceworld@gmail.com"
                                    className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                                >
                                    vastuscienceworld@gmail.com
                                </a>
                                <a
                                    href="/contact"
                                    className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;