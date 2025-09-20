import express from 'express';
import Docter from '../../db/models/docterSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signUp', async (req, res) => {
  try {
    const body = req.body;
    const doctor = await Docter.findOne({ email: body.email });
    if (doctor) {
      return res
        .status(200)
        .json({ message: 'Docter with this email alredy exists' });
    }
    if (body.password != body.confirmPassword) {
      return res.status(400).json({ message: 'passward doesnot match' });
    }

    const hashedPassword = await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    const addDocter = await Docter.create(body);
    return res.status(200).json(addDocter);
  } catch (e) {
    // console.log(e);
    return res.status(500).json(e);
  }
});

router.post('/login', async (req, res) => {
  try {
    const body = req.body;
    const doctor = await Docter.findOne({ email: body.email });
    if (!doctor) {
      return res.status(400).json({ message: 'email or password incorrect' });
    }
    const isMatching = await bcrypt.compare(body.password, doctor.password);
    if (!isMatching) {
      return res.status(400).json({ message: 'email or password incorrect' });
    }

    const token = jwt.sign(
      { id: doctor._id, role: 'DOCTOR' },
      'NJHGFYVXGDHSJSWYUHJHDIEKUI',
      { expiresIn: '7d' }
    );

    return res.status(200).json({ message: 'logged in', token: token });
  } catch (e) {
    // console.log(e);
    return res.status(500).json(e);
  }
});

router.get('/dep/:depId', async (req, res) => {
  try {
    const { depId } = req.params;
    const docters = await Docter.find({ department: depId });
    return res.status(200).json(docters);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const docters = await Docter.findById(id);
    return res.status(200).json(docters);
  } catch (e) {
    return res.status(500).json(e);
  }
});
export default router;
