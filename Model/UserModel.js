const mongoose=require('mongoose')

const message=new mongoose.Schema({
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  },
  content:String,
  time:String
})

const chat=new mongoose.Schema({
  users:[String],
  messages:[message],
  type:String

})

const userSchema=new mongoose.Schema({

  email:String,
  username:String,
  photo:String,
  lastSeen:String,
  chats:{
    type:[chat],
    default:[]
  }
  ,
  fid:String,

  createAt:{
    type:Date,
    default:()=>Date.now()
  }

})

module.exports=mongoose.model('users',userSchema)