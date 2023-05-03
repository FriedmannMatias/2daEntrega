
const productos = [
    {
        nombre: "Logitech G933",
        precio: 36000,
        categoria: "auriculares",
        stock: 8,
        descripcion:{}
    },
    {
        nombre: "corsair pro",
        precio: 22700,
        categoria: "auriculares",
        stock: 5,
        descripcion:{}
    },
    {
        nombre: "Gamemax 10",
        precio: 19400,
        categoria: "auriculares",
        stock: 2,
        descripcion:{}    
    },
    {
        nombre: "G pro X",
        precio: 12100,
        categoria: "teclados",
        stock: 1,
        descripcion:{}
    },
    {
        nombre: "Redragon h220",
        precio: 7500,
        categoria: "teclados",
        stock: 4,
        descripcion:{}
    },
    {
        nombre: "KG962",
        precio: 6600,
        categoria: "teclados",
        stock: 12,
        descripcion:{}
    },
    {
        nombre: "Logitech k2",
        precio: 7000,
        categoria: "teclados",
        stock: 9,
        descripcion:{}
    },
    {
        nombre: "G 203",
        precio: 10999,
        categoria: "mouses",
        stock: 1,
        descripcion:{}
    },
    {
        nombre: "Razer mini",
        precio: 16000,
        categoria: "mouses",
        stock: 4,
        descripcion:{}
    },
    {
        nombre: "Viper X",
        precio: 16000,
        categoria: "mouses",
        stock: 7,
        descripcion:{}
    },
];

alert("Bienvenido a la tienda");

while(true){
    var categoria = prompt("¿Qué tipo de producto desea comprar?\n -Auriculares\n -Teclados\n -Mouses").toString().toLowerCase();
    switch(categoria){
        case "auriculares": break;
        case "teclados": break;
        case "mouses": break;
        default: alert("no ingreso ninguna categoria valida");
        continue;
    }
    break;
}

const productosPorCategoria = productos.filter((producto) => producto.categoria == categoria/* esta categoria hace referencia a var categoria del prompt*/);
//este filter devuelve [{}.{},{}] (un array con los productos que encontro que cumplen con las condiciones)
let nombres = productosPorCategoria.map((nombres) => nombres.nombre); //devuelve solamente los strings de los nombres de cada producto dentro de un solo array ["","",""]

while(true){
    var productoSeleccionado = prompt("Los productos disponibles son: " + nombres + " cual quieres comprar?").toString().toLowerCase();
    if(productosPorCategoria.some((producto)=>producto.nombre.toLowerCase() == productoSeleccionado)){ 
        // el some retorna V si es verdadera la condicion (si el nombre del producto es igual al que se paso por el prompt)
        break;
    }else{
        continue;
    }
}

let productoFinal = productosPorCategoria.find((producto)=>producto.nombre = productoSeleccionado);
//el find retorna solo el objeto que tenga el nombre que se envio a la base de datos por el prompt

let compra = true; // esto es para que si se cancela la compra no siga el codigo con el siguiente while ofreciendo un descuento
while (true){
    let decision = prompt("¿Desea comprar este periferico? \nProducto: "+ productoFinal.nombre+"\n" +"Precio: " +productoFinal.precio+"\n" +"Stock: "+productoFinal.stock+"\n"+ "Si es asi, digite SI o NO" ).toString().toLowerCase();
    switch (decision){
        case "si":
        break;
        case "no": 
            alert("Compra cancelada");
            compra = false;
        break;
        default: alert("No ingreso ni 'si', ni 'no'");
        continue;
    }
    break;
}


function precioConDescuento (precioProducto){
    let resultado =  (precioProducto / 100 * 20)
    return resultado;
}

while (compra){
    var promo = prompt("Perfecto, su producto tiene un descuento del 20%, desea aplicarlo? digite 'SI' o 'NO'")
    switch (promo.toLowerCase()){
        case "si":
            alert("Muy bien, el precio del producto con el descuento es de: " + precioConDescuento(productoFinal.precio));
            break;
        case "no":
            alert("Gracias por su compra");
            break;
        default:
            alert("No ingreso ni 'SI', ni 'NO'");
            continue;
    }
    break;
}