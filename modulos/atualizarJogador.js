/*funcao que atualizar os STATUS do KDA do JOGADOR.
a função funciona da seguinte forma : ela recebe por parâmetros (Jogadores = array, nick = que vem do array , as novas kills , e novas mortes)

*/
function atualizarKDA(Jogadores, nick, novasKills, novasDeaths , novasAssistence) {
    for (let i = 0; i < Jogadores.length; i++) {
        const jogador = Jogadores[i];
        if (jogador.nick === nick) {
          jogador.kills += novasKills;
          jogador.death += novasDeaths;
          jogador.assistence += novasAssistence
          jogador.kda = (jogador.kills / jogador.death).toFixed(2);
          break;
        }
      }
  }

module.exports = atualizarKDA

/*/*funcao que atualizar os STATUS do KDA do JOGADOR.
a função funciona da seguinte forma : ela recebe por parâmetros (Jogadores = array, nick = que vem do array , as novas kills , e novas mortes)


function atualizarKDA(Jogadores, nick, novasKills, novasDeaths , novasAssistence) {
  for (let i = 0; i < Jogadores.length; i++) {
      const jogador = Jogadores[i];
      if (jogador.nick === nick) {
        jogador.kills += novasKills;
        jogador.death += novasDeaths;
        jogador.assistence += novasAssistence;
        (jogador.kills + jogador.assistence) / jogador.death.toFixed(2);
        break;
      }
    }
}

module.exports = atualizarKDA*/