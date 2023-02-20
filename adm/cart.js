//import of the dependencies own of FileSystem//
import fs from "fs"

//Class made to create the Cart Manager//
export class CartManager {
    
    constructor(){
        this.path = "../DB/cart.json";
        this.path2 = "../DB/product.json";
    }

//Method used to find the especific cart by his id, and show a list of it's products, in case to find it.//
    getCartById (id) {
        const cart = JSON.parse(fs.readFileSync(this.path, "utf-8"))
        const found = cart.find(cart => cart.id===id)
        if (found) {
          return cart.products;  
        } else {
            Error("Carrito no encontrado")
        }  
    }

//Method used to create new carts with the array "Products", which contains the product id and the quantity of the product added//
     addCart ( {quantity } ){
        const product = JSON.parse(fs.readFileSync(this.path2,"utf-8"));
        const found = product.find(prod=>prod.id===product.id);
        if (found) {
            const cart = JSON.parse(fs.readFileSync(this.path,"utf-8"));
            const id = cart.length + 1;
            const carts = new Cart({
                id,
                products: [product.id,quantity]
            });
            cart.push(carts); 
            fs.writeFileSync(this.path, JSON.stringify(carts));
        } else if(Cart.products.quantity===1){
            Cart.products.quantity++; 
        }
        else{
            new Error("Carrito no creado. No se encontró el producto deseado");
        }

    }


//Method used to remove the cart present in the DB, tracking the id of the cart//
    removeCart(id){
        const cart = JSON.parse(fs.readFileSync(this.path, "utf-8"))
        const found = cart.find((cart) => cart.id===id)
        if (found) {
            const newCart = cart.filter((cart) => cart.id!==id);
            alert("Carrito eliminado");
            return fs.writeFileSync(this.path, JSON.stringify(newCart) )  
        } else {
            alert("No se encuentra el carrito en la BD")
        }
    }
}

//Class made to create the Cart that are inserted in the array "Cart Manager"//
class Cart {
    constructor({id,products}){
        this.id = id;
        this.products = [];
    }
}







