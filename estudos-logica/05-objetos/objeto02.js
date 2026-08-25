// Classes e Objetos:
/* 
A Classe é como uma forma que padroniza o formato de uma estrutura de dados
O Objeto mantém a padronização da Classe e implementa seus valores das propriedades
O Objeto também pode carregar métodos inteligentes ou funções próprias
Objetos são usados para trafegar dados internamente nas nossas aplicações
Instanciar objetos é criação do objeto através da classe, ou seja, nos moldes de uma classe

Uma classe além de guardar informações, ela pode guardar comportamento no 'constructor'
que é uma função
*/

class formaDeBolo {
    //escopo da classe
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar() {
        console.log("bolo assando de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo("baunilha", "coco")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()