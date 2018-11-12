"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Grocery = _interopRequireDefault(require("../models/Grocery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  getGroceries: function getGroceries(req, res) {
    _Grocery.default.find({}, function (error, groceries) {
      // TODo: Abstract the error checks to a different functuon
      if (error) {
        return res.status(500).send({
          message: 'error',
          error: error
        });
      }

      return res.status(200).send({
        groceries: groceries
      });
    });
  },
  addGrocery: function addGrocery(req, res) {
    // TODO:  Abstract this validation to a function
    if (!req.body.grocery || req.body.grocery.length < 1) {
      return res.status(400).send({
        message: 'Grocery Name Required'
      });
    }

    if (typeof req.body.grocery !== 'string') {
      return res.status(400).send({
        message: 'Grocery Name Must be a string!'
      });
    }

    var newGroceryItem = {
      name: req.body.grocery,
      bought: false
    };
    var newGrocery = new _Grocery.default(newGroceryItem);
    newGrocery.save(function (error) {
      if (error) {
        return res.status(500).send({
          message: 'error',
          error: error
        });
      }

      newGroceryItem.id = newGrocery._id;
      return res.status(201).send(newGroceryItem);
    });
  },
  buyGrocery: function buyGrocery(req, res) {
    // TODO: Abstract to a different function
    if (!req.params.id || req.params.id.length < 1) {
      return res.status(400).send({
        message: 'Grocery id is Required'
      });
    }

    _Grocery.default.findById(req.params.id, function (error, grocery) {
      // TODO: Abstract the error checks to a different functuon
      if (error) {
        return res.status(500).send({
          message: 'error',
          error: error
        });
      }

      grocery.bought = !grocery.bought;
      grocery.save(function (error) {
        // TODO: Abstract the error checks to a different functuon
        if (error) {
          return res.status(500).send({
            message: 'error',
            error: error
          });
        }

        res.status(201).send({
          grocery: grocery
        });
      });
    });
  },
  removeGrocery: function removeGrocery(req, res) {
    _Grocery.default.deleteOne({
      _id: req.params.id
    }, function (error) {
      if (error) {
        return res.status(500).send({
          message: 'error',
          error: error
        });
      }

      res.status(200).send({
        message: 'Grocery Deleted!'
      });
    });
  }
};
exports.default = _default;