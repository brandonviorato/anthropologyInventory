const express = require("express");
const {
    getAllPottery,
    createPottery,
    getSinglePotteryById,
    updatePottery,
    getRecordCount,
    getTotalCost,
    deletePottery,
    getRecentPottery,
    getAllPotteryByCategory,
    getCurrentValue,
} = require('../controllers/potteryController');

const potteryRouter = express.Router();

// GET all pottery items
potteryRouter.get('/', getAllPottery);

// GET all pottery by category
potteryRouter.get('/totalByCategory/:cat', getAllPotteryByCategory);

// GET total number of records
potteryRouter.get('/totalRecords', getRecordCount);

// GET total collection cost
potteryRouter.get('/totalCost', getTotalCost);

// GET current collection value
potteryRouter.get('/currentVal', getCurrentValue);

// GET recent pottery items (3)
potteryRouter.get('/recent', getRecentPottery);

// GET pottery by id
potteryRouter.get('/:id', getSinglePotteryById);

// POST a new pottery item
potteryRouter.post('/', createPottery);

// PATCH a pottery item by id
potteryRouter.patch('/:id', updatePottery);

// DELETE a pottery item by id
potteryRouter.delete('/:id', deletePottery);

module.exports = potteryRouter;