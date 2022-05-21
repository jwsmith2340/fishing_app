const express = require('express')
const pool = require('./database/databasepg');
const std = require('std')
const cors = require("cors")
const trip_router = require('./controllers/trip')
const fly_box_router = require('./controllers/fly-box');
const river_router = require('./controllers/river');
const index_router = require('./controllers/index')

const app = express()

const port = 4000

app.use(cors());

app.use('/api', index_router);
app.use('/api/trip', trip_router);
app.use('/api/fly_box', fly_box_router);
app.use('/api/rivers', river_router);

app.listen(port, () => console.log(`listening on ${port}`));