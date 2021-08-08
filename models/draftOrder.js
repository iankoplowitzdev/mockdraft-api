const mongoose = require('mongoose');
const collectionName = 'draftOrder';
const Schema = mongoose.Schema;

const draftOrderSchema = new Schema({
  year: Number,
  r1: [
    { type: Schema.Types.ObjectId, ref: 'Team' }
  ],
  r2: [
    { type: Schema.Types.ObjectId, ref: 'Team' }
  ],
  r3: [
    { type: Schema.Types.ObjectId, ref: 'Team' }
  ],
  r4: [
    { type: Schema.Types.ObjectId, ref: 'Team' }
  ],
  r5: [
    { type: Schema.Types.ObjectId, ref: 'Team' }
  ],
  r6: [
    { type: Schema.Types.ObjectId, ref: 'Team' }
  ],
  r7: [
    { type: Schema.Types.ObjectId, ref: 'Team' }
  ],
});

module.exports = mongoose.model('DraftOrder', draftOrderSchema, collectionName);