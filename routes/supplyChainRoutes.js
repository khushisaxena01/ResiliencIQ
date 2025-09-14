const express = require('express');
const { getSupplyChainGraph, simulateDisruption } = require('../controllers/supplyChainController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.use(authenticateToken);

router.get('/graph', getSupplyChainGraph);
router.post('/simulate', simulateDisruption);

module.exports = router;
