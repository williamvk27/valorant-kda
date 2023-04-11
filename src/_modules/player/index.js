
// ver como alimentar o "banco aparti do objeto e objeto aparti do banco" depois
//criar classe game que tera objeto do tipo Player 
// criar classe heroeshornors que contenha jogos 

const res = require("express/lib/response")
const { kill } = require("nodemon/lib/monitor/run")

class Player {
    nick = ''
    kill = 0
    death = 0 
    assis = 0

    constructor (nickParam, killParam = 0 , deathParam = 0 , assisParam = 0){
        this.nick = nickParam, 
        this.kill = killParam,
        this.death = deathParam,
        this.assis = assisParam

    }

    sumKill(amount){
        this.kill += amount        
    }

    sumDeath(amount){
        this.death += amount
    }

    sumAssis(amount){
        this.assis += amount
    }

    sumKda(nick, kill , death , assis){
        let kda = ((kill + assis)/death).toFixed(2)
        console.log(`KDA do jogador ${nick} : ${kda} `)    
    }

    sumFinal(nick, kill , death , assis){
        this.sumKill(kill);
        this.sumDeath(death);
        this.sumAssis(assis);
        this.sumKda(nick , kill , death , assis)
       // metodo para chamar os metodos anteriores somente em uma linha !
    }
    


   /* delPlayer(nick){
        for (let i = 0; i < playerList.length; i++) {
              playerList.splice(i, 1);
              console.log(`Jogador ${nick} removido com sucesso.`);
              return;
        }
    }*/
   
}


/*let playerList = [
    new Player('Bernard'),
    new Player('difuntobtv')
]*/

let Bernard = new Player('Bernard')
let difuntobtv = new Player('difuntobtv')


/*playerList[1].sumKill(8)
playerList[1].sumDeath(4)
playerList[1].sumAssis(5)
playerList[1].sumKda('difuntobtv',playerList[1].kill, playerList[1].death , playerList[1].assis)*/


difuntobtv.sumKill(10)
difuntobtv.sumAssis(2)
difuntobtv.sumDeath(5)

difuntobtv.sumKda(difuntobtv.nick, difuntobtv.kill, difuntobtv.death, difuntobtv.assis);

console.log(difuntobtv)
console.log(Bernard)

//playerList[0].delPlayer('Bernard')


//console.log(playerList)





/*
criar a classe JOGO , que recebe  minha classe PLAYER
a classe jogo tem o metodo de adicionar o PLAYER
tem a lista de jogadores e adiconar PLAYER na lista


*/ 

module.exports = Player

// apagar codigo desnecessarios na tarefa da sprint e ver o link de contato , tamanho dos icones com cris