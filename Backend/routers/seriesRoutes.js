const express = require('express');
const router = express.Router();
const seriesController = require('../controller/seriesController');

router.get('/', seriesController.getAllSeries);
router.post('/', seriesController.createSeries);

module.exports = router;
