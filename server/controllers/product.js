const Product = require('../models/product')

const getProducts = async (req, res, next) => {
    const search = req.query ? req.query : {};  
    const products = await Product.find(search).sort("id");
    res.status(200).json(products);
};

const updateProduct = async (req, res, next) => {
    const product = await Product.updateOne({id: req.body.id}, req.body )
    res.status(200).json(product);
};

const addProduct = async (req, res, next) => {
   try {
    const id =Math.floor(Math.random() * (10000000 - 100 + 1) + 100);
    await Product.create({id,...req.body});
    res.status(200).json({} );
   } catch (error) {
    console.log(error);
    res.status(500).json({});
   }
};

module.exports = { getProducts,updateProduct, addProduct } 