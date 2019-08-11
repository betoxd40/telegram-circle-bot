const express = require('express');
const router = express.Router();
const TelegramBot = '../clients/telegram.js';

const devOpsChatId = '-351202985'

router.get('/', async (req, res) => {
    return res.status(200).json({});
});

router.post('/', async (req, res) => {
    const { reponame, branch, build_url} = req.body.data.payload;
    TelegramBot.sendCircleMessage(devOpsChatId, {reponame, branch, build_url})
    return res.status(200).json({
        data: req.body, 
    });
});

module.exports = router;