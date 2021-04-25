const Player = require('../models/player');

const selectionLogic = {
  generateSelectionPosition: (needs) => {
    const keys = Object.keys(needs);
  
    let aggregate = [];
  
    for (let i = 0; i < keys.length; i++) {
      const position = keys[i];
      for (let j = 0; j < needs[position]; j++) {
        aggregate.push(position);
      }
    }
  
    const determinedPosition = aggregate[Math.floor(Math.random() * aggregate.length)];
    return determinedPosition;
  },
  getSelectionPool: async (currentSelection) => {
    const players = await Player.find({
      rank: {
        $lte: parseInt(currentSelection) + 4
      }
    });
  
    return players;
  },
  positionIsInPool: (position, selectionPool) => {
    for (let i = 0; i < selectionPool.length; i++) {
      const currectPosition = selectionPool[i].position;
      if (currectPosition === position) {
        return true;
      }
    }

    return false;
  },
  makeSelection: (position, selectionPool) => {
    for (let i = 0; i < selectionPool.length; i++) {
      const currectPosition = selectionPool[i].position;
      if (currectPosition === position) {
        return selectionPool[i];
      }
    }
  }
};

module.exports = selectionLogic;