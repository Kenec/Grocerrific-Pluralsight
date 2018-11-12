import express from 'express';
import Grocery from '../models/Grocery';

export default {

  getGroceries(req, res) {
    Grocery.find({}, (error, groceries) => {
      // TODo: Abstract the error checks to a different functuon
      if (error) {
        return res.status(500).send({
          message: 'error',
          error
        });
      }
      return res.status(200).send({ groceries });
    });
  },

  addGrocery(req, res) {
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
    const newGroceryItem = { 
      name: req.body.grocery,
      bought: false
    };
    const newGrocery = new Grocery(newGroceryItem);
    newGrocery.save((error) => {
      if (error) {
        return res.status(500).send({
          message: 'error',
          error
        });
      }
      return res.status(201).send(newGroceryItem);
    });
  },

  buyGrocery(req, res) {
    // TODO: Abstract to a different function
    if (!req.params.id || req.params.id.length < 1) {
      return res.status(400).send({
        message: 'Grocery id is Required'
      });
    }

    Grocery.findById(req.params.id, (error, grocery) => {
      // TODO: Abstract the error checks to a different functuon
      if (error) {
        return res.status(500).send({
          message: 'error',
          error
        });
      }

      grocery.bought = !grocery.bought
      grocery.save((error) => {
        // TODO: Abstract the error checks to a different functuon
        if (error) {
          return res.status(500).send({
            message: 'error',
            error
          });
        }
        res.status(201).send({ grocery });
      });

    });
  },

  removeGrocery(req, res) {
    Grocery.deleteOne({ _id: req.params.id }, (error) => {
      if (error) {
        return res.status(500).send({
          message: 'error',
          error
        });
      }
      res.status(200).send({ 
        message: 'Grocery Deleted!'
      });
    });
  }

}

