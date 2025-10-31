const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// GET all workshops and seminars
router.get('/', async (req, res) => {
    try {
        const workshops = await Service.find({
            category: { $in: ['workshop', 'seminar'] },
            isActive: true
        }).sort({ createdAt: -1 });
        res.json(workshops);
    } catch (error) {
        console.error('Error fetching workshops:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET workshops by category (workshop or seminar)
router.get('/category/:category', async (req, res) => {
    try {
        const { category } = req.params;
        if (!['workshop', 'seminar'].includes(category)) {
            return res.status(400).json({ message: 'Invalid category' });
        }

        const workshops = await Service.find({
            category: category,
            isActive: true
        }).sort({ createdAt: -1 });
        res.json(workshops);
    } catch (error) {
        console.error('Error fetching workshops:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET workshop by slug
router.get('/slug/:slug', async (req, res) => {
    try {
        const workshop = await Service.findOne({
            slug: req.params.slug,
            category: { $in: ['workshop', 'seminar'] },
            isActive: true
        });
        if (!workshop) {
            return res.status(404).json({ message: 'Workshop not found' });
        }
        res.json(workshop);
    } catch (error) {
        console.error('Error fetching workshop:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET single workshop by ID
router.get('/id/:id', async (req, res) => {
    try {
        const workshop = await Service.findById(req.params.id);
        if (!workshop || !['workshop', 'seminar'].includes(workshop.category)) {
            return res.status(404).json({ message: 'Workshop not found' });
        }
        res.json(workshop);
    } catch (error) {
        console.error('Error fetching workshop:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// POST create workshop (Admin only)
router.post('/', auth, [
    body('title').notEmpty().withMessage('Title is required'),
    body('slug').notEmpty().withMessage('Slug is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('content').notEmpty().withMessage('Content is required'),
    body('image').notEmpty().withMessage('Image is required'),
    body('category').isIn(['workshop', 'seminar']).withMessage('Category must be workshop or seminar')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const workshop = new Service(req.body);
        await workshop.save();
        res.status(201).json(workshop);
    } catch (error) {
        console.error('Error creating workshop:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT update workshop (Admin only)
router.put('/:id', auth, async (req, res) => {
    try {
        const workshop = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!workshop) {
            return res.status(404).json({ message: 'Workshop not found' });
        }

        res.json(workshop);
    } catch (error) {
        console.error('Error updating workshop:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE workshop (Admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const workshop = await Service.findByIdAndDelete(req.params.id);
        if (!workshop) {
            return res.status(404).json({ message: 'Workshop not found' });
        }
        res.json({ message: 'Workshop deleted successfully' });
    } catch (error) {
        console.error('Error deleting workshop:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
