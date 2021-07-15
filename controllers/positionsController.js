const positionsService = require('../services/positions');

const controllerName = "PositionsController ::";

const methods = {
  getPositions: async(req, res, next) => {
    console.log(`${controllerName} getPositions()`);
    try{
        const positions = await positionsService.getPositions();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(positions));
    }
    catch(e){
        console.error(e.message);
        res.sendStatus(500) && next(e);
    }
  },
}

module.exports = methods;