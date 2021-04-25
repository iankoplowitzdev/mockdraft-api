const Team = require('../models/team');

const teamsService = {
  getTeams: async () => {
    return Team.find();
  }
}

module.exports = teamsService;