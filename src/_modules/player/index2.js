const Funcionario = require('./funcionario')
const Empresa = require('./empresa')

const funcionario1 = new Funcionario()
funcionario1.primeiro_nome = 'Bernard'


const funcionario2 = new Funcionario()
funcionario2.primeiro_nome = 'Will'

const empresa = new Empresa()

empresa.adicioneFuncionario(funcionario1)
empresa.adicioneFuncionario(funcionario2)