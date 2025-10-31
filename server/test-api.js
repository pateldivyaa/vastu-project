const mongoose = require('mongoose');
const Admin = require('./models/Admin');
require('dotenv').config();

const testAPI = async () => {
    try {
        // Connect to database
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://pateldivyad3233_db_user:o791s0XmVT9PuMLD@cluster0.4dsrbry.mongodb.net/vastu_consultation?retryWrites=true&w=majority&appName=Cluster0');
        console.log('✅ Database connected successfully');

        // Check if admin exists
        const existingAdmin = await Admin.findOne({});
        if (existingAdmin) {
            console.log('✅ Admin user exists:', existingAdmin.email);
        } else {
            console.log('❌ No admin user found. Creating one...');
            const admin = new Admin({
                email: 'admin@vastu.com',
                password: 'admin123'
            });
            await admin.save();
            console.log('✅ Admin user created:', admin.email);
        }

        // Test services endpoint
        const Service = require('./models/Service');
        const services = await Service.find({});
        console.log(`✅ Found ${services.length} services in database`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
};

testAPI();
