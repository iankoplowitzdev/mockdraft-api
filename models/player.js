const mongoose = require('mongoose');
const collectionName = 'players';
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  firstName: String,
  lastName: String,
  position: String,
  program: String,
  rank: Number
});

module.exports = mongoose.model('Player', playerSchema, collectionName);