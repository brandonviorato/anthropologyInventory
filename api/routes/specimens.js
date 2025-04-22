const express = require("express");
const { getAllSpecimens, createSpecimen, getSingleSpecimenById, updateSpecimen, getRecordCount, getTotalCost, deleteSpecimen, getRecentSpecimens, getAllSpecimensByCategory, } = require('../controllers/specimenController');

const specimensRouter = express.Router();

// GET all specimens
specimensRouter.get('/', getAllSpecimens);

// GET all specimens by category
specimensRouter.get('/totalByCategory/:cat', getAllSpecimensByCategory);

// GET total number of records
specimensRouter.get('/totalRecords', getRecordCount);

// GET total collection cost
specimensRouter.get('/totalCost', getTotalCost);

// GET recent specimens (3)
specimensRouter.get('/recent', getRecentSpecimens);

// GET specimen by id
specimensRouter.get('/:id', getSingleSpecimenById);

// POST a new specimen
specimensRouter.post('/', createSpecimen);

// PATCH a specimen by id
specimensRouter.patch('/:id', updateSpecimen);

// DELETE a specimen by id
specimensRouter.delete('/:id', deleteSpecimen);

module.exports = specimensRouter;