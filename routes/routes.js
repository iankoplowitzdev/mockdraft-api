const express = require('express');
const teamsController = require('../controllers/teamsController');
const playersController = require('../controllers/playersController');
const positionsController = require('../controllers/positionsController');
const draftOrderController = require('../controllers/draftOrderController');
const tradeChartController = require('../controllers/tradeChartController');

const router = express.Router();

router.get('/teams', teamsController.getTeams);
router.get('/players', playersController.getPlayers);
router.get('/selection/:team/:pick', playersController.getSelection);
router.get('/positions', positionsController.getPositions);
router.get('/draft-order', draftOrderController.getDraftOrder);
router.get('/draft-order/current', draftOrderController.getCurrentSeasonDraftOrder);
router.get('/trade-chart', tradeChartController.getTradeChart);
router.get('/trade-chart/current', tradeChartController.getCurrentSeasonTradeChart);




module.exports = router;