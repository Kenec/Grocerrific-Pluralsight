"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = _interopRequireDefault(require("../controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var groceryController = _controllers.default.grocerries;

var groceryRoutes = _express.default.Router();

groceryRoutes.get('/', groceryController.getGroceries).post('/', groceryController.addGrocery).put('/:id', groceryController.buyGrocery).delete('/:id', groceryController.removeGrocery);
var _default = groceryRoutes;
exports.default = _default;