const express = require('express')
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000


// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Middlewares
app.use(bodyParser.json());

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on Home');
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION_URL, () => { console.log("Connected DB") })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})