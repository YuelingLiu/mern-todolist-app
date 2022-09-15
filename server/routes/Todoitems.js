const router = require('express').Router();

const { json } = require('express');
//import to do modle
const todoItemModel = require('../models/todoItem');

//create first route --add to do item
router.post('/api/item', async (req, res) => {
  try {
    const newItem = new todoItemModel({
      item: req.body.item,
    });
    //save this item to data base
    // and must use async await when dealing with promises and databse
    const saveItem = await newItem.save();
    res.status(200).json('added item');
  } catch (err) {
    res.json(err);
  }
});

//second route -- get data from database
router.get('/api/items', async (req, res) => {
  try {
    const allTodoItems = await todoItemModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

//update item
router.put('/api/item/:id', async (req, res) => {
  try {
    //find the item by its id and update it
    const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json('Item updated');
  } catch (err) {
    res.json(err);
  }
});

//delete item from database
router.delete('/api/item/:id', async (req, res) => {
  try {
    // find the item by its id and delete it
    const deleteItem = await todoItemModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Item Deleted');
  } catch (err) {
    res.json(err);
  }
});

//export router
module.exports = router;
