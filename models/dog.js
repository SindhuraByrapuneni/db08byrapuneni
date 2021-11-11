const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
 Brand: String, 
 color: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Dog", dogSchema) 