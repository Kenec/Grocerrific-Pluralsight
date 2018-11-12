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

GrocerySchema.set('toJSON', {
  transform: (doc, ret, options) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
});

export default mongoose.model('Grocery', GrocerySchema); 