//Constantes
const precioZapatilla = 50000
const precioBota = 80000
const precioSandalia = 35000

//Variables, productos de la página
let zapatilla = 0
let bota = 0
let sandalia = 0
let totalA = 0
let totalB = 0
let valorDescuento = 0
let codigo = 0 

//Funciones: suma, descuento
function subtotal () {
    totalA = (zapatilla * precioZapatilla + bota * precioBota + sandalia * precioSandalia);
    return totalA
}

function calcDescuento () {
    switch (codigo) {
        case "Tienda10":
            valorDescuento = totalA * 0.1; 
            totalB = totalA - valorDescuento
            alert("Su descuento es de $" + valorDescuento + ". Su precio final es de $" + totalB);
            break;

        case "Tienda20":
            valorDescuento = totalA * 0.2; 
            totalB = totalA - valorDescuento
            alert("Su descuento es de $" + valorDescuento + ". Su precio final es de $" + totalB);
            break;
        
        case "Tienda30":
            valorDescuento = totalA * 0.3; 
            totalB = totalA - valorDescuento
            alert("Su descuento es de $" + valorDescuento + ". Su precio final es de $" + totalB);
            break;
        
        default:
            alert("Código no válido");
            totalB = totalA;
            //Mejorable, podría volver a preguntar el código
            break; 
    }    
}

//Sistema de compra asistida
let ingreso = prompt("Bienvenido a la tienda de zapatos. Ingrese el producto que desea añadir al carrito: 1: Zapatillas 2: Botas 3: Sandalias")
while (ingreso !=4) {
    switch (ingreso) {
        case "1":
            alert("Se agregó: Zapatillas");
            zapatilla++;
            break;
        case "2":
            alert("Se agregó: Botas");
            bota++;
            break;
        case "3":
            alert("Se agregó: Sandalias");
            sandalia++;
            break;
        default:
            alert("Producto no válido");
            break;
    }
    ingreso = prompt ("Agregar productos: 1: Zapatillas 2: Botas 3: Sandalias 4: Finalizar")
}
console.log("Cantidad de zapatillas: " + zapatilla); 
console.log("Cantidad de botas: " + bota);
console.log("Cantidad de sandalias: " + sandalia);

subtotal()

console.log("Subtotal: $" + totalA);
alert("Su carrito: zapatillas: " + zapatilla + " botas: " + bota + " sandalias: " + sandalia);
alert("El subtotal es de $" + totalA)

let descuento = prompt("¿Desea ingresar un código de descuento? (Responder SI o NO)")

if (descuento == "SI") {
    codigo = prompt("Ingrese su código de descuento: ");
        calcDescuento ();
        console.log("Descuento: $" + valorDescuento);
    }
    else if (descuento == "NO") {
        alert ("Su precio final es $" + totalA);
    }
    else {
        alert("Respuesta no válida");
        alert ("Su precio final es $" + totalA);
    }

console.log("Precio final: $" + totalB);
alert("¡Gracias por su compra!");
console.log("Fin de la ejecución");