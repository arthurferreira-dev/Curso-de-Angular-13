# Compartilhando dados no Angular

* Em Angular podemos compartilhar **dados do componente pai com o componente filho**;
* Para isso, vamos disponibilizar na chamada do componente o nome do dado que será recebido com a seguinte sintaxe: **[dado]**;
* E no código *.ts* do componente filho vamos utilizar o decorator **@input**, que tem como papel entregar o dado para o template;