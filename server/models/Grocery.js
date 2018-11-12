import mongoose from 'mongoose';

const GrocerySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bought: {
    type: Boolean,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Grocery', GrocerySchema); 