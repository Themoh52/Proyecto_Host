import { Router } from "express";
import { ProductManager } from "../adm/product.js";


export const webproductRouter = Router(); 


//Create a new ProductManager, and a list of products//
const productadm = new ProductManager();

//edition of GET pepition applied to show the amount of products of the DB//
webproductRouter.get('/',(req,res)=>{
        res.status(200).render("./layouts/main.handlebars")
    }
);

//edition of GET pepition applied to show the amount of products of the DB//
webproductRouter.get('/products',(req,res)=>{
    const products = req.query.products.handlebars;
    res.status(200).render("products")
}
);

//edition of GET petition applied to filter and show the products filtered//
webproductRouter.get('/',(req,res)=>{
    const id = req.params.id;
    if (id) {
        const found = productadm.getProductById(id);
        res.status(200).render(found);
    } else {
        res.status(400).render("Lo siento, producto no encontrado");
    }
    }
);

//edition of POST petition applied to add new products to the DB//
webproductRouter.post('/',(req,res)=>{
    const add = req.body;
    const Product = productadm.addProduct(add);
    if (Product) {
        res.status(201).render({Product});
    } else {
        res.status(404).render("Producto no ingresado")
    }
    }
)

//edition of PUT petition applied to update a product//
webproductRouter.put('/:id',(req,res) => {
    const id = req.params.id;
    const found = productadm.getProductById(id);
    if (found) {
        const update = req.body;
        found = productadm.updateProduct(update)
        res.status(200).render('Producto actualizado')
    } else {
        res.status(404).render("No se pudo actualizar el producto")
    } 
    }   
)

//edition of PUT petition applied to delete a product//
webproductRouter.delete('/:id',(req,res) => {
    const id = Number(req.params.id);
    if (id) {
       productadm.removeProduct(id);
       res.status(200).render('Producto eliminado') 
    } else {
       res.status(404).render('No se encuentra el producto que se desea eliminar') 
    }
    }
)