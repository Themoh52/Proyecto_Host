
//Class made to create the Product Manager//
export class ProductManager2 {
    
    constructor(){
        this.elements =[
            {id:"1",title:"Producto 1",description:"Producto de prueba 1",price:25_000,thumbnail:"NA",code:"25A67K",stock:25},
            {id:"2",title:"Producto 2",description:"Producto de prueba 2",price:40_000,thumbnail:"NA",code:"29B68K",stock:30},
            {id:"3",title:"Producto 3",description:"Producto de prueba 3",price:60_000,thumbnail:"NA",code:"26C69K",stock:40},
            {id:"4",title:"Producto 4",description:"Producto de prueba 4",price:90_000,thumbnail:"NA",code:"22D70K",stock:10},
            {id:"5",title:"Producto 5",description:"Producto de prueba 5",price:100_000,thumbnail:"NA",code:"21E71K",stock:15},
            {id:"6",title:"Producto 6",description:"Producto de prueba 6",price:10_000,thumbnail:"NA",code:"23F72K",stock:30},
            {id:"7",title:"Producto 7",description:"Producto de prueba 7",price:15_000,thumbnail:"NA",code:"28G73K",stock:35},
            {id:"8",title:"Producto 8",description:"Producto de prueba 8",price:5_000,thumbnail:"NA",code:"22A74K",stock:40},
            {id:"9",title:"Producto 9",description:"Producto de prueba 9",price:1_000,thumbnail:"NA",code:"20A75K",stock:45},
            {id:"10",title:"Producto 10",description:"Producto de prueba 10",price:78_000,thumbnail:"NA",code:"24A76K",stock:40}
        ];
    }

//Method used to find the especific product by his id, and show it in case to find it//
    getProductById (id) {
        const found =  this.elements.find(product => product.id===id) 
        if (found) {
           return found;
        } else {
        console.log("Producto no encontrado")
        }   
    }

//Method used to create new products in the array "Product Manager"//
    addProduct ( elements ){
    this.elements.push(elements);
    }

//Method used to show the array with the products created//
    showProducts (limit) {
        if (limit!=="") {
            return this.elements.slice(0,limit);
        } else {
            return this.elements;
        }
    }

//Method used to update the product present in the DB, tracking the id of the product//
    updateProduct(updateProduct){
        Product.map((product)=>{
            if(product.id===updateProduct.id){
                product.id = product.id;
                product.title = updateProduct.title;
                product.description = updateProduct. description;
                product.price = updateProduct.price;
                product.thumbnail = updateProduct.thumbnail;
                product.code = updateProduct.code;
                product.stock = updateProduct.stock;
                return console.log("Producto modificado")
            }
        });
    }

//Method used to remove the product present in the DB, tracking the id of the product//
    removeProduct(id){
        const found = this.elements.find((product) => product.id===id)
        if (found) {
            const newProducts = this.elements.filter((product) => product.id!==id);
            console.log(newProducts)
            console.log("Producto eliminado"); 
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






