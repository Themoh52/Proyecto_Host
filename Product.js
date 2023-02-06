//import of the dependencies own of FileSystem//
const fs = require('fs')

//Class made to create the Product Manager//
class ProductManager {
    
    constructor(){
        this.path = "Products.json";
        fs.writeFileSync(this.path,"[]")
    }

//Method used to find the especific product by his id, and show it in case to find it//
    getProductById (id) {
        const products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
        products.find(product => product.id===id) ?  console.log(products) : console.log("Producto no encontrado")
    }

//Method used to create new products in the array "Product Manager"//
     addProduct ( { title,description,price,thumbnail,code,stock,id } ){
        const products = JSON.parse(fs.readFileSync(this.path,"utf-8"));
        (products.length===0) ? products.id=1 : products.id++;
        products.push(new Product ({ title,description,price,thumbnail,code,stock,id })); 
        fs.writeFileSync(this.path, JSON.stringify(products));
    }

//Method used to show the array with the product created//
    showProduct () {
        const products =  JSON.parse(fs.readFileSync(this.path,"utf-8"));
        (products) ? console.log(products) : console.log("Produto no encontrado")
    }

//Method used to update the product created//
    updateProduct(id){
        const products = JSON.parse(fs.readFileSync(this.path, "utf-8")) 
        products.map((Product)=>{
            if(Product.id===id){
                products.title = Product.title
                products.description = Product. description
                products.price = Product.price
                products.thumbnail = Product.thumbnail
                products.code = Product.code
                products.stock = Product.stock
            }
        })
        console.log("Producto modificado")
    }

//Method used to remove the product created
    removeProduct(id){
        const products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
        const found = products.find(product => product.id===id)
        ((found) && fs.rmSync(this.path)) ? console.log("Producto eliminado") : console.log("Producto no encontrado")
    }
}

//Class made to create the products that are inserted in the array "Product Manager"//
class Product {

    constructor({title,description,price,thumbnail,code,stock}){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        (this.code==="" & this.price===NaN & this.stock===NaN) ? new Error ("Producto no ingresado. El stock y el precio deben ser números") : console.log("Producto ingresado");
    }
}

//New array//
const Product1 = new ProductManager()
Product1.addProduct({title:"Producto 1",description:"Producto de prueba 1",price:25_000,thumbnail:"NA",code:"25A67K",stock:25})
Product1.showProduct()
Product1.getProductById()
Product1.updateProduct({title:"Producto 2",description:"Producto de prueba 2",price:20_000,thumbnail:"NA",code:"304Bk9",stock:10})



