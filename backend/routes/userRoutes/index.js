import express from 'express';
import User from '../../db/models/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express();

router.post('/signUp', async (req, res) => {
  try {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
      return res
        .status(200)
        .json({ message: 'User with this email alredy exists' });
    }
    if (body.password != body.confirmPassword) {
      return res.status(400).json({ message: 'passward doesnot match' });
    }

    const hashedPassword = await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    const addUser = await User.create(body);
    return res.status(200).json(addUser);
  } catch (e) {
    // console.log(e);
    return res.status(500).json(e);
  }
});

router.post('/login', async (req, res) => {
  try {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return res.status(400).json({ message: 'email or password incorrect' });
    }
    const isMatching = await bcrypt.compare(body.password, user.password);
    if (!isMatching) {
      return res.status(400).json({ message: 'email or password incorrect' });
    }

    const token = jwt.sign(
      { id: user._id, role: 'USER' },
      'NJHGFYVXGDHSJSWYUHJHDIEKUI',
      { expiresIn: '7d' }
    );

    return res.status(200).json({ message: 'logged in', token: token });
  } catch (e) {
    // console.log(e);
    return res.status(500).json(e);
  }
});

export default router;
