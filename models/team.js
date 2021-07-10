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
    ED: Number,
    DL: Number,
    LB: Number,
    CB: Number,
    S: Number
  },
  abbreviation: String,
  picks: [ Number ]
});

module.exports = mongoose.model('Team', teamSchema, collectionName);