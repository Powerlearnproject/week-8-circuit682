// const express = require('express');
// const router = express.Router();
// const { Support } = require('../models');

// // Get all support entries
// router.get('/', async (req, res) => {
//   try {
//     const supports = await Support.findAll();
//     res.json(supports);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve supports' });
//   }
// });

// // Get a single support entry by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const support = await Support.findByPk(req.params.id);
//     support ? res.json(support) : res.status(404).json({ error: 'Support entry not found' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to retrieve support entry' });
//   }
// });

// // Create a new support entry
// router.post('/', async (req, res) => {
//   try {
//     const support = await Support.create(req.body);
//     res.status(201).json(support);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create support entry' });
//   }
// });

// // Update a support entry
// router.put('/:id', async (req, res) => {
//   try {
//     const updated = await Support.update(req.body, { where: { support_id: req.params.id } });
//     updated ? res.json({ message: 'Support entry updated' }) : res.status(404).json({ error: 'Support entry not found' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update support entry' });
//   }
// });

// // Delete a support entry
// router.delete('/:id', async (req, res) => {
//   try {
//     const deleted = await Support.destroy({ where: { support_id: req.params.id } });
//     deleted ? res.json({ message: 'Support entry deleted' }) : res.status(404).json({ error: 'Support entry not found' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to delete support entry' });
//   }
// });

// module.exports = router;
