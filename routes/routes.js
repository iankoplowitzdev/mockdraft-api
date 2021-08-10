const express = require('express');
const teamsController = require('../controllers/teamsController');
const playersController = require('../controllers/playersController');
const positionsController = require('../controllers/positionsController');
const draftOrderController = require('../controllers/draftOrderController');
const tradeChartController = require('../controllers/tradeChartController');
const mockDraftController = require('../controllers/mockDraftController');


const router = express.Router();

router.get('/teams', teamsController.getTeams);
router.get('/players', playersController.getPlayers);
router.get('/selection/:team/:pick', playersController.getSelection);
router.get('/positions', positionsController.getPositions);
router.get('/draft-orders', draftOrderController.getDraftOrder);
router.get('/draft-orders/current', draftOrderController.getCurrentSeasonDraftOrder);
router.get('/trade-charts', tradeChartController.getTradeChart);
router.get('/trade-charts/current', tradeChartController.getCurrentSeasonTradeChart);
router.get('/mock-draft', mockDraftController.getInitialData);





module.exports = router;