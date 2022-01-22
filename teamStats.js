const team = {
    _players: [
      {firstName: 'Pablo',lastName: 'Sanchez',age: 11},
      {firstName: 'Cristian', lastName: 'Ronaldo',age: 20},
      {firstName: 'Frank',lastName: 'Lampard',age: 21}
        ],
    _games: [
       {opponent: 'Broncos', teamPoints: 42, opponentPoint: 27},
      {opponent: 'United', teamPoints: 41, opponentPoint: 20},
      {opponent: 'Castle', teamPoints: 12, opponentPoint: 17}
            ],
  
        get players() {
          return this._players;
        },
  
        get games() {
          return this._games;
        },
  
        addPlayer(firstName,lastName,age){
         let player = {
          firstName: firstName,
           lastName: lastName,
                age: age
         };
        this.players.push(player);
        },
  
      addGame(opponentName, teamPoints, opponentPoints)
        {
        let game = {
          opponent: opponentName,
          teamPoints: teamPoints,
          opponentPoint: opponentPoints
        }
        this.games.push(game);
        }
  };
  
  team.addGame('chelsea', 10, 28);
  team.addGame('united', 25, 44);
  team.addGame('juve', 15, 76);
  
  console.log(team.games);