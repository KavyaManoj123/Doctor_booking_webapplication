import { Schema,model } from "mongoose";

const depSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trime: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Department = model('department', depSchema);

export default Department;
