import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/docterBooking')
  .then(() => {
    console.log('DB CONNECTED');
  })
  .catch(e => {
    console.log(e);
  });

export default mongoose;
