import { Schema, model } from 'mongoose';

const medSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trime: true,
  },
  image: {
    type: String,
    // required: true,
  },
  expiryDate: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Medicine = model('Medicine', medSchema);

export default Medicine;
