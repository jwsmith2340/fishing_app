const express = require('express');
const db = require('../functions/db')
const index_router = express.Router();


index_router.get('/', async (req, res) => {

    try {

        let responses = [];
        let trip_rec;

        responses = await db.recs(`SELECT * FROM TRIPS ORDER BY trip_date DESC LIMIT 1`);

        trip_rec = responses[0];

        console.log(trip_rec)

        res.send(await db.recs(`SELECT * FROM RIVERS WHERE river_id = ${ trip_rec.trip_river_id }`))

    } catch (error) {
        res.status(400).json(error);
    }


});

module.exports = index_router;