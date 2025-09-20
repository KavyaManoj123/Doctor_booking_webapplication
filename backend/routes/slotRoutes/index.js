import express from 'express';
import Slot from '../../db/models/slotSchema.js';

const router = express();

router.post('/', async (req, res) => {
  try {
    const slot = await Slot.create(req.body);
    return res.status(200).json({ message: 'slot added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/', async (req, res) => {
  try {
    const slot = await Slot.find();
    return res.status(200).json(slot);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/doc/:docId', async (req, res) => {
  try {
    const { docId } = req.params;
    const slots = await Slot.find({ doctor: docId });
    return res.status(200).json(slots);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const slot = await Slot.findByIdAndUpdate(id,req.body);
    return res.status(200).json({ message: 'slot added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const slot = await Slot.findByIdAndDelete(id);
    return res.status(200).json({ message: 'slot deleted' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

export default router;
