const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const notificationRoute = require('./app/routes/notification');
const TelegramBot = require('./app/clients/telegram');

const app = express();

// Set bot
const telegramToken = process.env.TELEGRAM_TOKEN || '933318192:AAGw_fJIliEBhb1J_qq0eOPZAESHHwiOCiQ';
TelegramBot.init(telegramToken);
TelegramBot.listen();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'))

// Routes
app.use('/notification', notificationRoute);

app.get('', (req, res) => res.send('Welcome to Telegram CircleCI Bot'))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server listen to: ", port)
});

module.exports = app;
