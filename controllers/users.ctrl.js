const User = require("../models/User");

module.exports = {
    
    save: async function(req, res, next) {
        console.log(req.body)
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password

        })
        let dataUser = await user.save();
        res.json(dataUser);
    },
    login: async function(req, res, next) {
        
        res.json(products);
    }
}