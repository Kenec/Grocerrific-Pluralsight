import express from 'express';
import Grocery from '../models/Grocery';

export default {

  getGroceries(req, res) {
    const myGrocery = new Grocery({
      name: 'Test2',
      bought: false
    });

    myGrocery.save().then(data => {
      res.status(200).send({
        data
      });
    }).catch(error => {
      res.status(500).send(error);
    });
  }

}