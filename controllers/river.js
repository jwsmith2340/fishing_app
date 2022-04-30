const express = require('express');
const river_router = express.Router();

river_router.get('/', (req, res) => {

    res.send('river page');

});

module.exports = river_router;