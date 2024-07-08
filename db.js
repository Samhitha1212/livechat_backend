const mongoose =require('mongoose')
const url='mongodb+srv://Samhitha1212:Samhitha%40121@cluster0.yn8m78o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

module.exports.connect=()=>{
  mongoose.connect(url,console.log("Data base is connected"))
}