const teamsService = require('../services/teams');

const methods = {
  getTeams: async(req, res, next) => {
    try{
        const teams = await teamsService.getTeams();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(teams));
    }
    catch(e){
        console.error(e.message);
        res.sendStatus(500) && next(error);
    }
  },
}

module.exports = methods;