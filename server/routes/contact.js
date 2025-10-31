const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// POST create contact message
router.post('/', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').notEmpty().withMessage('Phone is required'),
    body('message').notEmpty().withMessage('Message is required')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json({ message: 'Message sent successfully', contact });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET all contact messages (Admin only)
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET single contact message (Admin only)
router.get('/:id', auth, async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact message not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT mark contact as read (Admin only)
router.put('/:id/read', auth, async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { isRead: true },
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({ message: 'Contact message not found' });
        }

        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE contact message (Admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact message not found' });
        }
        res.json({ message: 'Contact message deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
