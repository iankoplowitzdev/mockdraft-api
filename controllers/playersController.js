const playersService = require('../services/players');

const methods = {
  getPlayers: async(req, res, next) => {
    try{
        const players = await playersService.getPlayers();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(players));
    }
    catch(e){
        console.error(e.message);
        res.sendStatus(500) && next(error);
    }
  },
  getSelection: async(req, res, next) => {
    try{
        const selection = await playersService.getSelection(req.params.team, req.params.pick);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(selection));
    }
    catch(e){
        console.error(e.message);
        res.sendStatus(500) && next(e);
    }
  },
}

module.exports = methods;