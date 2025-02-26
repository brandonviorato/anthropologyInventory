import Specimen from '../models/specimen.js';

// get all specimens
export const getAllSpecimens = async (req, res) => {
    const specimens = await Specimen.find({}).sort({createdAt: -1})

    res.status(200);
    res.json(specimens);
}

// get a single specimen

// create a new specimen
export const createSpecimen = async (req, res) => {
    const { scientificName, nickName, anthropologist, activeValue, paidValue, locatedCountryRegion, locationId, description
    } = req.body;

    // add doc to db
    try {
        const specimen = await Specimen.create({ scientificName, nickName, anthropologist, activeValue, paidValue, locatedCountryRegion, locationId,
            description});
        res.status(200);
        res.json(specimen);
    } catch (error) {
        res.status(400);
        res.json({error: error.message});
    }
}

// delete a specimen



// update a specimen