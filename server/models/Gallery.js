const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        default: 'events',
        enum: ['workshop', 'seminar', 'consultation', 'awards', 'events']
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Gallery', gallerySchema);
