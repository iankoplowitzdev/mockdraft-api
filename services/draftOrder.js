const DraftOrder = require('../models/draftOrder');

const draftOrder = {
  getAll: async () => {
    return DraftOrder.find()
      .populate('r1')
      .populate('r2')
      .populate('r3')
      .populate('r4')
      .populate('r5')
      .populate('r6')
      .populate('r7');
  },
  getCurrentYear: async () => {
    return DraftOrder.findOne({
      year: process.env.CURRENT_DRAFT_SEASON
    })
      .populate('r1')
      .populate('r2')
      .populate('r3')
      .populate('r4')
      .populate('r5')
      .populate('r6')
      .populate('r7');
  }
}

module.exports = draftOrder;