var pessoa = new Object();
pessoa.nome = "joao";
pessoa.idade = 20;
pessoa.hobby = "tocar violão";


const pessoa2 = {
    nome: "thiago",
    idade: 20,
    hobby: "joga vdg"

}

const pessoa3 = {nome: "tres", idade: 18, hobby:"ndanda"}

const pessoa4 = {};
pessoa4.nome = "eita porra";
pessoa4.idade = 18;
pessoa4.hobby = "vamlo"

function Pessoa5(Nomereal, idadereal, hobbyreal){
    this.nome = Nomereal;
    this.idade = idadereal;
    this.hobby = hobbyreal; 
}

const joao = new Pessoa5('teeeee', 20, "eeee violão");

function apresentar(alguem){
    console.log(`Olá, meu nome é ${alguem.nome}, tenho ${alguem.idade} anos e o meu hobby é ${alguem.hobby}.`);
}
