const mongoose = require('mongoose');
const collectionName = 'tradeChart';
const Schema = mongoose.Schema;

const tradeChartSchema = new Schema({
  year: Number,
  chart: [Number]
});

module.exports = mongoose.model('TradeChart', tradeChartSchema, collectionName);