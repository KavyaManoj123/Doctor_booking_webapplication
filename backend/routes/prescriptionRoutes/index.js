import express from 'express';
import { checkToken } from '../../db/middleweres/checkToken.js';
import Prescription from '../../db/models/prescriptionSchema.js';

const router = express();

router.post('/', checkToken(['DOCTER']), async (req, res) => {
  try {
    const body = { ...req.body };
    const prescription = await Prescription.create(body);
    return res.status(200).json({ message: 'prescription added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get(
  '/appoinment/:id',
  checkToken(['DOCTER', 'USER']),
  async (req, res) => {
    try {
      const appoinmentId = req.params.id;
      const prescription = await Prescription.find({ appoinment: appoinmentId });
      return res.status(200).json(prescription);
    } catch (e) {
      return res.status(500).json(e);
    }
  }
);

export default router;
