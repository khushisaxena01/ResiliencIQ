require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const db = require('./config/database');
const sqlServer = require('./config/sql_server');
const env = require('./config/env');

// Import middlewares
const { errorHandler } = require('./middlewares/errorHandler');
const { requestLogger } = require('./middlewares/requestLogger');

// Import routes
const authRoutes = require('./routes/authRoutes');
const supplyChainRoutes = require('./routes/supplyChainRoutes');
const complianceRoutes = require('./routes/complianceRoutes');
const smeRoutes = require('./routes/smeRoutes');
const simulationRoutes = require('./routes/simulationRoutes');

const app = express();

  
// Connect to databases
db.connect();
sqlServer.connectSQLServer();

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(requestLogger);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/supplychain', supplyChainRoutes);
app.use('/api/compliance', complianceRoutes);
app.use('/api/sme', smeRoutes);
app.use('/api/simulation', simulationRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'ResiliencIQ Express backend is running' });
});

// Error handling middleware
app.use(errorHandler);

const PORT = env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`****\nResiliencIQ Express backend running on port ${PORT}\n****`);
});

module.exports = app;