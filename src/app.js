//import of the dependencie Express//
import express from "express";
import { ProductManager2 } from "./product_In_memory.js";


//Creation of the port used by the server//
const port = 8080;

//Creation of the server//
const app = express();

//Create a new ProductManager, and a list of //
const productadm = new ProductManager2()


//exression used so that the complex information is well interpreted by the server//
app.use(express.urlencoded({extended:true}));


//edition of GET pepition applied to show the amount of products of the DB//
app.get('/products',(req,res)=>{
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
app.get('/products/:id',(req,res)=>{
    const id = req.params.id;
    if (id) {
        const found = productadm.getProductById(id);
        res.status(200).json(found);
    } else {
        res.status(400).send("Lo siento, producto no encontrado");
    }
    }
);
//activation of the server//
app.listen(port,() => console.log("Servidor activo en el puerto "+port));
