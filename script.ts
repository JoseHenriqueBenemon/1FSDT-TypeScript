// Aula 1 (Parte 1) - Desenvolvimento básico, classe Carro

interface Carro{
    acelerar: () => string;
}

class Carro{
    constructor(public marca: string, public modelo: string) {}

    exibirInfo() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

Carro.prototype.acelerar = function(){
    return `O ${this.modelo} está acelerando!`;
}

let meuCarro = new Carro("Honda", "City");

console.log(meuCarro.exibirInfo());
console.log(meuCarro.acelerar());

// Aula 1 (Parte 2) - Desenvolvimento Básico, classe Livro

// Compilar => npx tsc nome_do_arquivo.ts
// Rodar => node nome_do_arquivo.js

class Livro{
    titulo: string;
    anoPublicacao: number;

    constructor(titulo: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }

    exibirDetalhes(){
        console.log(`Título: ${this.titulo}, Ano de Publicação: ${this.anoPublicacao}`);
    }
}

const livroFavorito = new Livro("Malu de Bicicleta", 2004)
livroFavorito.exibirDetalhes()

// Aula 2 (Parte 1 e Parte 2) - Orientação a Objeto I

class Pessoa
{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number)
    {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao()
    {
        console.log(`Olá, meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const aluno = new Pessoa("José Henrique", 21);

aluno.saudacao()

class Animal
{   
    // Ao tratarmos de encapsulamento, o correto é deixar os atributos como private ou protected
    private especie: string; 
    
    constructor(especie: string)
    {
        this.especie = especie;
    }
    
    // Somente cosneguimos capturar os atributos via get
    getEspecie()
    {
        return this.especie;
    }
    
    fazerSom()
    {
        console.log("O animal faz um som!");
    }
}

// Nesta classe utilizamos Herança para pegar atributos e métodos da superclasse (Animal) 
// pois neste programa faz sentido o Cachorro ser uma subclasse da classe Animal, afinal, todo cachorro é um animal
class Cachorro extends Animal
{
    // Classe com polimorfismo (Uma classe 'filha' que sobrescreve um  método da classe 'pai')
    fazerSom()
        {
            console.log("O cachorro late!")
        }
}

class Gato extends Animal 
{
    fazerSom()
    {
        console.log("O gato mia!")
    }
}

const cachorro1 = new Cachorro("Vira-Lata");
cachorro1.fazerSom()

