const mongoose = require('mongoose');
const Service = require('./models/Service');
require('dotenv').config();

const sampleServices = [
    // Vastu Services
    {
        title: 'Industry Vastu Consultation',
        slug: 'industry-vastu-consultation',
        description: 'Comprehensive Vastu analysis for industrial units, factories, and manufacturing facilities to ensure optimal energy flow and business prosperity.',
        content: `
            <h2>Industry Vastu Consultation</h2>
            <p>Our Industry Vastu consultation is specifically designed for industrial units, factories, and manufacturing facilities. We analyze the entire property to ensure optimal energy flow and business prosperity.</p>
            
            <h3>What We Cover:</h3>
            <ul>
                <li>Factory layout optimization</li>
                <li>Machinery placement analysis</li>
                <li>Office space arrangement</li>
                <li>Storage area optimization</li>
                <li>Employee welfare zone planning</li>
            </ul>
            
            <h3>Benefits:</h3>
            <ul>
                <li>Increased productivity</li>
                <li>Better employee satisfaction</li>
                <li>Reduced accidents</li>
                <li>Enhanced profitability</li>
            </ul>
        `,
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'vastu',
        features: [
            'Factory layout optimization',
            'Machinery placement analysis',
            'Office space arrangement',
            'Storage area optimization',
            'Employee welfare zone planning'
        ],
        price: 25000
    },
    {
        title: 'Residential Vastu Consultation',
        slug: 'residential-vastu-consultation',
        description: 'Complete Vastu analysis for homes and apartments to create harmonious living spaces that promote health, wealth, and happiness.',
        content: `
            <h2>Residential Vastu Consultation</h2>
            <p>Transform your home into a sanctuary of positive energy with our comprehensive residential Vastu consultation. We analyze every aspect of your living space to ensure optimal energy flow.</p>
            
            <h3>What We Cover:</h3>
            <ul>
                <li>Room-by-room analysis</li>
                <li>Furniture placement optimization</li>
                <li>Color scheme recommendations</li>
                <li>Plant and decor suggestions</li>
                <li>Remedial measures for existing issues</li>
            </ul>
        `,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'vastu',
        features: [
            'Room-by-room analysis',
            'Furniture placement optimization',
            'Color scheme recommendations',
            'Plant and decor suggestions',
            'Remedial measures for existing issues'
        ],
        price: 15000
    },
    {
        title: 'Corporate Vastu Consultation',
        slug: 'corporate-vastu-consultation',
        description: 'Professional Vastu analysis for corporate offices, business centers, and commercial spaces to enhance productivity and business success.',
        content: `
            <h2>Corporate Vastu Consultation</h2>
            <p>Optimize your business environment with our corporate Vastu consultation. We help create workspaces that promote productivity, creativity, and business success.</p>
            
            <h3>What We Cover:</h3>
            <ul>
                <li>Office layout optimization</li>
                <li>Reception area design</li>
                <li>Conference room arrangement</li>
                <li>CEO cabin positioning</li>
                <li>Employee workstation optimization</li>
            </ul>
        `,
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'vastu',
        features: [
            'Office layout optimization',
            'Reception area design',
            'Conference room arrangement',
            'CEO cabin positioning',
            'Employee workstation optimization'
        ],
        price: 30000
    },

    // Types of Vastu
    {
        title: 'Commercial Vastu',
        slug: 'commercial-vastu',
        description: 'Specialized Vastu consultation for commercial properties including shops, malls, restaurants, and retail spaces.',
        content: `
            <h2>Commercial Vastu</h2>
            <p>Boost your business success with our commercial Vastu consultation. We analyze your commercial property to ensure maximum customer attraction and business prosperity.</p>
        `,
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'types-of-vastu',
        features: [
            'Shop layout optimization',
            'Customer flow analysis',
            'Cash counter positioning',
            'Display area arrangement',
            'Storage optimization'
        ],
        price: 20000
    },
    {
        title: 'Agricultural Vastu',
        slug: 'agricultural-vastu',
        description: 'Vastu consultation for agricultural lands, farms, and agricultural businesses to ensure bountiful harvests and prosperity.',
        content: `
            <h2>Agricultural Vastu</h2>
            <p>Maximize your agricultural productivity with our specialized agricultural Vastu consultation. We help optimize your farm layout for better yields and prosperity.</p>
        `,
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'types-of-vastu',
        features: [
            'Farm layout optimization',
            'Crop rotation planning',
            'Water source positioning',
            'Storage facility arrangement',
            'Livestock area planning'
        ],
        price: 18000
    },

    // Astrology Services
    {
        title: 'Birth Chart Analysis',
        slug: 'birth-chart-analysis',
        description: 'Comprehensive birth chart analysis to understand your personality, strengths, challenges, and life path.',
        content: `
            <h2>Birth Chart Analysis</h2>
            <p>Discover your true potential with our detailed birth chart analysis. We provide insights into your personality, career path, relationships, and life challenges.</p>
        `,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'astrology',
        features: [
            'Detailed personality analysis',
            'Career guidance',
            'Relationship compatibility',
            'Health predictions',
            'Remedial measures'
        ],
        price: 5000
    },
    {
        title: 'Muhurat Selection',
        slug: 'muhurat-selection',
        description: 'Select the most auspicious time for important events like weddings, business launches, and ceremonies.',
        content: `
            <h2>Muhurat Selection</h2>
            <p>Choose the perfect time for your important life events with our expert muhurat selection service. We consider all astrological factors to ensure success.</p>
        `,
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'astrology',
        features: [
            'Wedding muhurat',
            'Business launch timing',
            'House warming ceremony',
            'Vehicle purchase timing',
            'Travel muhurat'
        ],
        price: 3000
    },

    // Numerology Services
    {
        title: 'Name Numerology',
        slug: 'name-numerology',
        description: 'Analyze the numerological significance of names to understand personality traits and life path numbers.',
        content: `
            <h2>Name Numerology</h2>
            <p>Unlock the hidden meanings in names through numerology. We analyze how names influence personality, career, and life outcomes.</p>
        `,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'numerology',
        features: [
            'Name analysis',
            'Personality insights',
            'Career guidance',
            'Compatibility analysis',
            'Name correction suggestions'
        ],
        price: 2500
    },
    {
        title: 'Business Numerology',
        slug: 'business-numerology',
        description: 'Numerological analysis for business names, launch dates, and business strategies to ensure success.',
        content: `
            <h2>Business Numerology</h2>
            <p>Optimize your business success with numerological analysis. We help choose the right business name, launch date, and strategies.</p>
        `,
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'numerology',
        features: [
            'Business name analysis',
            'Launch date selection',
            'Logo design guidance',
            'Marketing strategy',
            'Financial planning'
        ],
        price: 4000
    },

    // Education Services
    {
        title: 'Vastu Shastra Course',
        slug: 'vastu-shastra-course',
        description: 'Comprehensive Vastu Shastra course covering all aspects of ancient Indian architecture and design principles.',
        content: `
            <h2>Vastu Shastra Course</h2>
            <p>Learn the ancient science of Vastu Shastra from our expert instructors. This comprehensive course covers all aspects of Vastu principles and their practical applications.</p>
        `,
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'education',
        features: [
            'Basic Vastu principles',
            'Advanced techniques',
            'Practical applications',
            'Case studies',
            'Certification'
        ],
        price: 15000
    },
    {
        title: 'Astrology Certification Course',
        slug: 'astrology-certification-course',
        description: 'Professional astrology certification course covering birth chart analysis, predictions, and remedial measures.',
        content: `
            <h2>Astrology Certification Course</h2>
            <p>Become a certified astrologer with our comprehensive course. Learn birth chart analysis, predictions, and remedial measures from experienced practitioners.</p>
        `,
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'education',
        features: [
            'Birth chart analysis',
            'Planetary positions',
            'Predictive techniques',
            'Remedial measures',
            'Professional certification'
        ],
        price: 25000
    },

    // Awards & Achievements
    {
        title: 'World Record - Fastest Vastu Analysis',
        slug: 'world-record-fastest-vastu-analysis',
        description: 'Awarded for completing the fastest Vastu analysis of a 10,000 sq ft property in just 2 hours.',
        content: `
            <h2>World Record - Fastest Vastu Analysis</h2>
            <p>We are proud to hold the world record for the fastest Vastu analysis of a large commercial property. This achievement demonstrates our expertise and efficiency in Vastu consultation.</p>
        `,
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'awards',
        features: [
            'World Record Holder',
            'Fastest Analysis',
            '10,000 sq ft Property',
            '2 Hours Completion',
            'International Recognition'
        ],
        price: 0
    },
    {
        title: 'Best Vastu Consultant Award 2023',
        slug: 'best-vastu-consultant-award-2023',
        description: 'Recognized as the Best Vastu Consultant of 2023 by the International Vastu Association.',
        content: `
            <h2>Best Vastu Consultant Award 2023</h2>
            <p>We are honored to receive the Best Vastu Consultant Award 2023 from the International Vastu Association. This recognition reflects our commitment to excellence and client satisfaction.</p>
        `,
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'awards',
        features: [
            'International Recognition',
            'Best Consultant 2023',
            'Excellence Award',
            'Client Satisfaction',
            'Professional Achievement'
        ],
        price: 0
    },

    // News
    {
        title: 'Scientific Approach to Vastu Gains Recognition',
        slug: 'scientific-approach-vastu-recognition',
        description: 'Our innovative scientific approach to Vastu consultation has gained international recognition and is being adopted by practitioners worldwide.',
        content: `
            <h2>Scientific Approach to Vastu Gains Recognition</h2>
            <p>Our groundbreaking scientific approach to Vastu consultation has revolutionized the field and gained international recognition. This innovative methodology combines ancient wisdom with modern science.</p>
        `,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'news',
        features: [
            'International Recognition',
            'Scientific Methodology',
            'Innovation in Vastu',
            'Global Adoption',
            'Media Coverage'
        ],
        price: 0
    },

    // Workshops
    {
        title: 'Vastu Workshop for Beginners',
        slug: 'vastu-workshop-beginners',
        description: 'Interactive workshop introducing the basics of Vastu Shastra for beginners and enthusiasts.',
        content: `
            <h2>Vastu Workshop for Beginners</h2>
            <p>Join our interactive workshop designed for beginners who want to learn the fundamentals of Vastu Shastra. This hands-on session covers basic principles and practical applications.</p>
        `,
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'workshop',
        features: [
            'Basic Vastu Principles',
            'Hands-on Learning',
            'Interactive Session',
            'Practical Applications',
            'Certificate of Participation'
        ],
        price: 2000
    },

    // Seminars
    {
        title: 'Advanced Vastu Seminar',
        slug: 'advanced-vastu-seminar',
        description: 'Comprehensive seminar on advanced Vastu techniques for professionals and serious practitioners.',
        content: `
            <h2>Advanced Vastu Seminar</h2>
            <p>Join our comprehensive seminar on advanced Vastu techniques. This intensive program is designed for professionals and serious practitioners who want to deepen their knowledge.</p>
        `,
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'seminar',
        features: [
            'Advanced Techniques',
            'Professional Level',
            'Intensive Program',
            'Expert Instructors',
            'Professional Certification'
        ],
        price: 5000
    }
];

const seedServices = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://pateldivyad3233_db_user:o791s0XmVT9PuMLD@cluster0.4dsrbry.mongodb.net/vastu_consultation?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB');

        // Clear existing services
        await Service.deleteMany({});
        console.log('Cleared existing services');

        // Insert sample services
        await Service.insertMany(sampleServices);
        console.log('Seeded services successfully');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding services:', error);
        process.exit(1);
    }
};

seedServices();