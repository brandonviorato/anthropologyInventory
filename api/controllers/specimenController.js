import Specimen from '../models/specimen.js';
import path from 'path';
import { fileURLToPath } from 'url';

// get all specimens
export const getAllSpecimens = async (req, res) => {
    const specimens = await Specimen.find({}).sort({createdAt: -1})

    res.status(200);
    res.json(specimens);
}

// get a single specimen by id
export const getSingleSpecimenById = async (req, res) => {
    const specimenId = req.params.id;

    try {
        const specimen = await Specimen.findById(specimenId);
        res.status(200);
        res.json(specimen);
    } catch (error) {
        res.status(404);
        res.json({error: error.message});
    }
}

// create a new specimen
export const createSpecimen = async (req, res) => {
    // handle file upload
    let image;
    let uploadPath;
    let images;

    // check if any images in req
    if (!req.files || Object.keys(req.files).length === 0) {
        images = '';
    } else {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        console.log(req.files.image);

        image = req.files.image;
        uploadPath = path.join(__dirname, '..', 'uploads', image.name);

        await new Promise((resolve, reject) => {
            image.mv(uploadPath, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });

        // store image path
        images = '/api/uploads/' + image.name;
    }

    const { scientificName, nickName, anthropologist, activeValue, paidValue, locatedCountryRegion, locationId, description
    } = req.body;

    // add doc to db
    try {
        const specimen = await Specimen.create({ scientificName, nickName, anthropologist, activeValue, paidValue, locatedCountryRegion, locationId,
            description, images});
        res.status(200);
        res.json(specimen);
    } catch (error) {
        res.status(400);
        res.json({error: error.message});
    }
}

// delete a specimen



// update a specimen | NOTE: currently works, but can only update fields that exist in the current schema.
export const updateSpecimen = async (req, res) => {
    const filter = { _id: req.params.id };
    const update = { $set: req.body };
    const options = { new: true, runValidators: true };

    try {
        const updatedSpecimen = await Specimen.findOneAndUpdate(filter, update, options);

        if (!updatedSpecimen) {
            return res.status(404).json({ message: 'Specimen not found'});
        }

        res.status(200);
        res.json({
            message: 'Specimen updated successfully!',
            data: updatedSpecimen
        });
    } catch (error) {
        res.status(400);
        res.json({error: error.message});
    }
}