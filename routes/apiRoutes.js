const express = require('express');
const { orchestrateAPI, getStatus } = require('../controllers/apiController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.use(authenticateToken);

router.post('/orchestrate', orchestrateAPI);
router.get('/status', getStatus);

module.exports = router;
