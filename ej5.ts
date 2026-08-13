class Persona {
    private readonly dni: string;
    public nombre: string;
    private edad: number;
    private email: string;

    constructor(dni: string, nombre: string, edad: number, email: string) {
        this.dni = dni
        this.nombre = nombre
        this.edad = edad
        this.email = email
    }

    get Edad() {
        return this.edad
    }

    set Edad(age: number) {
        if (age < 0 || age > 120) {
            throw new Error("Valor fuera de rango")
        }
        this.edad = age
    }

    set Email(mail: string) {
        if (!mail.includes("@")) {
            throw new Error("El email no es válido")
        }
        this.email = mail
    }

    get Email() {
        return this.email
    }

    get esMayorDeEdad() {
        if (this.edad >= 18) {
            return true
        }
    }

    get datosPublicos() {
        return `${this.nombre}, ${this.esMayorDeEdad}`
    }
}

const persona1 = new Persona("45879899", "Juan", 25, "juan1232@gmail.com")
console.log(persona1.esMayorDeEdad)
console.log(persona1.datosPublicos)