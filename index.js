const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const notificationRoute = require('./app/routes/notification');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/notification', notificationRoute);

app.get('', (req, res) => res.send('Welcome to Telegram CircleCI Bot'))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server listen to: ", port)
});

module.exports = app;
