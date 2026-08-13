import { Empleado, EmpleadoFijo } from "./ej3.ts"

class EmpleadoPorHoras extends Empleado {
    horasTrabajadas: number;
    valorHora: number;

    constructor(nombre: string, antiguedad: number, horasTrabajadas: number, valorHora: number) {
        super(nombre, antiguedad)
        this.horasTrabajadas = horasTrabajadas
        this.valorHora = valorHora
    }

    calcularSueldo(): number {
        return this.horasTrabajadas * this.valorHora
    }
}

class EmpleadoPorComision extends Empleado {
    ventasDelMes: number;
    porcentajeComision: number;

    constructor(nombre: string, antiguedad: number, ventasDelMes: number, porcentajeComision: number) {
        super(nombre, antiguedad)
        this.ventasDelMes = ventasDelMes
        this.porcentajeComision = porcentajeComision
    }

    calcularSueldo(): number {
        return this.ventasDelMes * this.porcentajeComision
    }
}

const empleados: Empleado[] = [
    new EmpleadoFijo("Franco", 6, 900),
    new EmpleadoPorComision("Felipe", 1, 20, 4),
    new EmpleadoPorHoras("Santiago", 5, 60, 8),
]

for (let empleado of empleados) {
    console.log(empleado.calcularSueldo())
}

const calcularNomina = (empleados: Empleado[]): number => {
    let totalAPagar = 0
    for (let empleado of empleados) {
        totalAPagar += empleado.calcularSueldo()
    }
    return totalAPagar
}

console.log(calcularNomina(empleados))