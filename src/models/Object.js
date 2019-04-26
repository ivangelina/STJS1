import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
    objectname: {
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
    decription: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

const Object = mongoose.model("Object", ObjectSchema);
export default Object;
