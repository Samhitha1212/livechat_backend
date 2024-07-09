const mongoose=require('mongoose')
const Chat=require('./chatModel')

const userSchema=new mongoose.Schema({

  email:{
    type:String,
    required:true
  },
  fid:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  photo:{
    type:String,
    default:""
  },
  lastSeen:{
    type:String,
    default:""
   
  },
  chats:{
    type:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:Chat,
    }],
    default:[]
  }
  ,


 
},{timestamps:true})

module.exports=mongoose.model('User',userSchema)