class CuentaBancaria {
    titular: string;
    private saldo: number;
    private historialMovimientos: string[];

    constructor(titular: string, saldo: number, historialMovimientos: string[]) {
        this.titular = titular
        this.saldo = saldo
        this.historialMovimientos = historialMovimientos
    }

    depositar(monto: number): number {
        if (monto <= 0) {
            throw new Error("No se pueden depositar montos menores o iguales a 0")
        }
        this.saldo = this.saldo + monto
        return this.saldo
    }

    retirar(monto: number): number {
        if ((monto > this.saldo) || (monto <= 0)) {
            throw new Error("El retiro no puede superar el saldo disponible ni debe ser menor ni igual a 0")
        }
        this.saldo = this.saldo - monto
        return this.saldo
    }

    consultarSaldo(): number {
        return this.saldo
    }

    obtenerHistorial(): string[] {
        return [...this.historialMovimientos]
    }

}

const cuenta1 = new CuentaBancaria("Juan", 10000, ["depósito: +2000", "depósito: +1400"])

console.log(cuenta1.depositar(20))
console.log(cuenta1.retirar(10))
console.log(cuenta1.consultarSaldo())
console.log(cuenta1.obtenerHistorial())
