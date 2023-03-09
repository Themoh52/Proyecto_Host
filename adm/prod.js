class Product{
    constructor(title,description,price,thumbnail,code,stock,category){
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
export default Product