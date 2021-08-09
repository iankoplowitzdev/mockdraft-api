const tradeChartService = require('../services/tradeChart');

const controllerName = "TradeChartController ::";

const methods = {
  getTradeChart: async(req, res, next) => {
    console.log(`${controllerName} getTradeChart()`);
    try{
        const tradeChart = await tradeChartService.getAll();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(tradeChart));
    }
    catch(e){
        console.error(e.message);
        res.sendStatus(500) && next(e);
    }
  },
  getCurrentSeasonTradeChart: async(req, res, next) => {
    console.log(`${controllerName} getCurrentSeasonTradeChart()`);
    try{
        const tradeChart = await tradeChartService.getCurrentYear();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(tradeChart));
    }
    catch(e){
        console.error(e.message);
        res.sendStatus(500) && next(e);
    }
  },
}

module.exports = methods;