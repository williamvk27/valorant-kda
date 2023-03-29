const Jogadores = [] // criando um array de jogadores

// função que adiciona jogador
function addJogador (nick , kills , death , assistence) {

 Jogadores.push({

     nick : nick,

     kills : kills,

     death : death,

     assistence : assistence     

 })
}

// criando os jogadores , com parametros nick / kill / death / assistence 

addJogador('difuntobtv', 0 , 0 , 0)

addJogador('mikinho', 0 , 0 , 0)

addJogador('suicida', 0, 0 , 0)

addJogador('helio', 0 , 0 ,0)

addJogador('reed', 0 , 0 , 0)

addJogador('daniel', 0 , 0 , 0)

addJogador('leleck', 0,0,0)

function atualizarEstatisticas(difuntobtv, kills, death, assistence) {
    const jogador = Jogadores.find(jogador => jogador.nick === difuntobtv);
  
    if (jogador) {
      jogador.kills = kills;
      jogador.death = death;
      jogador.assistence = assistence;
      console.log(`Estatísticas atualizadas para o jogador ${difuntobtv}`);
    } else {
      console.log(`Jogador ${apelido} não encontrado`);
    }
  }
  
  

  atualizarEstatisticas('difuntobtv', Jogadores.find(jogador => jogador.nick === 'difuntobtv').kills + 20, Jogadores.find(jogador => jogador.nick === 'difuntobtv').death + 3, Jogadores.find(jogador => jogador.nick === 'difuntobtv').assistence + 1);

  atualizarEstatisticas('difuntobtv', Jogadores.find(jogador => jogador.nick === 'difuntobtv').kills + 30, Jogadores.find(jogador => jogador.nick === 'difuntobtv').death + 3, Jogadores.find(jogador => jogador.nick === 'difuntobtv').assistence + 1);


//funcao para calcular KDA dos jogadors

function calcularKDA(jogadores) {

    for (let i = 0; i < jogadores.length; i++) {

        const jogador = jogadores[i];

        const kda = (jogador.kills + jogador.assistence) / jogador.death;

        console.log(`KDA de ${jogador.nick}: ${kda.toFixed(2)}`);

        }

}
