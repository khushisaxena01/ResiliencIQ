const express = require('express');
const { runSimulation } = require('../controllers/simulationController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.use(authenticateToken);

router.post('/run', runSimulation);

module.exports = router;
