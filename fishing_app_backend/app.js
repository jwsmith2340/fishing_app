const express = require('express')
const pool = require('./database/databasepg');
const std = require('std')
const trip_router = require('./controllers/trip')
const fly_box_router = require('./controllers/fly-box');
const river_router = require('./controllers/river');

const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send('good send')
})

app.use('/trip', trip_router)
app.use('/fly_box', fly_box_router)
app.use('/river', river_router)

app.listen(port, () => console.log(`listening on ${port}`));