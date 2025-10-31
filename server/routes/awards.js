const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// GET all awards
router.get('/', async (req, res) => {
    try {
        const awards = await Service.find({
            category: 'awards',
            isActive: true
        }).sort({ createdAt: -1 });
        res.json(awards);
    } catch (error) {
        console.error('Error fetching awards:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET award by slug
router.get('/slug/:slug', async (req, res) => {
    try {
        const award = await Service.findOne({
            slug: req.params.slug,
            category: 'awards',
            isActive: true
        });
        if (!award) {
            return res.status(404).json({ message: 'Award not found' });
        }
        res.json(award);
    } catch (error) {
        console.error('Error fetching award:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET single award by ID
router.get('/id/:id', async (req, res) => {
    try {
        const award = await Service.findById(req.params.id);
        if (!award || award.category !== 'awards') {
            return res.status(404).json({ message: 'Award not found' });
        }
        res.json(award);
    } catch (error) {
        console.error('Error fetching award:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// POST create award (Admin only)
router.post('/', auth, [
    body('title').notEmpty().withMessage('Title is required'),
    body('slug').notEmpty().withMessage('Slug is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('content').notEmpty().withMessage('Content is required'),
    body('image').notEmpty().withMessage('Image is required')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const awardData = {
            ...req.body,
            category: 'awards'
        };

        const award = new Service(awardData);
        await award.save();
        res.status(201).json(award);
    } catch (error) {
        console.error('Error creating award:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT update award (Admin only)
router.put('/:id', auth, async (req, res) => {
    try {
        const award = await Service.findByIdAndUpdate(
            req.params.id,
            { ...req.body, category: 'awards' },
            { new: true, runValidators: true }
        );

        if (!award) {
            return res.status(404).json({ message: 'Award not found' });
        }

        res.json(award);
    } catch (error) {
        console.error('Error updating award:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE award (Admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const award = await Service.findByIdAndDelete(req.params.id);
        if (!award) {
            return res.status(404).json({ message: 'Award not found' });
        }
        res.json({ message: 'Award deleted successfully' });
    } catch (error) {
        console.error('Error deleting award:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
