//import of the dependencie Express js, and the class "ProductManager2" from "product_In_memory.js"//
import express from "express";
import { cartRouter } from "./cartRouter.js";
import { productRouter } from "./productRouter.js";


//Creation of the port used by the server//
const port = 8080;

//Creation of the server//
const app = express();

app.use(express.static('./public'));

//exression used so that the complex information is well interpreted by the server//
app.use(express.urlencoded({extended:true}));


//
app.use(express.json())

//
app.use( '/api/products', productRouter);
app.use( '/api/cart', cartRouter);

//activation of the server//
app.listen(port,() => console.log("Servidor activo en el puerto "+port));
