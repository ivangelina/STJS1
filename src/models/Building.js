import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BuildingSchema = new Schema({
    buildingname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

const Building = mongoose.model("Building", BuildingSchema);
export default Building;
