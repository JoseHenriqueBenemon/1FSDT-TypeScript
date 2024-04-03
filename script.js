// Aula 1 (Parte 1) - Desenvolvimento básico, classe Carro
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
