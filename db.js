const mongoose =require('mongoose')
const dotenv=require("dotenv")
dotenv.config()

const url=process.env.MONGO_DB_URL

module.exports.connect=()=>{
  mongoose.connect(url,console.log("Data base is connected"))
}