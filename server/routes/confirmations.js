const express = require('express');
const router = express.Router();
const Confirmation = require('../models/Confirmation');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// POST create confirmation submission
router.post('/', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').notEmpty().withMessage('Contact number is required'),
    body('acceptedTerms').equals('true').withMessage('Terms acceptance is required').optional({ nullable: true })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const payload = {
            name: req.body.name,
            organization: req.body.organization || '',
            position: req.body.position || '',
            email: req.body.email,
            phone: req.body.phone,
            acceptedTerms: Boolean(req.body.acceptedTerms)
        };

        const confirmation = new Confirmation(payload);
        await confirmation.save();
        res.status(201).json({ message: 'Confirmation submitted successfully', confirmation });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET all confirmations (Admin only)
router.get('/', auth, async (req, res) => {
    try {
        const confirmations = await Confirmation.find().sort({ createdAt: -1 });
        res.json(confirmations);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET single confirmation (Admin only)
router.get('/:id', auth, async (req, res) => {
    try {
        const confirmation = await Confirmation.findById(req.params.id);
        if (!confirmation) {
            return res.status(404).json({ message: 'Confirmation not found' });
        }
        res.json(confirmation);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE confirmation (Admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const confirmation = await Confirmation.findByIdAndDelete(req.params.id);
        if (!confirmation) {
            return res.status(404).json({ message: 'Confirmation not found' });
        }
        res.json({ message: 'Confirmation deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;


