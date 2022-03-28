const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
// database imports
const mongoose = require("./db/mongoose");
const ProductRoutes = require("./db/routes/product.routes");
const FavRoutes = require('./db/routes/fav.routes')
const CartRoutes = require('./db/routes/cart.routes')
const AuthRoutes = require('./db/routes/auth.routes')
const UserRoutes = require('./db/routes/user.routes')

// import middleware
const passportJWT = require('./db/middleware/passport.JWT')()
// middleware
app.use(passportJWT.initialize())


/*****  ROUTE HANDLERS *****/

// /*** PRODUCT ROUTES ***/
// app.use('/product', passportJWT.authenticate(), ProductRoutes);
app.use('/product',  ProductRoutes);
// /*** WISH LIST ROUTES ***/
app.use('/wish-list', FavRoutes);
// /*** CART ROUTES ***/
app.use('/cart', CartRoutes);
// /*** Auth ROUTES ***/
app.use('/auth', AuthRoutes);
// /*** User ROUTES ***/
app.use('/user', UserRoutes);



// /**
//  * GET /product
//  * Purpose: get all products
//  */
// app.get("/product", (req, res) => {
//   Product.find({}, (err, doc) => {
//     if (!err) {
//       res.send(doc);
//     } else {
//       res.send(err);
//     }
//   });
// });
// /**
//  * GET /product
//  * Purpose: get product by id
//  */
//  app.get("/product/:id", (req, res) => {
//     Product.find({ _id: req.params.id },   (err, doc) => {
//       if (!err) {
//         res.send(doc);
//       } else {
//         res.send(err);
//       }
//     });
//   });
// /**
//  * POST /product
//  * Purpose: add new product
//  */
// app.post("/product", (req, res) => {
//   // get data from request
//   let product_name = req.body.name;
//   let product_desc = req.body.description;
//   let product_price = req.body.price;
//   // set data to schema
//   let newProduct = new Product({
//     name: product_name,
//     description: product_desc,
//     price: product_price,
//   });
//   // save data to db
//   newProduct.save((err, result) => {
//     if (!err) {
//       res.send(result);
//     } else {
//       res.send(err);
//     }
//   });
// });
// /**
//  * PATCH /lists/:id
//  * Purpose: Update a specified product
//  */
// app.patch("/product/:id", (req, res) => {
//   // We want to update the specified product (product document with id in the URL) with the new values specified in the JSON body of the request
//   Product.findOneAndUpdate(
//     { _id: req.params.id },
//     {
//       $set: req.body,
//     }
//   ).then(() => {
//     res.send({ message: "updated successfully" });
//   });
// });
// /**
//  * DELETE /lists/:id
//  * Purpose: Delete a list
//  */
// app.delete("/product/:id", (req, res) => {
//   // We want to delete the specified product (document with id in the URL)
//   Product.findOneAndRemove({
//     _id: req.params.id,
//   }).then((removedProductDoc) => {
//     res.send(removedProductDoc);
//   });
// });

// /*** CART ROUTES ***/
// /**
//  * GET /product
//  * Purpose: get all products
//  */
//  app.get("/cart", (req, res) => {
//     Product.find({}, (err, doc) => {
//       if (!err) {
//         res.send(doc);
//       } else {
//         res.send(err);
//       }
//     });
//   });
//   /**
//    * POST /product
//    * Purpose: add new product
//    */
//   app.post("/product", (req, res) => {
//     // get data from request
//     let product_name = req.body.name;
//     let product_desc = req.body.description;
//     let product_price = req.body.price;
//     // set data to schema
//     let newProduct = new Product({
//       name: product_name,
//       description: product_desc,
//       price: product_price,
//     });
//     // save data to db
//     newProduct.save((err, result) => {
//       if (!err) {
//         res.send(result);
//       } else {
//         res.send(err);
//       }
//     });
//   });
//   /**
//    * PATCH /lists/:id
//    * Purpose: Update a specified product
//    */
//   app.patch("/product/:id", (req, res) => {
//     // We want to update the specified product (product document with id in the URL) with the new values specified in the JSON body of the request
//     Product.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         $set: req.body,
//       }
//     ).then(() => {
//       res.send({ message: "updated successfully" });
//     });
//   });
//   /**
//    * DELETE /lists/:id
//    * Purpose: Delete a list
//    */
//   app.delete("/product/:id", (req, res) => {
//     // We want to delete the specified product (document with id in the URL)
//     Product.findOneAndRemove({
//       _id: req.params.id,
//     }).then((removedProductDoc) => {
//       res.send(removedProductDoc);
//     });
//   });

app.listen(9090, () => console.log("Server is running on port 9090"));
