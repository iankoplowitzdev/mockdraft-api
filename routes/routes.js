const express = require('express');
const teamsController = require('../controllers/teamsController');
const playersController = require('../controllers/playersController');



const router = express.Router();

// User routes
router.get('/teams', teamsController.getTeams);
router.get('/players', playersController.getPlayers);
router.get('/selection/:team/:pick', playersController.getSelection);

module.exports = router;