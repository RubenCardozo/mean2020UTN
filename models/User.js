const database = require('../bin/database')
const Schema = database.Schema;

const UserSchema = new Schema({
    name: {type: String, required:true},
    email: {type:String, required:true},
    password: {type:String, required: true}
});

module.exports = database.model('users',UserSchema);