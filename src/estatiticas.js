let Jogadores = []


  //funcao para calcular KDA dos jogadors
//O método find é uma função nativa do JavaScript que pode ser usada em arrays para encontrar o primeiro elemento que satisfaz uma condição específica. A sintaxe básica do método é a seguinte , nao tinha utilizado ou visto este metodo!
function totalKDA(nick) {
    const jogador = Jogadores.find(jogador => jogador.nick === nick);

//Esse código é uma estrutura condicional que verifica se existe um objeto jogador com algum valor. Se o objeto jogador existir, ele calcula o KDA (Kills/Deaths/Assists) do jogador e imprime o resultado no console com uma mensagem contendo o apelido (nick) do jogador e o valor do KDA. Se o objeto jogador não existir, ele imprime uma mensagem informando que o jogador não foi encontrado.
    if (jogador) {
        const kda = jogador.death > 0 ? (jogador.kills + jogador.assists) / jogador.death : (jogador.kills + jogador.assists);
        console.log(`O KDA total do jogador ${nick} é: ${kda.toFixed(2)}`);
    } else {
        console.log(`Jogador ${nick} não encontrado`);
    }
}

module.exports = totalKDA()



