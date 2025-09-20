import express from 'express';
import Medicine from '../../db/models/medicineSchema.js';

const router = express();

router.get('/', async (req, res) => {
  try {
    const med = await Medicine.find();
    return res.status(200).json(med);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
    try {
      const med = await Medicine.create(req.body);
      return res.status(200).json({ message: 'Medicine added' });
    } catch (e) {
      return res.status(500).json(e);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const med = await Medicine.findById(id);
      return res.status(200).json(med);
    } catch (e) {
      return res.status(500).json(e);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const med = await Medicine.findByIdAndDelete(id);
      return res.status(200).json({ message: 'Medicine deleted' });
    } catch (e) {
      return res.status(500).json(e);
    }
  });

  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const med = await Medicine.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: 'updated' });
    } catch (e) {
      return res.status(500).json(e);
    }
  });

export default router;
