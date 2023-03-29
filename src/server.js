const express = require('express');
const app = express();
const http = require ('http')
const porta = 3000
const host = '127.0.0.1'

const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

let Jogadores = []

app.get('/jogadores', (req, res) => {
    
    res.json({Jogadores});
});

app.post('/inserir',(req,res)=>{
    
 Jogadores.push({
        nick : req.body.nickname,
   
        kills : 0,
   
        death : 0,
   
        assists : 0
    })


    res.json({mensagem:'Jogador adicionado com sucesso'});
})

app.post('/inserir',(req,res)=>{
    
    Jogadores.push({

           nick : req.body.nickname,
      
           kills : req.body.kills,
      
           death : req.body.death,
      
           assists : req.body.assists
       })

        for (let x = 0 ; x < Jogadores.length ; x++){
            if(Jogadores[x].nick == nickname){
            index = x
        }

    }
   
   
       res.json({mensagem:'Jogador adicionado com sucesso'});
   })

app.get('/delete',(req,res)=>{
    
    let nickname = req.body.nickname

    let index;
    
    for (let x = 0 ; x < Jogadores.length ; x++){
        if(Jogadores[x].nick == nickname){
            index = x
        }

    }

    Jogadores.splice(index,1)

    res.json({mensagem:'Jogador deletado com sucesso'});

})

/*
const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'});
        if(req.url == '/'){
            res.write('<h1>Bem Vindo </h1>')
        }
        else if (req.url == '/players'){
            res.write('<h1>Seja Bem Vindo a Pagina de Jogadores')
        }
        
res.end()
})*/

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ');
})