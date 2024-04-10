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

// Aula 3 (Parte 1) - Interface

interface Maquina
{
    porte: string;
    anoFabricacao: number
}

// exemplo

let maquina1: Maquina = {porte: "pequeno", anoFabricacao: 2000}

interface Matematica
{   
    num1: number;
    num2: number;
    calcularContaBasica(sinal: string);
}

class MatematicaBasica implements Matematica
{
    num1: number;
    num2: number;

    constructor(num1: number, num2: number)
    {
        this.num1 = num1;
        this.num2 = num2;
    }

    getNum1()
    {
        console.log(this.num1)
    }

    calcularContaBasica(sinal: string) 
    {
        switch(sinal){
            case "+":
                console.log(`Resultado: ${this.num1 + this.num2}`);
                break;
            case "-":
                console.log(`Resultado: ${this.num1 - this.num2}`);
                break;
            case "*":
                console.log(`Resultado: ${this.num1 * this.num2}`);
                break;
            case "/":
                console.log(`Resultado: ${this.num1 / this.num2}`);
                break;
            default:
                console.log(`Operação não colocalizada, tente novamente`);
                break;
        }
    }
}

// exemplo
let basica = new MatematicaBasica(12, 10);
basica.calcularContaBasica("-");

// Aula 3 (Parte 2) - Genérics

// Genérics servem para fornecer uma diferente forma de mexer com os tipos em TypeScript

// No exemplo abaixo, tanto o tipo de dado na função, quanto as variaveis e o retorno da função são de um tipo qualquer
// Em TypeScript, esse tipo qualquer é definido pela letra T
function primeiroElemento<T>(arr: T[]): T 
{
    return arr[0];
}

// Chamando a função

console.log("Primeiro elemento do array: " + primeiroElemento([1, 2, 3, 5]));

interface TemNome
{
    nome: string;
}

class PessoaNome implements TemNome
{
    nome: string;

    constructor(nome: string)
    {
        this.nome = nome;
    }
}

class Caixa<T extends TemNome>
{
    conteudo: T;

    constructor(conteudo: T){
        this.conteudo = conteudo;
    }
}

let caixa = new Caixa({'nome': 'joão'});

console.log(`Nome dentro da caixa: ${caixa.conteudo.nome}`);

// Aula 4 - Modules e namespaces

import { OperacoesBasicas } from "./operacoesBasicas";
import { OperacoesAvancadas } from "./operacoesAvancadas";

console.log(OperacoesBasicas.somar(1,2));
console.log(OperacoesBasicas.subtrair(1,2));
console.log(OperacoesBasicas.multiplicar(1,2));
console.log(OperacoesBasicas.dividir(1,2));
console.log(OperacoesAvancadas.exponenciar(2, 4));
console.log(OperacoesAvancadas.logaritmo(5, 25));

