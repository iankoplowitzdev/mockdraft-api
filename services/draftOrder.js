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
  },
  // Need to use lean call here because otherwise we can't 
  // alter the Mongoose document prior to sending the response
  // https://mongoosejs.com/docs/tutorials/lean.html
  getCurrentYear__lean: async () => {
    return DraftOrder.findOne({
      year: process.env.CURRENT_DRAFT_SEASON
    })
      .populate('r1')
      .populate('r2')
      .populate('r3')
      .populate('r4')
      .populate('r5')
      .populate('r6')
      .populate('r7')
      .lean();
  }
}

module.exports = draftOrder;