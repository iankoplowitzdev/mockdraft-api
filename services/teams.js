const Team = require('../models/team');

const teamsService = {
  getTeams: async () => {
    return Team.find();
  },
  getTeamByName: async (teamName) => {
    const team = await Team.findOne({
      name: teamName
    });

    return team;
  },
  convertTeamNameToId: async (teamName) => {
    const team = await teamsService.getTeamByName(teamName);
    return team._id;
  }
}

module.exports = teamsService;