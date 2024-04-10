"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperacoesBasicas = void 0;
var OperacoesBasicas;
(function (OperacoesBasicas) {
    function somar(numero1, numero2) {
        return numero1 + numero2;
    }
    OperacoesBasicas.somar = somar;
    function subtrair(numero1, numero2) {
        return numero1 - numero2;
    }
    OperacoesBasicas.subtrair = subtrair;
    function multiplicar(numero1, numero2) {
        return numero1 * numero2;
    }
    OperacoesBasicas.multiplicar = multiplicar;
    function dividir(numero1, numero2) {
        return numero1 / numero2;
    }
    OperacoesBasicas.dividir = dividir;
})(OperacoesBasicas || (exports.OperacoesBasicas = OperacoesBasicas = {}));
