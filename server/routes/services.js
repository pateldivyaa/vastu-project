const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

// GET all services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find({ isActive: true }).sort({ createdAt: -1 });
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET all services grouped by category
router.get('/categories', async (req, res) => {
    try {
        const services = await Service.find({ isActive: true }).sort({ createdAt: -1 });

        // Group services by category
        const groupedServices = services.reduce((acc, service) => {
            const category = service.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(service);
            return acc;
        }, {});

        res.json(groupedServices);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET service by slug
router.get('/slug/:slug', async (req, res) => {
    try {
        const service = await Service.findOne({ slug: req.params.slug, isActive: true });
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET services by category
router.get('/category/:category', async (req, res) => {
    try {
        const services = await Service.find({
            category: req.params.category,
            isActive: true
        }).sort({ createdAt: -1 });
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// GET single service by ID
router.get('/id/:id', async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// POST create service (Admin only) - Temporarily removing auth for testing
router.post('/', [
    body('title').notEmpty().withMessage('Title is required'),
    body('slug').notEmpty().withMessage('Slug is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('content').notEmpty().withMessage('Content is required'),
    body('image').notEmpty().withMessage('Image is required'),
    body('category').isIn(['vastu', 'types-of-vastu', 'astrology', 'numerology', 'education', 'awards', 'news', 'workshop', 'seminar']).withMessage('Invalid category')
], async (req, res) => {
    try {
        console.log('Service creation request:', req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Validation errors:', errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const service = new Service(req.body);
        await service.save();
        console.log('Service created successfully:', service._id);
        res.status(201).json(service);
    } catch (error) {
        console.error('Service creation error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// PUT update service (Admin only) - Temporarily removing auth for testing
router.put('/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.json(service);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE service (Admin only) - Temporarily removing auth for testing
router.delete('/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
