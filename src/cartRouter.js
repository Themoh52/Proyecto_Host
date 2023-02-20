import { Router } from "express";
import { CartManager } from "../adm/cart.js";

//Create a new ProductManager, and a list of products//
const cartadm = new CartManager;

export const cartRouter = Router();


//edition of GET pepition applied to show the amount of products of the DB//
cartRouter.get('/:id',(req,res)=>{
    const id = req.params.id;
    if (id) {
        const slice = cartadm.showProducts(limits);
        res.status(200).send(slice);
    } else {
        res.status(200).json({cartadm})
    }
    }
);

//edition of GET petition applied to show the list of products added to a specific cart//
cartRouter.post('/:id',(req,res)=>{
    const id = req.params.id;
    if (id) {
        const found = cartadm.getCartById(id);
        res.status(200).json(found);
    } else {
        res.status(400).send("Lo siento, producto no encontrado");
    }
    }
);

//edition of GET petition applied to create new carts//
cartRouter.post('/add',(req,res)=>{
    const add = req.body;
    const newCart = cartadm.addCart(add);
    res.status(201).json(newCart);
    }
)

