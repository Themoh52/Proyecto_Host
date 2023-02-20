import { Router } from "express";
import { ProductManager } from "../adm/product.js";

export const productRouter = Router(); 


//Create a new ProductManager, and a list of products//
const productadm = new ProductManager();

//edition of GET pepition applied to show the amount of products of the DB//
productRouter.get('/',(req,res)=>{
    const limits = req.query.limits;
    if (limits!=="") {
        const slice = productadm.showProducts(limits);
        res.status(200).send(slice);
    } else {
        res.status(200).json({productadm})
    }
    }
);

//edition of GET petition applied to filter and show the products filtered//
productRouter.get('/:id',(req,res)=>{
    const id = req.params.id;
    if (id) {
        const found = productadm.getProductById(id);
        res.status(200).json(found);
    } else {
        res.status(400).send("Lo siento, producto no encontrado");
    }
    }
);

//edition of POST petition applied to add new products to the DB//
productRouter.post('/add',(req,res)=>{
    const add = req.body;
    const Product = productadm.addProduct(add);
    if (Product) {
        res.status(201).json({Product});
    } else {
        res.status(404).send("Producto no ingresado")
    }
    }
)

//edition of PUT petition applied to update a product//
productRouter.put('/update',(req,res) => {
    const update = req.body;
    found = productadm.updateProduct(update)
    if (found) {
        res.status(200).send('Producto actualizado')
    } else {
        res.status(404).send("No se pudo actualizar el producto")
    } 
    }   
)

//edition of PUT petition applied to delete a product//
productRouter.delete('/delete/:id',(req,res) => {
    const id = req.params.id;
    if (id) {
       productadm.removeProduct(id);
       res.status(200).send('Producto eliminado') 
    } else {
       res.status(404).send('No se encuentra el producto que se desea eliminar') 
    }
    }
)