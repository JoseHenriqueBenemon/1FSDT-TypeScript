export namespace OperacoesAvancadas
{
    export function exponenciar(numero1: number, numero2: number): number
    {
        return Math.pow(numero1, numero2);
    }

    export function logaritmo(numero1: number, numero2: number): number
    {
        return Math.log(numero2) / Math.log(numero1);
    }
}