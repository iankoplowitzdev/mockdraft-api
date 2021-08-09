const TradeChart = require('../models/tradeChart');

const tradeChart = {
  getAll: async () => {
    return TradeChart.find();
  },
  getCurrentYear: async () => {
    return TradeChart.findOne({
      year: process.env.CURRENT_DRAFT_SEASON
    });
  }
}

module.exports = tradeChart;