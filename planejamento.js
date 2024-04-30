/*
- Produto  
- Tipo 
- pedido
- sequencia 

Para que um produto seja cadastrado o sistema precisa qua ele esteja associado a um tipo 
então o tipo precisa ser cadastrado entes de cadastrar um produto, um porduto pode pertencer
somente a um tipo enquanto um tipo pode estar relacionado a varios produtos.

Produzindo um pedido

Um pedido é composto por um cliente que fez o pedido e um produto e a quantidade qua foi comprada 
então ele envolve 3 tabelas 

1 - pedido(cliente, id,data_hora)
2 - produto (quantidade , codigo do produto)
3 - produto_pedido(nome do cliente,id_pedido, id_produto,quantidade do produto)

quem manipula a tabela porduto pedido e a sequencia, qua não é uma tabela e sim um controller
que tratves das dua funções cria ou desfaz a relação entre os pedidos e os produtos 

Eu tenho que construir uma rota que delete o pedido e todos os produtos relacionados a ele 
em cascata.para evitar sujeira no banco

*/