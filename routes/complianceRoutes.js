const express = require('express');
const { getComplianceAlerts, checkCompliance } = require('../controllers/complianceController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.use(authenticateToken);

router.get('/alerts', getComplianceAlerts);
router.post('/check', checkCompliance);

module.exports = router;
