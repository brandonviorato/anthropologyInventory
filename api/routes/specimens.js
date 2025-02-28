import { Router } from 'express';
import { getAllSpecimens, createSpecimen, getSingleSpecimenById, updateSpecimen } from '../controllers/specimenController.js';

const specimensRouter = Router();

// GET all specimens
specimensRouter.get('/', getAllSpecimens);

// GET specimen by id
specimensRouter.get('/:id', getSingleSpecimenById);

// POST a new specimen
specimensRouter.post('/', createSpecimen);

// PATCH a specimen by id
specimensRouter.patch('/:id', updateSpecimen);

export default specimensRouter;