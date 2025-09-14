const mongoose = require('mongoose');

const simulationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  scenario: {
    type: String,
    required: true, // e.g., currency collapse, supplier bankruptcy
  },
  parameters: {
    type: mongoose.Schema.Types.Mixed, // flexible object for scenario params
  },
  results: {
    cascadingImpacts: [String],
    recommendations: [String],
    impactScore: Number, // 0-100
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Simulation', simulationSchema);
