import { Schema, model } from 'mongoose';

const presSchema = Schema({
  appointment: {
    type: Schema.Types.ObjectId,
    ref: 'Appointment',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  docter: {
    type: Schema.Types.ObjectId,
    ref: 'Docter',
  },
  medicine: {
    type: Schema.Types.ObjectId,
    ref: 'Medicine',
  },
  message: {
    type: String,
  },
});

const Prescription = model('Prescription', presSchema);

export default Prescription;
