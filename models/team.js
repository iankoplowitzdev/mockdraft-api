const mongoose = require('mongoose');
const collectionName = 'teams';
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  city: String,
  name: String,
  needs: {
    QB: Number,
    RB: Number,
    WR: Number,
    TE: Number,
    OT: Number,
    OG: Number,
    C: Number,
    EDGE: Number,
    DL: Number,
    LB: Number,
    CB: Number,
    S: Number
  }
});

module.exports = mongoose.model('Team', teamSchema, collectionName);