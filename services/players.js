const Team = require('../models/team');
const Player = require('../models/player');
const selectionService = require('./selection');


const playersService = {
  getPlayers:  async () => {
    return Player.find();
  },
  getSelection: async (team, currentPick) => {
    const queriedTeam = await Team.findOne({
      name: team
    });    

    const selectionPool = await selectionService.getSelectionPool(currentPick);
    let position = null;
    let reSelection = true; 

    while (reSelection) {
      position = selectionService.generateSelectionPosition(queriedTeam.needs);
      reSelection = !selectionService.positionIsInPool(position, selectionPool);
    }

    return selectionService.makeSelection(position, selectionPool);
  }
}

module.exports = playersService;