const Player = require('./index')
const Game = require('./jogo')


const valorant = new Game ()
let heliogas = new Player('heliogas')
let suicida = new Player('suicida')
let mikinhoGTC = new Player('mikinhoGTC')
let pierrywl = new Player('pierrywl')

heliogas.sumKill(15)
heliogas.sumDeath(5)
heliogas.sumAssis(2)
heliogas.sumKda(heliogas.nick , heliogas.kill , heliogas.death , heliogas.assis)

suicida.sumKill(20)
suicida.sumDeath(6)
suicida.sumAssis(8)
suicida.sumKda(suicida.nick , suicida.kill , suicida.death , suicida.assis)


mikinhoGTC.sumKill(10)
mikinhoGTC.sumDeath(5)
mikinhoGTC.sumAssis(6)
mikinhoGTC.sumKda(mikinhoGTC.nick , mikinhoGTC.kill , mikinhoGTC.death , mikinhoGTC.assis)

mikinhoGTC.sumFinal('mikinhoGTC', 2 , 5 , 4)


valorant.incrementPlayers(heliogas)
valorant.incrementPlayers(suicida)
valorant.incrementPlayers(mikinhoGTC)
valorant.incrementPlayers(pierrywl)
console.log(valorant)