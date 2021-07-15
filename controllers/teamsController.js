const teamsService = require('../services/teams');

const controllerName = "TeamsController ::";

const methods = {
  getTeams: async(req, res, next) => {
    console.log(`${controllerName} getTeams()`);
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