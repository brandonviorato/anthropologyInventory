import { Router } from 'express';
import { getAllSpecimens, createSpecimen, getSingleSpecimenById, updateSpecimen, getRecordCount, getTotalCost, deleteSpecimen } from '../controllers/specimenController.js';

const specimensRouter = Router();

// GET all specimens
specimensRouter.get('/', getAllSpecimens);

// GET total number of records
specimensRouter.get('/totalRecords', getRecordCount);

// GET total collection cost
specimensRouter.get('/totalCost', getTotalCost);

// GET specimen by id
specimensRouter.get('/:id', getSingleSpecimenById);

// POST a new specimen
specimensRouter.post('/', createSpecimen);

// PATCH a specimen by id
specimensRouter.patch('/:id', updateSpecimen);

// DELETE a specimen by id
specimensRouter.delete('/:id', deleteSpecimen);

export default specimensRouter;