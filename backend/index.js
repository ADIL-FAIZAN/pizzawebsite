const mongoose=require('mongoose');
const express=require("express");
const registeruser=require("./routes/registeruser")
const loginuser=require("./routes/loginuser")
const menudata =require("./routes/menudata")
const userorder =require("./routes/userorders")
const order =require("./routes/order")
const editpizza =require("./routes/editpizza")
const updatedpizza =require("./routes/updatedpizza")
const category =require("./routes/category")
const deletes =require("./routes/deletedata")
const cors = require('cors');
const { required } = require('joi');
const app=express();





app.use(cors());
app.use(express.json());
app.use('/api/updateddata',updatedpizza)
app.use('/api/registeruser', registeruser);
app.use('/api/userorder', userorder);
app.use('/api/pizzabyid', editpizza);
app.use('/api/login', loginuser);
app.use('/api/category', category);
app.use('/api/menudata', menudata);
app.use('/api/checkout', order);
app.use('/api/deletedata',deletes)






mongoose.connect("mongodb://127.0.0.1:27017/PizzaDatabase")
.then(()=>console.log("Connecting with mongodb database"))
.catch(err => console.error("Error connecting to MongoDB:", err.message));
  

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log("listening on port",port))

