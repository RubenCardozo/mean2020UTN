const Product = require("../models/Product");

module.exports = {
    //All products
    getAll: async (req, res, next) => {
        //Query string. http://localhost:3000/products?toSearch=celular
        console.log(req.query);
        let searching={};
        if(req.query.toSearch){
            searching={name:{$regex:'.*'+req.query.toSearch+'.*'}};
        }
        let products = await productosModel.find(searching);
        res.json(products);
    },

    // Only one product for id
    getById: async (req, res, next) => {
        //Parameters. http://localhost:3000/products/id
        console.log(req.params);
        let product = await Product.findById(req.params.id);
        res.json(product);
    },
       
    
    //Creating new product
    save: async (req, res, next) => {
        const newProduct = new Product({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            sku:req.body.sku,
            category:req.body.category
        })
        let dataProduct = await newProduct.save();
        res.json(dataProduct);
    },

    //Update products
    update: async (req, res, next) => {
        let product = await Product.findByIdAndUpdate({_id:req.params.id},req.body,{multi:false})
        res.json(product);
    },

    //Delete product
    delete: async (req, res, next) => {
        let product = await Product.remove({_id:req.params.id})
        res.json(product);
    }  
}