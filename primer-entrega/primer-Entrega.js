class ProductManager {
  
  #Products = []

  constructor() {
    this.id = 0
  }

  addProduct(title,description,price,thumbnail,code,stock) {
    this.id++
    const searchProduct = this.#Products.find(product => product.code === code)
    const producto = {
          id: this.id,
          title,
          description,
          price,
          thumbnail,
          code,
          stock
        }

    if(!searchProduct && title && description && price && thumbnail && code && stock){
      this.#Products.push(producto)
     console.log(`Evento creado con id: ${this.id}`)
    }else{
      console.log("ERROR: complete todos datos de entrada")
    }
  }

  getProducts() {
    return console.log(this.#Products)
  }

  getProductById(idProduct) {
    const producto = this.#Products.find(evento => evento.id === idProduct)

    if (!producto) {
      return console.log(`No hay productos con el id: ${idProduct}`) 
    }

    return console.log(producto) ;
  }
}


// ----TESTING----

const administradorProductos = new ProductManager()

const title1 = "papa";
const description1 = "papas muy nutritivas";
const price1 = "100";
const thumbnail1 = "papa.com";
const code1 = "55";
const stock1 = "20";

const title2 = "manzana";
const description2 = "fruta rica y deliciosa";
const price2 = "250";
const thumbnail2 = "manzana.com";
const code2 = "88";
const stock2 = "50";

const title3 = "zanahoria";
const description3 = "las mejores de la provincia";
const price3 = "150";
const thumbnail3 = "sin imagen";
const code3 = "111";
const stock3 = "30";


administradorProductos.getProducts()

administradorProductos.addProduct(title1,description1,price1,thumbnail1,code1,stock1)
administradorProductos.addProduct(title2,description2,price2,thumbnail2,code2,stock2)
administradorProductos.addProduct(title3,description3,price3,thumbnail3,code3,stock3)

administradorProductos.getProducts()
administradorProductos.addProduct(title1,description1,price1,thumbnail1,code1,stock1)
administradorProductos.addProduct(title1,description1,price1,thumbnail1,code1,stock1)

administradorProductos.getProductById(1)
administradorProductos.getProductById(8)
