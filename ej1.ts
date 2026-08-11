class Producto {
    nombre: string = "Heladera";
    precio: number = 2000000;
    categoria: string = "electrónica";
    stock: number = 20;

    constructor(nombre: string, precio: number, categoria: string, stock: number) {
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.stock = stock
    }

    describir(): string {
        return `${this.nombre} (${this.categoria}): ${this.precio} - ${this.stock}`
    }

}

const producto1 = new Producto("Teclado", 1300000, "electrónica", 8)
console.log(producto1.describir())
