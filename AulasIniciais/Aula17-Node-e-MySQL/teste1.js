const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste1', 'root','65455665',{
    host: 'localhost',
    dialect: 'mysql'
})

/*sequelize.authenticate().then(function(){
    console.log('Conectado')
}).catch(function(erro){
    console.log('Erro: '+erro)
})*/


const Conteudo = sequelize.define('usuarios', {
    titulo:{
        type: Sequelize.STRING
    },
    descricao:{
        type: Sequelize.STRING
    }
})

//Conteudo.sync({force:true})

Conteudo.create({
    titulo: "1° Título",
    descricao: "asfsdsd sdafsdf asdfsad"
})

