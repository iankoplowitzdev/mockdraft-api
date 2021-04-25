const teams = [
  {
    city: 'Dallas',
    name: 'Cowboys',
    needs: {
      QB: 10,
      RB: 20,
      WR: 40,
      TE: 60,
      OT: 75,
      OG: 70,
      C: 50,
      EDGE: 60,
      DL: 70,
      LB: 60,
      CB: 80,
      S: 70
    }
  },
  {
    city: 'Washington',
    name: 'Football Team',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Philadelphia',
    name: 'Eagles',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'New York',
    name: 'Giants',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'New Orleans',
    name: 'Saints',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Atlanta',
    name: 'Falcons',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Carolina',
    name: 'Panthers',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Tampa Bay',
    name: 'Buccaneers',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Green Bay',
    name: 'Packers',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Detriot',
    name: 'Lions',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Chicago',
    name: 'Bears',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Minnesota',
    name: 'Vikings',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Seattle',
    name: 'Seahawks',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'San Francisco',
    name: '49ers',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Arizona',
    name: 'Cardinals',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Los Angeles',
    name: 'Rams',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Kansas City',
    name: 'Chiefs',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Denver',
    name: 'Broncos',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Las Vegas',
    name: 'Raiders',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Los Angeles',
    name: 'Chargers',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Baltimore',
    name: 'Ravens',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Pittsburgh',
    name: 'Steelers',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Cleveland',
    name: 'Browns',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Cincinnati',
    name: 'Bengals',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'New England',
    name: 'Patriots',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'New York',
    name: 'Jets',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Buffalo',
    name: 'Bills',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Miami',
    name: 'Dolphins',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Indianapolis',
    name: 'Colts',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Houston',
    name: 'Texans',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Jacksonville',
    name: 'Jaguars',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  },
  {
    city: 'Tennessee',
    name: 'Titans',
    needs: {
      QB: 50,
      RB: 50,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 50,
      EDGE: 50,
      DL: 50,
      LB: 50,
      CB: 50,
      S: 50
    }
  }
]

module.exports = teams;