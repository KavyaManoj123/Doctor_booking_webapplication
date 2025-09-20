import { Schema, model } from 'mongoose';

const docSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trime: true,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
  },
  password: {
    type: String,
  },
});

const Docter = model('docter', docSchema);

export default Docter;
