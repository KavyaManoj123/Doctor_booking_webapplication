import express from 'express';
import Order from '../../db/models/orderSchema.js';

const router = express();

router.post('/', async (req, res) => {
  try {
    const ord = await Order.create(req.body);
    res.status(200).json({ message: 'confirmed' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/', async (req, res) => {
    try {
      const orders = await Order.find();
      return res.status(200).json(orders);
    } catch (e) {
      return res.status(500).json(e);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const ord = await Order.findById(id);
      return res.status(200).json(ord);
    } catch (e) {
      return res.status(500).json(e);
    }
  });

  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const ord = await Order.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ message: 'order updated' });
    } catch (e) {
      return res.status(500).json(e);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const ord = await Order.findByIdAndDelete(id);
      return res.status(200).json({ message: 'Order cancelled' });
    } catch (e) {
      return res.status(500).json(e);
    }
  });

export default router;
