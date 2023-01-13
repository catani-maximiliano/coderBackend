const fs = require("fs")

class ProductManager {
  #Products = [];
  

  constructor() {
    this.id = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    this.id++;
    const searchProduct = this.#Products.find(
      (product) => product.code === code
    );
    const producto = {
      id: this.id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (
      !searchProduct &&
      title &&
      description &&
      price &&
      thumbnail &&
      code &&
      stock
    ) {
      this.#Products.push(producto);
      console.log(`Evento creado con id: ${this.id}`);
    } else {
      console.log("ERROR: complete todos datos de entrada");
    }
  }

  getProducts() {
    return console.log(this.#Products);
  }

  getProductById(idProduct) {
    const producto = this.#Products.find((evento) => evento.id === idProduct);

    if (!producto) {
      return console.log();
    }

    return console.log(producto);
  }

  updateProduct(idProduct, title, description, price, thumbnail, code, stock) {
    const findProducto = this.#Products.find((evento) => evento.id === idProduct);
    const indexProducto = this.#Products.indexOf(findProducto);

    const product = {
      id: idProduct,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    if (
      title &&
      description &&
      price &&
      thumbnail &&
      code &&
      stock
    ) {
      this.#Products.splice(indexProducto, 1, product);
      console.log(`Evento modificado con id: ${this.id}`);
      return console.log(this.#Products[indexProducto])
    } else {
      console.log("ERROR: complete todos datos de entrada");
    }
  }

  deleteProduct(idProduct){
    const findProducto = this.#Products.find((evento) => evento.id === idProduct);
    const indexProducto = this.#Products.indexOf(findProducto);
    this.#Products.splice(indexProducto, 1);

  }
}

// ----TESTING----

const admProductos = new ProductManager();
const comestibles = [
  {
    title: "papa",
    description: "ricas y nutritivas",
    price: "100",
    thumbnail: "papa.com",
    code: "55",
    stock: "20",
  },
  {
    title: "manzana",
    description: "fruta deliciosa",
    price: "250",
    thumbnail: "manzana.com",
    code: "88",
    stock: "250",
  },
  {
    title: "zanahoria",
    description: "las mejores de la provinca",
    price: "150",
    thumbnail: "zanahoria.com",
    code: "111",
    stock: "30",
  },
];

comestibles.map((el) => {
  admProductos.addProduct(
    el.title,
    el.description,
    el.price,
    el.thumbnail,
    el.code,
    el.stock
  );
});

admProductos.updateProduct(2,"naranjas","las mas ricas y jugosas",100,"naranja.com",24,100);
admProductos.deleteProduct(3)
admProductos.getProducts()
