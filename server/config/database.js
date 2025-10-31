const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://pateldivyad3233_db_user:o791s0XmVT9PuMLD@cluster0.4dsrbry.mongodb.net/vastu_consultation?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
