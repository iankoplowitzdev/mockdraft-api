const mockDraftService = require('../services/mockDraft');

const controllerName = "MockDraftController ::";

const methods = {
  getInitialData: async(req, res, next) => {
    console.log(`${controllerName} getInitialData()`);
    try{
        const mockDraftData = await mockDraftService.getInitialData();
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(mockDraftData));
    }
    catch(e){
        console.error(e.message);
        res.sendStatus(500) && next(e);
    }
  },
}

module.exports = methods;