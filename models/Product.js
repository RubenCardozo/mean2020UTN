const database = require('../bin/database');
const Schema = database.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }, 
    sku:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
});

module.exports = database.model('Product',ProductSchema)