const express = require('express');
const router = express.Router();
const geoModel = require('../models/apimodel')

// Initializing ObjectId for Specific Get, Put & Delete requests
const ObjectId = require("mongodb").ObjectID;


// Route for get                                                            // GET                  // Works
router.get('/api/', async (req, res) => {

    try {
        const Geos = await geoModel.find({});
        res.send(Geos);
        console.log("GET");
    } catch (error) {
        res.status(500).send(error);
    }
});


//  Route for Specific GET                                                    // SPECIFIC GET           // Works
router.get('/api/:id', async (req, res) => {
    try {
        const Geos = await geoModel.findOne({ "_id": new ObjectId(req.params.id) }, (err, result) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            res.send(result);
        });
        console.log("SPECIFIC GET");
    } catch (error) {
        res.send(error.message);
        console.log(error.message);
    }
});


// Route for post                                                            // POST                  // Works
router.post('/api/', async (req, res) => {
    try {
        const Geos = new geoModel(req.body);
        await Geos.save();
        res.send("Your Data has been saved");
        console.log("POST");
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
});


// Route for put                                                            // PUT                  // Works
router.put('/api/:id', async (req, res) => {
    try {
        const Geos = geoModel.findByIdAndUpdate(req.params.id, req.body);
        await (await Geos).save();
        res.send("Your Data Has Been Updated");
        console.log("PUT");
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
});


// Route for delete                                                       // DELETE                  // Works
router.delete('/api/:id', async (req, res) => {
    try {
        const Geos = await geoModel.findByIdAndDelete(req.params.id);
        if (!Geos) res.status(404).send("No Item Found");
        res.send("Your Data Has Been Deleted");
        console.log("DELETE");
    } catch (error) {
        console.log(error.message);
        res.send(error.message);
    }
});

// Exporting
module.exports = router;