import { Schema, model } from 'mongoose';

const ordSchema = Schema({
  medicineS: {
    type: Schema.Types.ObjectId,
    ref: 'Medicine',
  },
  totalprice: {
    type: Number,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Order = model('Order', ordSchema);

export default Order;
