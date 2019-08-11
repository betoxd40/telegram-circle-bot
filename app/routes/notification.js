const express = require('express');
const TelegramBot = require('../clients/telegram');
const router = express.Router();

const devOpsChatId = '-351202985'

router.get('/', async (req, res) => {
    return res.status(200).json({});
});

router.post('/', async (req, res) => {
    try {
        //TelegramBot.sendCircleMessage(devOpsChatId, {reponame, branch, build_url})
        return res.status(200).json({
            data: req.body, 
        });
    } catch (e) {
        return res.status(400).json({
            error: e,
        });
    }
});

module.exports = router;