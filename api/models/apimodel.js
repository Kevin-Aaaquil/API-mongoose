const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema & Model
const apiSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    rank: {
        type: String
    },

    available: {
        type: Boolean,
        default: false
    }
    // add geo location
},
    { collection: 'modeldb' });

const Geo = mongoose.model("Geo", apiSchema);

module.exports = Geo;

