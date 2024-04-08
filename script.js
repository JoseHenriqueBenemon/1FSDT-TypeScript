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
// Aula 2 (Parte 1) - Orientação a Objeto I
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
// Classe com polimorfismo (Uma classe 'filha' que sobrescreve a classe 'pai')
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
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
