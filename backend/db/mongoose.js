const mongoose = require('mongoose')
mongoose.pluralize(null) // to avoid creating collection name in lower case and with 's'

// mongoose connection
mongoose.connect('mongodb://localhost:27017/Fashionista').then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

module.exports = {
    mongoose
};