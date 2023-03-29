let Jogadores = []
const addJogador = require('../modulos/addJogador');
const atualizarKDA = require ('../modulos/atualizarJogador')


addJogador(Jogadores,'difuntobtv', 0, 0, 0);
addJogador(Jogadores,'mikinhoGTC', 0, 0, 0);
addJogador(Jogadores,'helio', 0, 0, 0);


atualizarKDA(Jogadores, 'difuntobtv', 10, 15, 5);
atualizarKDA(Jogadores, 'difuntobtv', 60, 15, 5);
atualizarKDA(Jogadores, 'mikinhoGTC', 1, 15, 5);
atualizarKDA(Jogadores, 'helio', 12, 15, 5);

console.log(Jogadores)








