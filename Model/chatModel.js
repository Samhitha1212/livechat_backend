const mongoose=require('mongoose')
const Message=require('./messageModel.js')

const chat=new mongoose.Schema({
  members:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }],
  messages:[{ 
    type:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:Message,
    }],
    default:[],
  }],
  chatType:{
    type:String,
    enum:["one-to-one","group"],
    required:true
  },
  grpname:{
    type:String,
    default:""
  }
 

},{timestamps:true})

module.exports=mongoose.model('Chat', chat)