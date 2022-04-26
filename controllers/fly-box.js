const express = require('express');
const fly_box_router = express.Router()

fly_box_router.get('/', (req,res) => {

    res.send('fly box page')

});

module.exports = fly_box_router;