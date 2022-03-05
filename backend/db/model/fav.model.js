const mongoose = require("mongoose");

const FavSchema = new mongoose.Schema({
  _userId: { type: String, required: true },
  products: [ { _id: {type: mongoose.Schema.Types.ObjectId, ref: "Product", }, },]
  
  // _userId: {  type: mongoose.Schema.Types.ObjectId, ref: "User",  required: true },

  // products: [
  //   // _id:false,
  //   // _id:false, { childId: { type: ObjectId, ref: 'Child', required: true } },
  //   {
  //     _id: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Product",
  //     },
  //   },
  // ],
 // _id:false,
    // _id:false, { childId: { type: ObjectId, ref: 'Child', required: true } },
 
});
const Fav = mongoose.model("Favourite", FavSchema);

module.exports = Fav;
