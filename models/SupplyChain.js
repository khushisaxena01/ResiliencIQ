const mongoose = require('mongoose');

const supplyChainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nodes: [{
    id: String,
    label: String,
    type: String, // e.g., supplier, factory, warehouse
  }],
  edges: [{
    from: String,
    to: String,
    weight: Number, // e.g., cost or distance
  }],
  disruptions: [{
    nodeId: String,
    type: String, // e.g., port closure, war
    impact: String, // High, Medium, Low
    date: Date,
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SupplyChain', supplyChainSchema);
