const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// GET all news
router.get('/', async (req, res) => {
    try {
        const news = await Service.find({
            category: 'news',
            isActive: true
        }).sort({ createdAt: -1 });
        res.json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET news by slug
router.get('/slug/:slug', async (req, res) => {
    try {
        const newsItem = await Service.findOne({
            slug: req.params.slug,
            category: 'news',
            isActive: true
        });
        if (!newsItem) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.json(newsItem);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET single news by ID
router.get('/id/:id', async (req, res) => {
    try {
        const newsItem = await Service.findById(req.params.id);
        if (!newsItem || newsItem.category !== 'news') {
            return res.status(404).json({ message: 'News not found' });
        }
        res.json(newsItem);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// POST create news (Admin only)
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

        const newsData = {
            ...req.body,
            category: 'news'
        };

        const newsItem = new Service(newsData);
        await newsItem.save();
        res.status(201).json(newsItem);
    } catch (error) {
        console.error('Error creating news:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// PUT update news (Admin only)
router.put('/:id', auth, async (req, res) => {
    try {
        const newsItem = await Service.findByIdAndUpdate(
            req.params.id,
            { ...req.body, category: 'news' },
            { new: true, runValidators: true }
        );

        if (!newsItem) {
            return res.status(404).json({ message: 'News not found' });
        }

        res.json(newsItem);
    } catch (error) {
        console.error('Error updating news:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE news (Admin only)
router.delete('/:id', auth, async (req, res) => {
    try {
        const newsItem = await Service.findByIdAndDelete(req.params.id);
        if (!newsItem) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.json({ message: 'News deleted successfully' });
    } catch (error) {
        console.error('Error deleting news:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
