const express = require('express');
const router = express.Router();

//Controller
const home = require('../Controller/home');
const urlShortner = require('../Controller/urlShortner');
const getShortUrl = require('../Controller/getShortUrl');

router.get('/', home)
router.post('/', urlShortner);
router.get('/:id', getShortUrl);

module.exports = router;