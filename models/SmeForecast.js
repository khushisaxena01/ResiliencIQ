const mongoose = require('mongoose');

const smeForecastSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  salesData: [{
    date: Date,
    quantity: Number,
    revenue: Number,
  }],
  forecast: [{
    date: Date,
    predictedDemand: Number,
    confidence: Number,
  }],
  accuracy: {
    type: Number,
    min: 0,
    max: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SMEForecast', smeForecastSchema);
