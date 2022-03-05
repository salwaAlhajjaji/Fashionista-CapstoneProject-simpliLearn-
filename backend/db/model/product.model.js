const mongoose =require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{ type: String, required: true, trim: true },
    description:{ type: String, required: true, trim: true },
    price:{ type: Number, required: true, trim: true },
    // image:{
    //     data: Buffer,
    //     contentType: String,
    //     required: true,
    // },
    // https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
    // https://stackoverflow.com/questions/29780733/store-an-image-in-mongodb-using-node-js-express-and-mongoose
})
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product;