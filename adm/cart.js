//import of the dependencies own of FileSystem//
import fs from "fs"

//Class made to create the Product Manager//
export class CartManager {
    
    constructor(){
        this.path = "./DB/cart.json"; 
    }

//Method used to find the especific product by his id, and show it in case to find it//
    getCartById (cid) {
        this.#readFile();
        const found = json.find((json) => json.id===cid);
        return found;
    }

    async #readFile(){
        const cart = await fs.readFile(this.path,"utf-8");
        const json = JSON.parse(cart);
    }

    async #writeFile(){
        const newCart = JSON.stringify(products,null,2);
        await fs.writeFile(this.path, newCart);
    }

//Method used to create new Carts//
     async addCart ( { title,description,price,thumbnail,code,stock,category,status } ){
        await this.#readFile();
        const id = json.length + 1;
        const cart = new Cart({
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
        json.push(cart);
        this.#writeFile(cart);
        return cart;
    }

//Method used to update the product present in the DB, tracking the id of the product//
    async #updateCart(updateCart){
        await this.readFile();
        json.map((json)=>{
            if(json.id===updateCart.id){
                json.id = json.id;
                json.title = updateCart.title;
                json.description = updateCart. description;
                json.price = updateCart.price;
                json.thumbnail = updateCart.thumbnail;
                json.code = updateCart.code;
                json.stock = updateCart.stock;
                return alert("Producto modificado")
            }
        });
        return await this.#writeFile();
    }

    async addproductInCart(cid,pid){
        const cart = await this.getCartById(cid);
        cart.addProduct(pid);
        await this.#updateCart(cid,cart);
    }

    async removeproductFromCart(cid,pid){
        const cart = await this.getCartById(cid)
        cart.removeProduct(pid);
        await this.#updateCart(cid,cart)
    }


//Method used to remove the product present in the DB, tracking the id of the product//
    async removeCart(cid){
        this.readFile();
        const found = json.find((json) => json.id===cid)
        if (found) {
            const newProduct= json.filter((json) => json.id!==cid);
            console.log("Producto eliminado");
            return await this.#writeFile();  
        } else {
            console.log("No se encuentra el producto en la BD")
        }
    }
}


//Class made to create the products that are inserted in the array "Product Manager"//
export class Cart {
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

    addProduct(){

    }
    removeProduct(){

    }
}