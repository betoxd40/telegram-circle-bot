const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    return res.status(200).json({});
});

router.post('/', async (req, res) => {
    console.log(req.body);
    return res.status(200).json({});
});

module.exports = router;