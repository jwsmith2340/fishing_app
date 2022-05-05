const express = require('express');
const db = require('../functions/db')
const river_router = express.Router();


river_router.get('/', async (req, res) => {

    try {
        res.send(await db.recs(`SELECT * FROM FLY`))
    } catch (error) {
        res.status(400).json(error);
    }


});

module.exports = river_router;