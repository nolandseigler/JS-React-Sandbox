const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 10
        },
        {
            firstName: 'Kenny',
            lastName: 'Kawaguchi',
            age: 10
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 6,
            opponentPoints: 2
        },
        {
            opponent: 'Bears',
            teamPoints: 3,
            opponentPoints: 2
        },
        {
            opponent: 'Beavers',
            teamPoints: 1,
            opponentPoints: 2
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age,
        }
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints
        }
        this._games.push(game);
    }
}


//add players
team.addPlayer("Bob", "Saget", 49)
team.addPlayer("Steph", "Curry", 28)
team.addPlayer("Lisa", "Leslie", 44)
team.addPlayer("Bugs", "Bunny", 76)

//add games
team.addGame("Mavericks", 3, 2)
team.addGame("Coyotes", 5, 3)
team.addGame("Bucks", 5, 6)

console.log(team._players)
console.log(team._games)