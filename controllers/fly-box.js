const express = require('express');
const db = require('../functions/db');
const fly_box_router = express.Router();

fly_box_router.get('/', async (req,res) => {

    try {
        res.send(await db.recs(`SELECT * FROM FLY`))
    } catch (error) {
        res.status(400).json(error);
    }

});

module.exports = fly_box_router;