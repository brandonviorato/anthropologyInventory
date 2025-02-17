import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const specimenSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    commonName: {
        type: String,
        required: false
    },
    description: {
        type: String
    },
    id: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Specimen = mongoose.model('Specimen', specimenSchema);

export default Specimen;