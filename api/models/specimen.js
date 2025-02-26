import mongoose from 'mongoose';
import { type } from 'os';

const Schema = mongoose.Schema;
const specimenSchema = new Schema({
    scientificName: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        
    },
    anthropologist: {
        type: String,
        required: true
    },
    activeValue: {
        type: Number,
        required: true
    },
    paidValue: {
    type: Number,
    required: true

    },
    locatedCountryRegion:{
        type: String,
        
    },
    locationId:{
        type: String,
        required: true
    },
    description:{
        type: String,
        
    }

}, { timestamps: true });

const Specimen = mongoose.model('Specimen', specimenSchema);

export default Specimen;