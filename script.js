"use strict";
// Aula 1 (Parte 1) - Desenvolvimento básico, classe Carro
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Carro.prototype.exibirInfo = function () {
        return "Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo);
    };
    return Carro;
}());
Carro.prototype.acelerar = function () {
    return "O ".concat(this.modelo, " est\u00E1 acelerando!");
};
var meuCarro = new Carro("Honda", "City");
console.log(meuCarro.exibirInfo());
console.log(meuCarro.acelerar());
// Aula 1 (Parte 2) - Desenvolvimento Básico, classe Livro
// Compilar => npx tsc nome_do_arquivo.ts
// Rodar => node nome_do_arquivo.js
var Livro = /** @class */ (function () {
    function Livro(titulo, anoPublicacao) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.exibirDetalhes = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Ano de Publica\u00E7\u00E3o: ").concat(this.anoPublicacao));
    };
    return Livro;
}());
var livroFavorito = new Livro("Malu de Bicicleta", 2004);
livroFavorito.exibirDetalhes();
// Aula 2 (Parte 1 e Parte 2) - Orientação a Objeto I
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.saudacao = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e minha idade \u00E9 ").concat(this.idade));
    };
    return Pessoa;
}());
var aluno = new Pessoa("José Henrique", 21);
aluno.saudacao();
var Animal = /** @class */ (function () {
    function Animal(especie) {
        this.especie = especie;
    }
    // Somente cosneguimos capturar os atributos via get
    Animal.prototype.getEspecie = function () {
        return this.especie;
    };
    Animal.prototype.fazerSom = function () {
        console.log("O animal faz um som!");
    };
    return Animal;
}());
// Nesta classe utilizamos Herança para pegar atributos e métodos da superclasse (Animal) 
// pois neste programa faz sentido o Cachorro ser uma subclasse da classe Animal, afinal, todo cachorro é um animal
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Classe com polimorfismo (Uma classe 'filha' que sobrescreve um  método da classe 'pai')
    Cachorro.prototype.fazerSom = function () {
        console.log("O cachorro late!");
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.fazerSom = function () {
        console.log("O gato mia!");
    };
    return Gato;
}(Animal));
var cachorro1 = new Cachorro("Vira-Lata");
cachorro1.fazerSom();
// exemplo
var maquina1 = { porte: "pequeno", anoFabricacao: 2000 };
var MatematicaBasica = /** @class */ (function () {
    function MatematicaBasica(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    MatematicaBasica.prototype.getNum1 = function () {
        console.log(this.num1);
    };
    MatematicaBasica.prototype.calcularContaBasica = function (sinal) {
        switch (sinal) {
            case "+":
                console.log("Resultado: ".concat(this.num1 + this.num2));
                break;
            case "-":
                console.log("Resultado: ".concat(this.num1 - this.num2));
                break;
            case "*":
                console.log("Resultado: ".concat(this.num1 * this.num2));
                break;
            case "/":
                console.log("Resultado: ".concat(this.num1 / this.num2));
                break;
            default:
                console.log("Opera\u00E7\u00E3o n\u00E3o colocalizada, tente novamente");
                break;
        }
    };
    return MatematicaBasica;
}());
// exemplo
var basica = new MatematicaBasica(12, 10);
basica.calcularContaBasica("-");
// Aula 3 (Parte 2) - Genérics
// Genérics servem para fornecer uma diferente forma de mexer com os tipos em TypeScript
// No exemplo abaixo, tanto o tipo de dado na função, quanto as variaveis e o retorno da função são de um tipo qualquer
// Em TypeScript, esse tipo qualquer é definido pela letra T
function primeiroElemento(arr) {
    return arr[0];
}
// Chamando a função
console.log("Primeiro elemento do array: " + primeiroElemento([1, 2, 3, 5]));
var PessoaNome = /** @class */ (function () {
    function PessoaNome(nome) {
        this.nome = nome;
    }
    return PessoaNome;
}());
var Caixa = /** @class */ (function () {
    function Caixa(conteudo) {
        this.conteudo = conteudo;
    }
    return Caixa;
}());
var caixa = new Caixa({ 'nome': 'joão' });
console.log("Nome dentro da caixa: ".concat(caixa.conteudo.nome));
// Aula 4 - Modules e namespaces
var operacoesBasicas_1 = require("./operacoesBasicas");
var operacoesAvancadas_1 = require("./operacoesAvancadas");
console.log(operacoesBasicas_1.OperacoesBasicas.somar(1, 2));
console.log(operacoesBasicas_1.OperacoesBasicas.subtrair(1, 2));
console.log(operacoesBasicas_1.OperacoesBasicas.multiplicar(1, 2));
console.log(operacoesBasicas_1.OperacoesBasicas.dividir(1, 2));
console.log(operacoesAvancadas_1.OperacoesAvancadas.exponenciar(2, 4));
console.log(operacoesAvancadas_1.OperacoesAvancadas.logaritmo(5, 25));
