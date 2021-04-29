const mongoose = require('mongoose');
const collectionName = 'positions';
const Schema = mongoose.Schema;

const positionSchema = new Schema({
  title: String,
  title2: String,
  abbreviation: String,
  pickAdjustment: [ Number ]
});

module.exports = mongoose.model('Position', positionSchema, collectionName);