const Position = require('../models/position');


const positionsService = {
  getPositions:  async () => {
    return Position.find();
  },
}

module.exports = positionsService;