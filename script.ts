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
