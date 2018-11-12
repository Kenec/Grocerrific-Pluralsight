"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GrocerySchema = _mongoose.default.Schema({
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
  transform: function transform(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

var _default = _mongoose.default.model('Grocery', GrocerySchema);

exports.default = _default;