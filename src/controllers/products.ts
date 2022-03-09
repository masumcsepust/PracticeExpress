import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../entity/products";


export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    let product = new Product();
    const repository = getRepository(Product);
    const products = await repository.find();
    console.log('Products: ', products);
    res.status(200).send({
        message: 'Success',
        products: products
    });
}

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.file);
    
    const repository = getRepository(Product);
    const products = new Product();
    products.name = req.body.name;
    products.description = req.body.description;
    products.productImage = 'public/images/' + req.file.filename;
    products.price = req.body.price;
    products.rating = req.body.rating;
    console.log('Products: ',products);

    const data = await repository.save(products);
    console.log(data);

    res.status(201).send({
        message: 'Success',
        products: products
    })
}