import { Router } from 'express';
import { getAllSpecimens, createSpecimen } from '../controllers/specimenController.js';

const specimensRouter = Router();

// GET all collections
specimensRouter.get('/', getAllSpecimens);

// POST a new collection
specimensRouter.post('/', createSpecimen);

export default specimensRouter;