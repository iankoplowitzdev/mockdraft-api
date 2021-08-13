'use strict';

const playersService = require('./players');
const positionsService = require('./positions');
const teamsService = require('./teams');
const draftOrderService = require('./draftOrder');
const tradeChartService = require('./tradeChart');



const mockDraft = {
  getInitialData: async () => {
    const playersFromDb = await playersService.getPlayers();
    const players = playersFromDb.sort((p1, p2) => (p1.rank > p2.rank) ? 1 : -1);
    const positions = await positionsService.getPositions();
    const teams = await teamsService.getTeams();
    const currentYearDraftOrder = await draftOrderService.getCurrentYear__lean();
    const currentYearTradeChartObj = await tradeChartService.getCurrentYear();
    const currentYearTradeChart = currentYearTradeChartObj.chart;
    const completeDraftOrder = [];
    let pickCounter = 0;
    const numSelections = [];
    
    for (let roundNum = 1; roundNum <= 7; roundNum++) {
      completeDraftOrder.push(...currentYearDraftOrder[`r${roundNum}`].map((team, index) => ({
        team: team,
        tradeChartValue: currentYearTradeChart[pickCounter++],
        round: roundNum,
        selection: index + 1
      })));
      numSelections.push(currentYearDraftOrder[`r${roundNum}`].length);
    };

    return {
      players: players,
      positions: positions,
      teams: teams,
      draftOrder: completeDraftOrder,
      numSelections: numSelections
    }
  }
}

module.exports = mockDraft;