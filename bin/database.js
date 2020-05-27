const mongoose = require('mongoose');

const {DB_HOST, DB_NAME}= process.env;

const DB_URI = `mongodb://${DB_HOST}/${DB_NAME}`;
//console.log(DB_URI);

mongoose.connect(DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Database connected in: ', DB_URI))
.catch(err => console.log(err));

module.exports = mongoose;