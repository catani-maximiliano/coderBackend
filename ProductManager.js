const fs = require("fs")

const path = "./ProductManager.json"

if(!fs.existsSync(path)){
  fs.writeFileSync(path,JSON.stringify([], null, '\t'))
}
 
class ProductManager {
  #Products = [];
   

  constructor() {
    this.id = 0
  }
 
 
  addProduct(title, description, price, thumbnail, code, stock) {
    const productosObjeto= JSON.parse(fs.readFileSync(path,"utf-8")) 
    console.log(productosObjeto.lastIndexOf()===-1)

 
    if (productosObjeto.length > 2) {
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
      console.log(searchProduct)
     
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
            fs.writeFileSync(path,JSON.stringify(productosObjeto, null, '\t'))
            console.log(`Evento 1 creado con id: ${this.id}`);
          } else {
            console.log("ERROR: complete todos datos de entrada");
          }
    } else{
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
    
    if (
      title &&
      description &&
      price &&
      thumbnail &&
      code &&
      stock
    ) {
      productosObjeto.push(producto);
      fs.writeFileSync(path,JSON.stringify(productosObjeto))
 
      console.log(`Evento creado con id: ${this.id}`);
    } else {
      console.log("ERROR: complete todos datos de entrada");
    }}
  }

  getProducts() {
    const prod= JSON.parse(fs.readFileSync(path,"utf-8")) 
    console.log(prod)
  } 

  getProductById(idProduct) {
    const productosOb= JSON.parse(fs.readFileSync(path,"utf-8")) 
   

    const producto = productosOb.find((evento) => evento.id === idProduct);

    if (!producto) {
      return console.log('no hay producto');
    }

    return console.log(producto);
  }

  updateProduct(idProduct, title, description, price, thumbnail, code, stock) {
    const productosObjeto= JSON.parse(fs.readFileSync(path,"utf-8")) 

    const findProducto = productosObjeto.find((evento) => evento.id === idProduct);
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

    if (
      title &&
      description &&
      price &&
      thumbnail &&
      code &&
      stock
    ) {
      productosObjeto.splice(indexProducto, 1, product);
      fs.writeFileSync(path,JSON.stringify(productosObjeto, null, '\t'))

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

//admProductos.getProducts()
//admProductos.updateProduct(0,'papilla','tubisuperpapilla',1000000,'tunmb',150,150000000) 
//admProductos.getProducts()
//admProductos.updateProduct(2,"naranjas","las mas ricas y jugosas",100,"naranja.com",24,100);
//admProductos.deleteProduct(3)
//admProductos.getProducts()
  