//import of the dependencies own of FileSystem//
import fs from "fs"

//Class made to create the Product Manager//
export class ProductManager {
    
    constructor(){
        this.path = "./DB/products.json"; 
    }

//Method used to find the especific product by his id, and show it in case to find it//
    getProductById (id) {
        const products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        const found = products.find(product => product.id===id);
        if (found) {
          return found;  
        } else {
          new Error ("Producto no encontrado");
        }  
    }

//Method used to create new products in the array "Product Manager"//
     addProduct ( { title,description,price,thumbnail,code,stock,category,status } ){
        const products = JSON.parse(fs.readFileSync(this.path,"utf-8"));
        const id = products.length + 1;
        const product = new Product({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            category,
            status
        }
        );
        products.push(product);
        fs.writeFileSync(this.path, JSON.stringify(products));
    }

//Method used to show the array with the products created//
    showProducts (limit) {
        const products =  JSON.parse(fs.readFileSync(this.path,"utf-8"));
        if (products) {
          return products.slice(0,limit);  
        } else {
            return products;
        }
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
                return alert("Producto modificado")
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
export class Product {
    constructor({id,title,description,price,thumbnail,code,stock,category,status}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.category = category;
        this.status = true;
        this.title==="" && this.description==="" && this.price===NaN && this.code==="" && this.stock===NaN && this.category==="" && this.status===false  
        ? new Error ("Producto no ingresado. O no ingresaste todos los datos, o el stock y el precio no son ser números"
            ) 
        : console.log("Producto ingresado");
    }
}






