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

    // Tiene que decir si puede vender esa cantidad sin quedarse en negativo //
    hayStock(cantidad: number): boolean {
        if ((this.stock - cantidad) >= 0) {
            return true;
        }
        else {
            return false;
        }
    }

    // Si hayStock(cantidad) es true, descuenta del stock; si no, no vende nada //
    venderUnidades(cantidad: number): string {
        if (this.hayStock(cantidad)) {
            this.stock -= cantidad
        }
        else {
            return `Error: No se pudo vender el producto. No hay stock disponible`
            // Justificación: Permite saber el por qué no se vendió nada
        }
        return `Stock actual: ${this.stock}`
    }

    // Devuelve el precio final sin modificar el precio original del producto //
    aplicarDescuento(porcentaje: number): number {
        let descuento = this.precio - ( this.precio * (porcentaje / 100))
        return descuento
    }

}

const producto1 = new Producto("Teclado", 1300000, "electrónica", 8)
console.log(producto1.describir())

console.log(producto1.hayStock(8))

console.log(producto1.venderUnidades(2))
console.log(producto1.stock)

console.log(producto1.aplicarDescuento(20))
