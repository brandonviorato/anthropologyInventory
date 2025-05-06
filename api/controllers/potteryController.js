const Pottery = require('../models/pottery.js');
const path = require("path");

// get all pottery
const getAllPottery = async (req, res) => {
    const pottery = await Pottery.find({}).sort({createdAt: -1})

    res.status(200);
    res.json(pottery);
}

// get a single pottery item by id
const getSinglePotteryById = async (req, res) => {
    const potteryId = req.params.id;

    try {
        const pottery = await Pottery.findById(potteryId);
        res.status(200);
        res.json(pottery);
    } catch (error) {
        res.status(404);
        res.json({error: error.message});
    }
}

// create a new pottery item
const createPottery = async (req, res) => {
    // handle file upload
    let image;
    let uploadPath;
    let images;

    // check if any images in req
    if (!req.files || Object.keys(req.files).length === 0) {
        images = '';
    } else {
        image = req.files.image;
        uploadPath = path.join('../uploads', image.name); // path needs to be hardcoded for deployment

        await new Promise((resolve, reject) => {
            image.mv(uploadPath, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });

        // store image path
        images = '/uploads/' + image.name;
    }

    const { category, anthropologist, regionFound, countryFound, location, description, notes, activeValue, paidValue, dateOfPurchase, purchaser } = req.body;

    // add doc to db
    try {
        const pottery = await Pottery.create({ category, anthropologist, regionFound, countryFound, location, description, notes, activeValue, paidValue, dateOfPurchase, purchaser, images });
        res.status(200);
        res.json(pottery);
    } catch (error) {
        res.status(400);
        res.json({error: error.message});
    }
}

// delete a pottery item | NOTE: does not delete images from 'uploads' folder
const deletePottery = async (req, res) => {
    const potteryId = req.params.id;
    try {
        const deletedPottery = await Pottery.findOneAndDelete({ _id: potteryId });

        if (!deletedPottery) {
            return res.status(404).json({ message: "Pottery item not found" });
        }

        res.status(200);
        res.json({
            message: "Successfully deleted pottery item",
            data: deletedPottery
        });
    } catch (error) {
        res.status(500);
        res.json({ error: error.message });
    }
};

// update a pottery item | NOTE: currently works, but can only update fields that exist in the current schema.
const updatePottery = async (req, res) => {
    const filter = { _id: req.params.id };
    const update = { $set: req.body };
    const options = { new: true, runValidators: true };

    try {
        const updatedPottery = await Pottery.findOneAndUpdate(filter, update, options);

        if (!updatedPottery) {
            return res.status(404).json({ message: 'Pottery item not found'});
        }

        res.status(200);
        res.json({
            message: 'Pottery item updated successfully!',
            data: updatedPottery
        });
    } catch (error) {
        res.status(400);
        res.json({error: error.message});
    }
}

// total number of pottery records
// for the dashboard
const getRecordCount = async (req, res) => {
    try {
        const count = await Pottery.countDocuments();
        res.status(200).json({"count": count});
    } catch (error) {
        console.error("Error with record count", error);
        res.status(404).json({error: error.message});
    }
}

// total collection cost
const getTotalCost = async (req, res) => {
    try {
        const results = await Pottery.find({paidValue: {$gt: 1}}, { _id: 0, paidValue: 1});
        const values = results.map(artifact => artifact.paidValue);
        const totalCost = values.reduce((sum, value) => sum + value, 0);
        res.status(200).json({"totalCost": totalCost});
    } catch (error) {
        console.error("Error with total cost", error);
        res.status(404).json({error: error.message});
    }
}

// current collection value
const getCurrentValue = async (req, res) => {
    try {
        const results = await Pottery.find({activeValue: {$gt: 1}}, { _id: 0, activeValue: 1});
        const values = results.map(artifact => artifact.activeValue);
        const currentVal = values.reduce((sum, value) => sum + value, 0);
        res.status(200).json({"currentVal": currentVal});
    } catch (error) {
        console.error("Error with current value", error);
        res.status(404).json({error: error.message});
    }
}

// count by category
const getAllPotteryByCategory = async (req, res) => {
    try {
        const requestedCategory = req.params.cat;
        const results = await Pottery.countDocuments({category: requestedCategory});
        res.status(200).json({"count": results});
    } catch (error) {
        console.error("Error with getting all pottery by category", error);
        res.status(404).json({error: error.message});
    }
}

// recent pottery items
const getRecentPottery = async (req, res) => {
    const NUMBER_OF_ITEMS = 3;

    try {
        const recentPottery = await Pottery.find({}).sort({ createdAt: -1 }).limit(NUMBER_OF_ITEMS);
        res.status(200);
        res.json({
            message: 'Found pottery items',
            data: recentPottery
        });
    } catch (error) {
        console.error("Error fetching recent pottery items", error);
        res.status(404).json({error: error.message});
    }
}

module.exports = { 
    getAllPottery,
    getSinglePotteryById,
    createPottery,
    deletePottery,
    updatePottery,
    getRecordCount,
    getTotalCost,
    getCurrentValue,
    getRecentPottery,
    getAllPotteryByCategory
};