const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// GET all gallery items
router.get('/', async (req, res) => {
    try {
        const gallery = await Gallery.find({ isActive: true }).sort({ createdAt: -1 });
        res.json(gallery);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET single gallery item
router.get('/:id', async (req, res) => {
    try {
        const galleryItem = await Gallery.findById(req.params.id);
        if (!galleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }
        res.json(galleryItem);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// POST create gallery item (Admin only)
router.post('/', auth, [
    body('image').notEmpty().withMessage('Image is required')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Set default category if not provided
        const galleryData = {
            ...req.body,
            category: req.body.category || 'events'
        };

        const galleryItem = new Gallery(galleryData);
        await galleryItem.save();
        res.status(201).json(galleryItem);
    } catch (error) {
        console.error('Gallery creation error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// PUT update gallery item (Admin only)
router.put('/:id', auth, async (req, res) => {
    try {
        const galleryItem = await Gallery.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!galleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }

        res.json(galleryItem);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE gallery item (Admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const galleryItem = await Gallery.findByIdAndDelete(req.params.id);
        if (!galleryItem) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }
        res.json({ message: 'Gallery item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
