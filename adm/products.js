import fs from 'fs'
import Product from './prod.js';

class ProductManager{

    constructor(){
        this.path = "./DB/products.json";
    }

    async readProducts(){
        const products = await fs.promises.readFile(this.path,'utf-8');
        return JSON.parse(products);
    }

    async writeProducts(products){
        await fs.promises.writeFile(this.path,JSON.stringify(products))
    }

    async addProduct({title,description,price,thumbnail,code,stock,category}){
        const products = await this.readProducts();
        const newProduct = new Product(title,description,price,thumbnail,code,stock,category)
        newProduct.id = products.length + 1;
        products.push(newProduct);
        await this.writeProducts(products);
        console.log("Producto añadido con éxito")
    }

}
export default ProductManager
