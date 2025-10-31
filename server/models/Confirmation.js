const mongoose = require('mongoose');

const confirmationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    organization: {
        type: String,
        trim: true,
        default: ''
    },
    position: {
        type: String,
        trim: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    acceptedTerms: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Confirmation', confirmationSchema);


