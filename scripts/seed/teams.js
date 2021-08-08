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
      ED: 60,
      DL: 70,
      LB: 60,
      CB: 80,
      S: 70
    },
    abbreviation: "DAL"    
  },
  {
    city: 'Washington',
    name: 'Football Team',
    needs: {
      QB: 80,
      RB: 50,
      WR: 70,
      TE: 50,
      OT: 70,
      OG: 40,
      C: 50,
      ED: 10,
      DL: 20,
      LB: 60,
      CB: 70,
      S: 70
    },
    abbreviation: "WAS"    
  },
  {
    city: 'Philadelphia',
    name: 'Eagles',
    needs: {
      QB: 50,
      RB: 40,
      WR: 60,
      TE: 20,
      OT: 50,
      OG: 50,
      C: 30,
      ED: 30,
      DL: 40,
      LB: 70,
      CB: 80,
      S: 60
    },
    abbreviation: "PHI"    
  },
  {
    city: 'New York',
    name: 'Giants',
    needs: {
      QB: 20,
      RB: 10,
      WR: 50,
      TE: 40,
      OT: 65,
      OG: 80,
      C: 60,
      ED: 70,
      DL: 20,
      LB: 50,
      CB: 80,
      S: 70
    },
    abbreviation: "NYG"    
  },
  {
    city: 'New Orleans',
    name: 'Saints',
    needs: {
      QB: 70,
      RB: 10,
      WR: 50,
      TE: 60,
      OT: 10,
      OG: 20,
      C: 30,
      ED: 20,
      DL: 30,
      LB: 50,
      CB: 50,
      S: 20
    },
    abbreviation: "NO"    
  },
  {
    city: 'Atlanta',
    name: 'Falcons',
    needs: {
      QB: 70,
      RB: 30,
      WR: 50,
      TE: 50,
      OT: 50,
      OG: 50,
      C: 70,
      ED: 80,
      DL: 30,
      LB: 20,
      CB: 60,
      S: 50
    },
    abbreviation: "ATL"    
  },
  {
    city: 'Carolina',
    name: 'Panthers',
    needs: {
      QB: 40,
      RB: 10,
      WR: 70,
      TE: 70,
      OT: 80,
      OG: 80,
      C: 70,
      ED: 30,
      DL: 50,
      LB: 10,
      CB: 80,
      S: 60
    },
    abbreviation: "CAR"    
  },
  {
    city: 'Tampa Bay',
    name: 'Buccaneers',
    needs: {
      QB: 70,
      RB: 20,
      WR: 10,
      TE: 20,
      OT: 10,
      OG: 30,
      C: 20,
      ED: 50,
      DL: 30,
      LB: 10,
      CB: 50,
      S: 30
    },
    abbreviation: "TB"    
  },
  {
    city: 'Green Bay',
    name: 'Packers',
    needs: {
      QB: 10,
      RB: 20,
      WR: 80,
      TE: 50,
      OT: 20,
      OG: 30,
      C: 80,
      ED: 40,
      DL: 30,
      LB: 80,
      CB: 50,
      S: 40
    },
    abbreviation: "GB"    
  },
  {
    city: 'Detriot',
    name: 'Lions',
    needs: {
      QB: 70,
      RB: 20,
      WR: 70,
      TE: 30,
      OT: 60,
      OG: 70,
      C: 10,
      ED: 30,
      DL: 60,
      LB: 60,
      CB: 40,
      S: 50
    },
    abbreviation: "DET"    
  },
  {
    city: 'Chicago',
    name: 'Bears',
    needs: {
      QB: 80,
      RB: 10,
      WR: 60,
      TE: 30,
      OT: 60,
      OG: 70,
      C: 70,
      ED: 50,
      DL: 30,
      LB: 20,
      CB: 90,
      S: 30
    },
    abbreviation: "CHI"    
  },
  {
    city: 'Minnesota',
    name: 'Vikings',
    needs: {
      QB: 30,
      RB: 10,
      WR: 20,
      TE: 40,
      OT: 70,
      OG: 80,
      C: 70,
      ED: 70,
      DL: 50,
      LB: 50,
      CB: 20,
      S: 30
    },
    abbreviation: "MIN"    
  },
  {
    city: 'Seattle',
    name: 'Seahawks',
    needs: {
      QB: 20,
      RB: 50,
      WR: 25,
      TE: 40,
      OT: 40,
      OG: 60,
      C: 50,
      ED: 50,
      DL: 50,
      LB: 20,
      CB: 60,
      S: 20
    },
    abbreviation: "SEA"    
  },
  {
    city: 'San Francisco',
    name: '49ers',
    needs: {
      QB: 80,
      RB: 30,
      WR: 50,
      TE: 10,
      OT: 10,
      OG: 30,
      C: 30,
      ED: 10,
      DL: 10,
      LB: 20,
      CB: 70,
      S: 60
    },
    abbreviation: "SF"    
  },
  {
    city: 'Arizona',
    name: 'Cardinals',
    needs: {
      QB: 10,
      RB: 60,
      WR: 60,
      TE: 50,
      OT: 30,
      OG: 30,
      C: 10,
      ED: 20,
      DL: 80,
      LB: 30,
      CB: 60,
      S: 40
    },
    abbreviation: "ARZ"    
  },
  {
    city: 'Los Angeles',
    name: 'Rams',
    needs: {
      QB: 30,
      RB: 20,
      WR: 30,
      TE: 30,
      OT: 10,
      OG: 30,
      C: 70,
      ED: 70,
      DL: 10,
      LB: 80,
      CB: 20,
      S: 50
    },
    abbreviation: "LAR"    
  },
  {
    city: 'Kansas City',
    name: 'Chiefs',
    needs: {
      QB: 5,
      RB: 15,
      WR: 50,
      TE: 20,
      OT: 20,
      OG: 20,
      C: 20,
      ED: 70,
      DL: 40,
      LB: 70,
      CB: 50,
      S: 20
    },
    abbreviation: "KC"    
  },
  {
    city: 'Denver',
    name: 'Broncos',
    needs: {
      QB: 70,
      RB: 30,
      WR: 20,
      TE: 20,
      OT: 50,
      OG: 70,
      C: 70,
      ED: 50,
      DL: 20,
      LB: 30,
      CB: 50,
      S: 50
    },
    abbreviation: "DEN"    
  },
  {
    city: 'Las Vegas',
    name: 'Raiders',
    needs: {
      QB: 40,
      RB: 20,
      WR: 50,
      TE: 30,
      OT: 50,
      OG: 60,
      C: 70,
      ED: 25,
      DL: 50,
      LB: 70,
      CB: 80,
      S: 20
    },
    abbreviation: "LV"    
  },
  {
    city: 'Los Angeles',
    name: 'Chargers',
    needs: {
      QB: 0,
      RB: 20,
      WR: 30,
      TE: 40,
      OT: 80,
      OG: 70,
      C: 10,
      ED: 30,
      DL: 50,
      LB: 70,
      CB: 80,
      S: 40
    },
    abbreviation: "LAC"    
  },
  {
    city: 'Baltimore',
    name: 'Ravens',
    needs: {
      QB: 10,
      RB: 30,
      WR: 80,
      TE: 30,
      OT: 80,
      OG: 70,
      C: 70,
      ED: 60,
      DL: 30,
      LB: 50,
      CB: 30,
      S: 30
    },
    abbreviation: "BAL"
  },
  {
    city: 'Pittsburgh',
    name: 'Steelers',
    needs: {
      QB: 80,
      RB: 70,
      WR: 20,
      TE: 50,
      OT: 80,
      OG: 30,
      C: 50,
      ED: 50,
      DL: 50,
      LB: 60,
      CB: 40,
      S: 10
    },
    abbreviation: "PIT"    
  },
  {
    city: 'Cleveland',
    name: 'Browns',
    needs: {
      QB: 10,
      RB: 5,
      WR: 30,
      TE: 20,
      OT: 20,
      OG: 10,
      C: 10,
      ED: 10,
      DL: 50,
      LB: 50,
      CB: 30,
      S: 10
    },
    abbreviation: "CLE"    
  },
  {
    city: 'Cincinnati',
    name: 'Bengals',
    needs: {
      QB: 0,
      RB: 20,
      WR: 60,
      TE: 50,
      OT: 30,
      OG: 70,
      C: 60,
      ED: 80,
      DL: 70,
      LB: 80,
      CB: 50,
      S: 10
    },
    abbreviation: "CIN"    
  },
  {
    city: 'New England',
    name: 'Patriots',
    needs: {
      QB: 80,
      RB: 20,
      WR: 70,
      TE: 20,
      OT: 50,
      OG: 20,
      C: 40,
      ED: 50,
      DL: 50,
      LB: 30,
      CB: 50,
      S: 30
    },
    abbreviation: "NE"    
  },
  {
    city: 'New York',
    name: 'Jets',
    needs: {
      QB: 100,
      RB: 40,
      WR: 20,
      TE: 50,
      OT: 60,
      OG: 50,
      C: 50,
      ED: 70,
      DL: 20,
      LB: 20,
      CB: 60,
      S: 30
    },
    abbreviation: "NYJ"    
  },
  {
    city: 'Buffalo',
    name: 'Bills',
    needs: {
      QB: 0,
      RB: 20,
      WR: 30,
      TE: 70,
      OT: 30,
      OG: 70,
      C: 50,
      ED: 30,
      DL: 30,
      LB: 50,
      CB: 60,
      S: 20
    },
    abbreviation: "BUF"    
  },
  {
    city: 'Miami',
    name: 'Dolphins',
    needs: {
      QB: 10,
      RB: 30,
      WR: 80,
      TE: 30,
      OT: 90,
      OG: 70,
      C: 70,
      ED: 70,
      DL: 30,
      LB: 50,
      CB: 20,
      S: 50
    },
    abbreviation: "MIA"    
  },
  {
    city: 'Indianapolis',
    name: 'Colts',
    needs: {
      QB: 30,
      RB: 20,
      WR: 70,
      TE: 30,
      OT: 50,
      OG: 30,
      C: 20,
      ED: 80,
      DL: 50,
      LB: 20,
      CB: 50,
      S: 50
    },
    abbreviation: "IND"    
  },
  {
    city: 'Houston',
    name: 'Texans',
    needs: {
      QB: 10,
      RB: 20,
      WR: 30,
      TE: 50,
      OT: 30,
      OG: 50,
      C: 70,
      ED: 80,
      DL: 90,
      LB: 80,
      CB: 70,
      S: 70
    },
    abbreviation: "HOU"    
  },
  {
    city: 'Jacksonville',
    name: 'Jaguars',
    needs: {
      QB: 100,
      RB: 30,
      WR: 70,
      TE: 50,
      OT: 70,
      OG: 30,
      C: 10,
      ED: 50,
      DL: 30,
      LB: 30,
      CB: 30,
      S: 50
    },
    abbreviation: "JAX"    
  },
  {
    city: 'Tennessee',
    name: 'Titans',
    needs: {
      QB: 30,
      RB: 10,
      WR: 30,
      TE: 20,
      OT: 50,
      OG: 20,
      C: 10,
      ED: 50,
      DL: 70,
      LB: 50,
      CB: 20,
      S: 30
    },
    abbreviation: "TEN"    
  }
]

module.exports = teams;