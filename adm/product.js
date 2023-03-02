//import of the dependencies own of FileSystem//
import fs from "fs"

//Class made to create the Product Manager//
export class ProductManager {
    
    constructor(){
        this.path = "./DB/products.json"; 
    }

//Method used to find the especific product by his id, and show it in case to find it//
    getProductById (pid) {
        const found = json.find((json) => json.id===pid);
        if (found) {
          return found;  
        } else {
          new Error ("Producto no encontrado");
        }  
    }

    async #readFile(){
        const products = await fs.readFile(this.path,"utf-8");
        const json = JSON.parse(products);
        return json
    }

    async #writeFile (products) {
        await fs.writeFileSync(this.path, products);
    }

//Method used to create new products in the array "Product Manager"//
     async addProduct ( { title,description,price,thumbnail,code,stock,category,status } ){
        const products = await this.#readFile();
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
        console.log(product)
        products.push(product);
        this.#writeFile(products);
        return {success:"Producto agregado con éxito", product:product};
    }

//Method used to show the array with the products created//
    async showProducts () {
        const products = await fs.readFile(this.path,"utf-8");
        return products;
    }

//Method used to update the product present in the DB, tracking the id of the product//
    async updateProduct(updateProduct){
        await this.#readFile();
        json.map((json)=>{
            if(json.id===updateProduct.id){
                json.id = json.id;
                json.title = updateProduct.title;
                json.description = updateProduct. description;
                json.price = updateProduct.price;
                json.thumbnail = updateProduct.thumbnail;
                json.code = updateProduct.code;
                json.stock = updateProduct.stock;
                return alert("Producto modificado")
            }
        });
        return await this.#writeFile();
    }

//Method used to remove the product present in the DB, tracking the id of the product//
    async removeProduct(id){
        this.#readFile();
        const found = json.find((json) => json.id===id)
        if (found) {
            const newProduct= json.filter((json) => json.id!==id);
            console.log("Producto eliminado");
            return await this.#writeFile();  
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
        ? new Error ("Producto no ingresado. O no ingresaste todos los datos, o el stock y el precio no son números"
            ) 
        : console.log("Producto ingresado");
    }
}






