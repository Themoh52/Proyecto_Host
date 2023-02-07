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
     addProduct ( { title,description,price,thumbnail,code,stock } ){
        const products = JSON.parse(fs.readFileSync(this.path,"utf-8"));
        const id = products.length + 1;
        const product = new Product({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        );
        products.push(product); 
        fs.writeFileSync(this.path, JSON.stringify(products));
    }

//Method used to show the array with the products created//
    showProducts () {
        const products =  JSON.parse(fs.readFileSync(this.path,"utf-8"));
        (products) ? console.log(products) : console.log("Produto no encontrado");
    }

//Method used to update the product present in the DB, tracking the id of the product//
    updateProduct(updateProduct){
        const products = JSON.parse(fs.readFileSync(this.path, "utf-8")) 
        products.map((product)=>{
            if(product.id===updateProduct.id){
                products.id = products.id;
                products.title = updateProduct.title;
                products.description = updateProduct. description;
                products.price = updateProduct.price;
                products.thumbnail = updateProduct.thumbnail;
                products.code = updateProduct.code;
                products.stock = updateProduct.stock;
                return console.log("Producto modificado")
            }
        });
        return fs.writeFileSync(this.path, JSON.stringify(products));
    }

//Method used to remove the product present in the DB, tracking the id of the product//
    removeProduct(id){
        const products = JSON.parse(fs.readFileSync(this.path, "utf-8"))
        const found = products.find((product) => product.id===id)
        if (found) {
            const newProducts = products.filter((product) => product.id!==id);
            console.log("Producto eliminado");
            return fs.writeFileSync(this.path, JSON.stringify(newProducts) )  
        } else {
            console.log("No se encuentra el producto en la BD")
        }
    }
}

//Class made to create the products that are inserted in the array "Product Manager"//
class Product {
    constructor({id,title,description,price,thumbnail,code,stock}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.code=== "" && this.price===NaN && this.stock===NaN 
        ? new Error ("Producto no ingresado. El stock y el precio deben ser números"
            ) 
        : console.log("Producto ingresado");
    }
}

//New array// 
const productAdm = new ProductManager();
productAdm.addProduct({title:"Producto 1",description:"Producto de prueba 1",price:25_000,thumbnail:"NA",code:"25A67K",stock:25});
productAdm.showProducts();
productAdm.getProductById(1);
productAdm.updateProduct({id:1,title:"Producto 2",description:"Producto de prueba 2",price:20_000,thumbnail:"NA",code:"304Bk9",stock:10});
productAdm.removeProduct(1);




