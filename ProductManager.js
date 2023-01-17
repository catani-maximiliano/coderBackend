const fs = require("fs");
const path = "./ProductManager.json";

if (!fs.existsSync(path)) {
  fs.writeFileSync(path, JSON.stringify([], null, "\t"));
}

class ProductManager {
  #Products = [];

  constructor() {
    this.id = 0;
    this.path = "./ProductManager.json";
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const productosObjeto = JSON.parse(fs.readFileSync(this.path, "utf-8"));
  

    if (productosObjeto) {
      this.id++;
      const producto = {
        id: this.id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      const searchProduct = productosObjeto.find(
        (product) => product.code === code
      );
      console.log(searchProduct);

      if (
        !searchProduct &&
        title &&
        description &&
        price &&
        thumbnail &&
        code &&
        stock
      ) {
        productosObjeto.push(producto);
        fs.writeFileSync(
          this.path,
          JSON.stringify(productosObjeto, null, "\t")
        );
        console.log(`Evento 1 creado con id: ${this.id}`);
      } else {
        console.log("ERROR: ya existe el producto con este codigo");
      }
    } else {
      this.id++;
      const producto = {
        id: this.id,
        title, 
        description,
        price,
        thumbnail,
        code,
        stock,
      };

      if (title && description && price && thumbnail && code && stock) {
        
        fs.writeFileSync(this.path, JSON.stringify(producto));

        console.log(`Evento creado con id: ${this.id}`);
      } else {
        console.log("ERROR: complete todos datos de entrada");
      }
    }
  }

  getProducts() {
    const prod = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    console.log(prod);
  }

  getProductById(idProduct) {
    const productosOb = JSON.parse(fs.readFileSync(this.path, "utf-8"));

    const producto = productosOb.find((evento) => evento.id === idProduct);

    if (!producto) {
      return console.log("no hay producto");
    }

    return console.log(producto);
  }

  updateProduct(idProduct, title, description, price, thumbnail, code, stock) {
    const productosObjeto = JSON.parse(fs.readFileSync(this.path, "utf-8"));

    const findProducto = productosObjeto.find(
      (evento) => evento.id === idProduct
    );
    const indexProducto = productosObjeto.indexOf(findProducto);

    const product = {
      id: idProduct,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    if (findProducto) {
      if (title && description && price && thumbnail && code && stock) {
        productosObjeto.splice(indexProducto, 1, product);
        fs.writeFileSync(
          this.path,
          JSON.stringify(productosObjeto, null, "\t")
        );

        console.log(`Evento modificado con id: ${this.id}`);
        return console.log(productosObjeto[indexProducto]);
      } else {
        console.log("ERROR: complete todos datos de entrada");
      }
    } else {
      console.log(`el producto con id ${idProduct} no existe`);
    }
  }

  deleteProduct(idProduct) {
    const productosObjeto = JSON.parse(fs.readFileSync(this.path, "utf-8"));

    const findProducto = productosObjeto.find(
      (evento) => evento.id === idProduct
    );
    const indexProducto = productosObjeto.indexOf(findProducto);
    if (findProducto) {
      productosObjeto.splice(indexProducto, 1);
      fs.writeFileSync(this.path, JSON.stringify(productosObjeto, null, "\t"));
    } else {
      console.log(`el producto con el id ${idProduct} no existe `);
    }
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

//admProductos.getProductById(1)
//admProductos.updateProduct(2,"naranjas","las mas ricas y jugosas",100,"naranja.com",24,100);
//admProductos.deleteProduct(2)
//admProductos.getProducts()
