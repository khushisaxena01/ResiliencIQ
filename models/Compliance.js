const mongoose = require('mongoose');

const complianceSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['GDPR', 'CCPA', 'Other'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium',
  },
  status: {
    type: String,
    enum: ['Open', 'Resolved', 'Ignored'],
    default: 'Open',
  },
  flaggedAt: {
    type: Date,
    default: Date.now,
  },
  resolvedAt: Date,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Compliance', complianceSchema);
