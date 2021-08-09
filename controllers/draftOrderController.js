const draftOrderService = require('../services/draftOrder');

const controllerName = "DraftOrderController ::";

const methods = {
  getDraftOrder: async(req, res, next) => {
    console.log(`${controllerName} getDraftOrder()`);
    try{
        const draftOrder = await draftOrderService.getAll();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(draftOrder));
    }
    catch(e){
        console.error(e.message);
        res.sendStatus(500) && next(e);
    }
  },
  getCurrentSeasonDraftOrder: async(req, res, next) => {
    console.log(`${controllerName} getCurrentSeasonDraftOrder()`);
    try{
        const draftOrder = await draftOrderService.getCurrentYear();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(draftOrder));
    }
    catch(e){
        console.error(e.message);
        res.sendStatus(500) && next(e);
    }
  },
}

module.exports = methods;