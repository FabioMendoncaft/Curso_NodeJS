/*Para criar banco de dados*/
CREATE DATABASE cadastrodepessoas;

/*Para criar tabelas*/
CREATE TABLE usuarios(
    nome VARCHAR (50),
    email VARCHAR(100),
    idade INT
);

/*Para inserir dados da tabela*/
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Junior Silva",
    "junior@gmail.com",
    8
);

/* Para pegar dados específicos da tabela*/
SELECT * FROM usuarios WHERE idade = 8;
SELECT * FROM usuarios WHERE nome = 'Fabio Mendonça';
SELECT * FROM usuarios WHERE idade >= 18;

/*Para apagar dados da tabela*/
DELETE FROM usuarios;  /*Assim irá apagar todos os dados da tabela (TOMAR CUIDADO!!)*/

/*Para apagar dados expecíficos da tabela*/
DELETE FROM usuarios WHERE nome = "Fabio Mendonça";

/*Para alterar dados da tabela*/
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Junior Silva";

