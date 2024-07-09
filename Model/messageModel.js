const mongoose=require('mongoose')

const message=new mongoose.Schema({
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  content:{
    type:String,
    required:true
  },
},{timestamps:true})

module.exports=mongoose.model('Message',message)