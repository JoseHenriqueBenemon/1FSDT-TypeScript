"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperacoesAvancadas = void 0;
var OperacoesAvancadas;
(function (OperacoesAvancadas) {
    function exponenciar(numero1, numero2) {
        return Math.pow(numero1, numero2);
    }
    OperacoesAvancadas.exponenciar = exponenciar;
    function logaritmo(numero1, numero2) {
        return Math.log(numero2) / Math.log(numero1);
    }
    OperacoesAvancadas.logaritmo = logaritmo;
})(OperacoesAvancadas || (exports.OperacoesAvancadas = OperacoesAvancadas = {}));
