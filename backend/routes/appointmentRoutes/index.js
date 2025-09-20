import express, { Router } from 'express';
import Appointment from '../../db/models/appointmentSchema.js';
import Slot from '../../db/models/slotSchema.js';
import User from '../../db/models/userSchema.js';
import nodemailer from 'nodemailer';

const router = express();

router.post('/', async (req, res) => {
  try {
    if (!req.body.user) {
      return res.status(400).json({ message: 'User information is missing' });
    }
    const user = await User.findById(req.body.user);
    if (!user) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    const appointment = await Appointment.create({
      ...req.body,
    });
    const slot = await Slot.findByIdAndUpdate(req.body.slot, {
      status: 'BOOKED',
    });

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kavyamanoj904@gmail.com',
        pass: 'xyrd vgcf brww xotb',
      },
    });

    const mailOptions = {
      from: 'kavyamanoj904@gmail.COM',
      to: 'kavyawhatsapp23@gmail.com',
      subject: 'Confirmation of Your Appointment Booking',
      text: `Dear [Patient's Name],

      We are pleased to confirm that your appointment has been successfully booked through our DoctorBooking app. Your health and well-being are our top priorities, and we are committed to providing you with excellent medical care.`,
    };
    transporter.sendMail(mailOptions);

    return res.status(201).json({ message: 'Appointment booked' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/', async (req, res) => {
  try {
    const appo = await Appointment.find();
    return res.status(200).json(appo);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/doc/:docId', async (req, res) => {
  try {
    const { docId } = req.params;
    const appo = await Appointment.find({ doctor: docId });
    return res.status(200).json(appo);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/user/:useId', async (req, res) => {
  try {
    const { useId } = req.params;
    const appo = await Appointment.find({ user: useId }).populate([
      'slot',
      'doctor',
      'user',
    ]);
    return res.status(200).json(appo);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const appoi = await Appointment.findByIdAnd(id);
    await Appointment.findByIdAndUpdate(id, { status: 'FREE' });
    await Slot.findByIdAndUpdate(appoi.slot, { status: 'FREE' });
    return res.status(200).json({ message: 'appointment added' });
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get('/get/:id', async (req, res) => {
  const appointment = await Appointment.findById(req.params.id).populate([
    'slot',
    'user',
    'doctor',
  ]);
  console.log(appointment)
  res.render('pdf.ejs',{appointment:appointment});
});

export default router;
