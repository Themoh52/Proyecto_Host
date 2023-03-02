//import of the dependencie Express js, and the class "ProductManager2" from "product_In_memory.js"//
import express from "express";
import { cartRouter } from "../routes/apiCartRouter.js";
import { productRouter } from "../routes/apiProductRouter.js";
import { Server } from "socket.io";
import { webproductRouter } from "../routes/webProductRouter.js";
import { webcartRouter } from "../routes/webCartRouter.js";
import { engine } from "express-handlebars";
import { ProductManager } from "../adm/product.js";


//Creation of the port used by the server//
const port = 8080;

//Creation of the server//
const app = express();

//
app.use(express.static('./public'));

//
app.engine('handlebars',engine())
app.set('views','./views')
app.set('view engine','handlebars')


//exression used so that the complex information is well interpreted by the server//
app.use(express.urlencoded({extended:true}));

//
const productAdm = new ProductManager(); 

//
app.use(express.json())

//
app.use( '/api/products', productRouter);
app.use( '/api/cart', cartRouter);
app.use('/home',webproductRouter);
app.use('/cart',webcartRouter);

//activation of the server//
const server = app.listen(port,() => console.log("Servidor activo en el puerto "+port));

//Connection between the server and Socket.io//
const io = new Server(server);

io.on('connection', socket=>{

    console.log("Nuevo usuario conectado")
    io.sockets.emit('message', "Saludos, soy Prueba1, y ahora te presentamos el espacio para agregar productos a nuestra Base de Datos");

    socket.on('NewProduct', async (newProduct)=>{
        productAdm.addProduct(newProduct);
        console.log(newProduct)
        const products = await productAdm.showProducts()
        console.log(products);
        io.sockets.emit('update', products)
    })

    socket.on('showProducts', () =>{
        io.sockets.emit('update', productAdm.showProducts())
    })

})
