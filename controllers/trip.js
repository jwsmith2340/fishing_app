const express = require('express')
const trip_router = express.Router()

trip_router.get('/', (req, res) => {

    res.send('trips page');
    
})

module.exports = trip_router;