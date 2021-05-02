const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '65455665',{
    host: 'localhost',
    dialect: 'mysql'
})

/*Para verificar se o banco está concectado!*/
/*sequelize.authenticate().then(function(){
    console.log('Conectado')
}).catch(function(erro){
    console.log('ERRO: '+erro)
})*/

/*Para criar tabelas no banco*/
const Postagens = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/*Para inserir dados na tabela*/
Postagens.create({
    titulo: "1° Título",
    conteudo: "asddsfd dfasdf sda asdfasdf dsfadfs"
})

/*Para sincronizar com o banco*/
/*Postagens.sync({force:true})*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobreNome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/*Para sincronizar com o banco*/
/*Usuario.sync({force:true})*/

/*Para inserir dados na tabela*/
Usuario.create({
    nome: 'Fabio',
    sobreNome: 'Mendonça',
    idade: 21,
    email: 'teste@teste'
})

