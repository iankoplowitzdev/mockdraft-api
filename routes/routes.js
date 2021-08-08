const express = require('express');
const teamsController = require('../controllers/teamsController');
const playersController = require('../controllers/playersController');
const positionsController = require('../controllers/positionsController');
const draftOrderController = require('../controllers/draftOrderController');


const router = express.Router();

router.get('/teams', teamsController.getTeams);
router.get('/players', playersController.getPlayers);
router.get('/selection/:team/:pick', playersController.getSelection);
router.get('/positions', positionsController.getPositions);
router.get('/draft-order', draftOrderController.getDraftOrder);



module.exports = router;