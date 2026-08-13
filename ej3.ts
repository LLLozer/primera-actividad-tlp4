export class Empleado {
    protected nombre: string;
    protected antiguedad: number;
    
    constructor(nombre: string, antiguedad: number) {
        this.nombre = nombre
        this.antiguedad = antiguedad
    }

    calcularSueldo(): number {
        return 0
    }

    describir(): string {
        return `${this.nombre} (${this.antiguedad} - sueldo: ${this.calcularSueldo()})`
    }
}

export class EmpleadoFijo extends Empleado {
    sueldoBase: number;
    
    constructor(nombre: string, antiguedad: number, sueldoBase: number) {
        super(nombre, antiguedad)
        this.sueldoBase = sueldoBase
    }


    calcularSueldo(): number {
        return this.sueldoBase + ( (this.sueldoBase*0.02) * this.antiguedad )
    }
}

const empleado1 = new EmpleadoFijo("Juan", 5, 1000)
console.log(empleado1.calcularSueldo())