const express = require('express');
const teamsController = require('../controllers/teamsController');
const playersController = require('../controllers/playersController');
const positionsController = require('../controllers/positionsController');

const router = express.Router();

// User routes
router.get('/teams', teamsController.getTeams);
router.get('/players', playersController.getPlayers);
router.get('/selection/:team/:pick', playersController.getSelection);
router.get('/positions', positionsController.getPositions);


module.exports = router;