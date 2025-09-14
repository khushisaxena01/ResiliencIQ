const express = require('express');
const { getSMEForecast, uploadSalesData } = require('../controllers/smeController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.use(authenticateToken);

router.get('/forecast', getSMEForecast);
router.post('/upload', uploadSalesData);

module.exports = router;
