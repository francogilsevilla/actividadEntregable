// Manejador de productos
class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct(product) {
        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        return product || 'Not found';
    }

}

class Product {
    constructor(title, description, price, urlImg, id, stock) {
        if (!title || !description || !price || !id  === undefined) {
            throw Error("Todos los campos del producto son obligatorios");
        }

        this.name = title || ' ';
        this.description = description || ' ';
        this.price = price || 0;
        this.img = urlImg || '/img';
        this.id = id || 0;
        this.amount = stock || getRandom();
    }
}

function getRandom() {
    return Math.floor(Math.random() * 31) + 1;
}

// Pruebas
const productsManager = new ProductManager();

productsManager.addProduct(
    new Product("Pan", "1 kilo de pan", 1000, "url/img", 5));

productsManager.addProduct(
    new Product("Lechuga", "3 plantas de lechuga", 500, "url/img", 8));

productsManager.addProduct(
    new Product("Tomate", "1 kilo de tomate", 800, "url/img", 3));

productsManager.addProduct(
    new Product("Caramelos", "Caramelos masticables", 100, "url/img", 10));

const allProducts = productsManager.getProducts();
console.log("Todos los productos:", allProducts);

const findProduct = productsManager.getProductById(3);

const findProduct2 = productsManager.getProductById(5);

if (findProduct !== 'Not found') {
    console.log("Producto encontrado:", findProduct.name);
} else {
    console.log("Producto no encontrado.");
}

if (findProduct2 !== 'Not found') {
    console.log("Producto encontrado:", findProduct2.name);
} else {
    console.log("Producto no encontrado.");
}


