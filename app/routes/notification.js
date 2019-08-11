const express = require('express');
const TelegramBot = require('../clients/telegram');
const router = express.Router();

const devOpsChatId = '-351202985'

router.get('/', async (req, res) => {
    return res.status(200).json({});
});

router.post('/', async (req, res) => {
    console.log(req.body)
    const { reponame, branch, build_url} = req.body.data.payload;
    try {
        TelegramBot.sendCircleMessage(devOpsChatId, {reponame, branch, build_url})
        return res.status(200).json({
            data: req.body, 
        });
    } catch (e) {
        console.log('el error es', e)
    }
});

module.exports = router;